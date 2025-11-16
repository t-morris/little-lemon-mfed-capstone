import BookingForm from "./BookingForm";

export default function BookingPage({ form, submitForm, availableTimes, dispatchAvailableTimes, handleDateChange }) {
    return (
        <section className="">
            <h1 className="page-heading">Reserve a Table</h1>
            <BookingForm
                form={form}
                submitForm={submitForm}
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
                handleDateChange={handleDateChange}
            />
        </section>
    )
}
