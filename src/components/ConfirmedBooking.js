import { format } from "date-fns";

export default function ConfirmedBooking({ bookingData }) {
    if (!bookingData) {
        return (
            <section>
                <h1 className="page-heading">No Booking Found</h1>
                <p>It looks like you haven’t made a booking yet.</p>
            </section>
        );
    }

    const {
        firstName,
        lastName,
        date,
        time,
        numGuests,
        dining,
        occasion,
        card,
        ...rest
    } = bookingData;

    const name = `${firstName || ""} ${lastName || ""}`.trim();
    const formattedDateTime =
        date && time
            ? `${format(new Date(date), "d MMMM yyyy")} at ${time}`
            : "";

    const maskedCard =
        card && card.length >= 4
            ? `**** **** **** ${card.slice(-4)}`
            : "—";

    const displayData = {
        "Date & Time": formattedDateTime,
        "Guests": numGuests,
        "Dining Experience": dining,
        "Occasion": occasion,
        "Name": name,
        "Email": rest.email,
        "Phone": rest.phone,
        "Credit Card": maskedCard,
    };

    return (
        <section>
            <h1 className="page-heading">Booking Confirmed!</h1>
            <div className="confirmation">
                <p>Your table is reserved — you’ll receive an email soon.</p>

                <table className="confirmation-table">
                    <tbody>
                        {Object.entries(displayData).map(([label, value]) => {
                            if (!value) return null;
                            return (
                                <tr key={label}>
                                    <th
                                        style={{
                                            textAlign: "left",
                                            textTransform: "capitalize",
                                            paddingRight: "1rem",
                                        }}
                                    >
                                        {label}:
                                    </th>
                                    <td>{String(value)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}