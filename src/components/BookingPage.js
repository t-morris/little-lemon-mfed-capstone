import BookingForm from "./BookingForm";



export default function BookingPage({ form, handleBookingSubmit, availableTimes, dispatchAvailableTimes }) {
    return (
        <section className="">
            <h1 class="page-heading">Reserve a Table</h1>
            <BookingForm
                form={form}
                handleBookingSubmit={handleBookingSubmit}
                availableTimes={availableTimes}
                dispatchAvailableTimes={dispatchAvailableTimes}
            />
        </section>
    )
}
