import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./components/Utils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const testSchema = yup.object({
  dining: yup.string().required("Location of dining experience is required"),
  people: yup.string().required("Party size is required"),
  date: yup.string().required("Date of booking is required"),
  time: yup.string().required("Time of booking is required"),
  occasion: yup.string(),
  bookingType: yup.string().required(),
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("E-mail is required"),
  phone: yup
    .string()
    .trim()
    .required("Phone is required")
    .matches(/^[0-9]{10,}$/, "Invalid phone number"),
  card: yup
    .string()
    .trim()
    .required("Card number is required")
    .matches(/^[0-9\- ]{16,19}$/, "Invalid card number"),
  cvc: yup
    .string()
    .trim()
    .required("CVC is required")
    .matches(/^[0-9]{3,4}$/, "Invalid CVC"),
});

function FormWrapper({ children }) {
  const form = useForm({
    resolver: yupResolver(testSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      card: "",
      cvc: "",
      people: "2",
      dining: "",
      time: "",
      bookingType: "",
      date: "",
    },
  });

  return children(form);
}

const mockForm = {
  register: jest.fn(),
  handleSubmit: fn => e => {
    e.preventDefault();
    fn({});
  },
  watch: jest.fn(),
  setValue: jest.fn(),
  formState: { errors: {} }
};



// Mock API functions

const seededRandom = (seed) => {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return () => (s = (s * a) % m) / m;
};

const fetchAPI = (date) => {
  let result = [];
  let random = seededRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) result.push(i + ":00");
    if (random() < 0.5) result.push(i + ":30");
  }
  // Ensure at least one time is returned to avoid empty array in tests
  if (result.length === 0) result.push("17:00");
  return result;
};

const submitAPI = jest.fn((data) => true);


// Utils tests

describe("Utils functions with mocked API", () => {
  test("initializeTimes returns a non-empty array", async () => {
  // Attach mocked fetchAPI to window so Utils.js can find it
    window.fetchAPI = fetchAPI;
    const times = await initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
  });

  test("updateTimes returns a new array when action with date is dispatched", () => {
    const initialState = ["17:00", "17:30"];
    // Simulate a real dispatch: includes date + new times
    const action = {
      type: "updateTimes",
      payload: ["18:00", "18:30"],
      date: "2025-11-08"
    };
    const newState = updateTimes(initialState, action);
    expect(newState).not.toBe(initialState);
    expect(newState).toEqual(["18:00", "18:30"]);
  });
});




// Attribute Tests

test("Dining option radios have correct attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const indoor = screen.getByLabelText(/indoor/i);
  const alfresco = screen.getByLabelText(/alfresco/i);
  expect(indoor).toHaveAttribute("type", "radio");
  expect(indoor).toHaveAttribute("value", "Indoor");
  expect(alfresco).toHaveAttribute("type", "radio");
  expect(alfresco).toHaveAttribute("value", "Alfresco");
});

test("Guests select has correct HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const select = screen.getByLabelText(/guests/i);
  expect(select.tagName.toLowerCase()).toBe("select");
  expect(select).toHaveAttribute("id", "Guests");
});

test("Time select is a dropdown with available times", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00", "18:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const select = screen.getByLabelText(/time/i);
  expect(select.tagName.toLowerCase()).toBe("select");
  const options = screen.getAllByTestId("availableTimes-option");
  expect(options).toHaveLength(2);
});

test("First Name input has proper HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const input = screen.getByLabelText(/first name/i);
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("id", "First Name");
});

test("Last Name input has proper HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const input = screen.getByLabelText(/last name/i);
  expect(input).toHaveAttribute("type", "text");
  expect(input).toHaveAttribute("id", "Last Name");
});

test("Email input has correct HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const input = screen.getByLabelText(/e-mail/i);
  expect(input).toHaveAttribute("type", "email");
  expect(input).toHaveAttribute("id", "Email");
});

test("Phone input has correct HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const input = screen.getByLabelText(/phone/i);
  expect(input).toHaveAttribute("type", "tel");
  expect(input).toHaveAttribute("id", "Phone");
});


test("Date input is a date selector", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const input = screen.getByLabelText(/date/i);
  expect(input).toHaveAttribute("type", "date");
});

test("Card number input has correct HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const card = screen.getByLabelText(/card number/i);
  expect(card).toHaveAttribute("type", "text");
  expect(card).toHaveAttribute("id", "Card Number");
});

test("CVC input has correct HTML attributes", () => {
  render(
    <BookingForm
      form={mockForm}
      availableTimes={["17:00"]}
      submitForm={jest.fn()}
      dispatchAvailableTimes={jest.fn()}
      handleDateChange={jest.fn()}
    />
  );
  const cvc = screen.getByLabelText(/cvc/i);
  expect(cvc).toHaveAttribute("type", "text");
  expect(cvc).toHaveAttribute("id", "CVC");
});

// Error Validation Tests

test("Shows error when dining option is not selected", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText(/dining/i)).toBeInTheDocument();
});

// Date, Time, Booking Type can't be left empty by user by design, defaults to current day and first available time.

test("Shows error when first name empty", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("First name is required")).toBeInTheDocument();
});

test("Shows error when last name empty", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("Last name is required")).toBeInTheDocument();
});

test("Shows error when phone is empty", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("Phone is required")).toBeInTheDocument();
});

test("Yup validation rejects invalid phone number", async () => {
  render(
    <FormWrapper>
      {(form) => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  await userEvent.type(screen.getByLabelText(/phone/i), "123");
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("Invalid phone number")).toBeInTheDocument();
});

test("Shows error for empty email", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("E-mail is required")).toBeInTheDocument();
});

test("Shows error for invalid email", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  await userEvent.type(screen.getByLabelText(/e-mail/i), "not-an-email");
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("Invalid email")).toBeInTheDocument();
});

test("Shows error when card number empty", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("Card number is required")).toBeInTheDocument();
});

test("Shows error when CVC empty", async () => {
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={jest.fn()}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  fireEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(await screen.findByText("CVC is required")).toBeInTheDocument();
});

// FInal submission test

test("Valid form submits successfully", async () => {
  const submitMock = jest.fn();
  render(
    <FormWrapper>
      {form => (
        <BookingForm
          form={form}
          availableTimes={["17:00"]}
          submitForm={submitMock}
          dispatchAvailableTimes={jest.fn()}
          handleDateChange={jest.fn()}
        />
      )}
    </FormWrapper>
  );
  await userEvent.click(screen.getByRole("radio", { name: /indoor/i }));
  await userEvent.selectOptions(screen.getByRole("combobox", { name: /guests/i }), "2");
  await userEvent.type(screen.getByLabelText(/date/i), "2025-12-25");
  await userEvent.selectOptions(screen.getByRole("combobox", { name: /time/i }), "17:00");
  await userEvent.click(screen.getByRole("radio", { name: /guest/i }));
  await userEvent.type(screen.getByLabelText(/first name/i), "John");
  await userEvent.type(screen.getByLabelText(/last name/i), "Doe");
  await userEvent.type(screen.getByLabelText(/e-mail/i), "john@example.com");
  await userEvent.type(screen.getByLabelText(/phone/i), "0412345678");
  await userEvent.type(screen.getByLabelText(/card number/i), "4111 1111 1111 1111");
  await userEvent.type(screen.getByLabelText(/cvc/i), "123");
  await userEvent.click(screen.getByRole("button", { name: /make reservation/i }));
  expect(submitMock).toHaveBeenCalledTimes(1);
});