import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './components/BookingForm';
import About from './components/About.js';
import { initializeTimes, updateTimes } from './components/Utils.js';

const mockForm = {
  register: jest.fn(),
  handleSubmit: (fn) => (e) => e.preventDefault(),
  formState: { errors: {} },
  watch: jest.fn(),
  setValue: jest.fn(),
};

const mockTimes = [
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
];

test("initializeTimes returns expected default times", () => {
  const times = initializeTimes();
  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBe(11);
  expect(times[0]).toBe("05:00 PM");
  expect(times[times.length - 1]).toBe("10:00 PM");
});

test("updateTimes returns the same list when action is dateChanged", () => {
  const initialState = initializeTimes();
  const action = { type: "dateChanged", payload: "2025-11-08" };
  const newState = updateTimes(initialState, action);
  expect(Array.isArray(newState)).toBe(true);
  expect(newState).toEqual(initialState); // identical for now
});

test("updateTimes returns current state for unknown action", () => {
  const initialState = initializeTimes();
  const action = { type: "unknownAction" };
  const newState = updateTimes(initialState, action);
  expect(newState).toBe(initialState); // original data returned
});

// test("updateTimes changes times when dateChanged action is dispatched", () => {
//   const initialState = initializeTimes();
//   const action = { type: "dateChanged", payload: "2025-12-25" };
//   const newState = updateTimes(initialState, action);

//   // Example placeholder expectation
//   expect(newState).not.toBe(initialState);
//   expect(newState.length).toBeGreaterThan(0);
// });

// test('Simulates user updating the date which triggers updateTimes', () => {
//   const { getByTestId, getAllByTestId } = render(<BookingForm form={mockForm} onSubmit={jest.fn()} availableTimes={mockTimes} dispatchAvailableTimes={jest.fn()} />);
//   //The value should be the key of the option
//   fireEvent.change(getByTestId('availableTimes'), { target: { value: "06:00 PM" } })
//   let options = getAllByTestId('availableTimes-option')
//   expect(options).toHaveLength(4);
//   expect(options[0].selected).toBeFalsy();
// });

test('Simulates time selection using mockTimes as availableTimes', () => {
  const { getByTestId, getAllByTestId } = render(<BookingForm form={mockForm} onSubmit={jest.fn()} availableTimes={mockTimes} dispatchAvailableTimes={jest.fn()} />);
  //The value should be the key of the option
  fireEvent.change(getByTestId('availableTimes'), { target: { value: "06:00 PM" } })
  let options = getAllByTestId('availableTimes-option')
  expect(options).toHaveLength(4);
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeFalsy();
  expect(options[2].selected).toBeTruthy();
  expect(options[3].selected).toBeFalsy();
});

test('Renders the Little Lemon header for About page.', () => {
    render(<About />);
    const lltitle = screen.getByText("Little Lemon");
    expect(lltitle).toBeInTheDocument();
});

test("Renders the Dining Experience heading", () => {
  render(
    <BookingForm
      form={mockForm}
      onSubmit={jest.fn()}
      availableTimes={mockTimes}
      dispatchAvailableTimes={jest.fn()}
    />
  );
  const diningExpHeading = screen.getByText("Dining Experience:");
  expect(diningExpHeading).toBeInTheDocument();
});

describe("BookingForm submission flow", () => {
  const mockOnSubmit = jest.fn();
  const mockDispatch = jest.fn();

  // react-hook-form mock with working handleSubmit
  const mockForm = {
    register: jest.fn(),
    handleSubmit: (fn) => (e) => {
      e.preventDefault();
      fn({
        dining: "Indoor",
        people: "2",
        date: "2025-11-08",
        time: "06:00 PM",
        occasion: "Birthday",
        bookingType: "Guest",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "0412345678",
        card: "1234-5678-9123-4567",
        cvc: "123",
      });
    },
    formState: { errors: {} },
    watch: jest.fn(),
    setValue: jest.fn(),
  };

  test("submits the form with populated fields", async () => {
    render(
      <BookingForm
        form={mockForm}
        onSubmit={mockOnSubmit}
        availableTimes={mockTimes}
        dispatchAvailableTimes={mockDispatch}
      />
    );

    // Simulate user input for key fields
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/E-Mail/i);
    const phoneInput = screen.getByLabelText(/Phone/i);
    const cardInput = screen.getByLabelText(/Card Number/i);
    const cvcInput = screen.getByLabelText(/CVC/i);
    const dateInput = screen.getByLabelText(/date/i, { selector: "input" });

    // Use userEvent for realistic input (async)
    await userEvent.type(firstNameInput, "John");
    await userEvent.type(lastNameInput, "Doe");
    await userEvent.type(emailInput, "john@example.com");
    await userEvent.type(phoneInput, "0412345678");
    await userEvent.type(cardInput, "1234-5678-9123-4567");
    await userEvent.type(cvcInput, "123");

    // Select dropdowns
    const peopleSelect = screen.getByDisplayValue("1 Person") || screen.getByRole("combobox", { name: /people/i });
    await userEvent.selectOptions(peopleSelect, "2");

    const timeSelect = screen.getByTestId("availableTimes");
    await userEvent.selectOptions(timeSelect, "06:00 PM");

    // Select radio options
    const guestRadio = screen.getByDisplayValue("Guest");
    await userEvent.click(guestRadio);

    // Submit form
    const submitButton = screen.getByRole("button", { name: /Make Reservation/i });
    await userEvent.click(submitButton);

    // Verify submission handler was called
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith(
      expect.objectContaining({
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phone: "0412345678",
        card: "1234-5678-9123-4567",
        cvc: "123",
        time: "06:00 PM",
      })
    );
  });
});