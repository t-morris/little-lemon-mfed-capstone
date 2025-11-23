import { Routes, Route, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEffect, useState, useReducer } from 'react';
import Home from './Home.js';
import BookingPage from './BookingPage.js';
import OurStory from "./OurStory.js";
import Menu from './Menu.js';
import Delivery from './Delivery.js';
import NotFound from './NotFound.js';
import UnderConstruction from './UnderConstruction.js';
import ConfirmedBooking from "./ConfirmedBooking.js";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { initializeTimes, updateTimes, fetchAvailableTimes, submitFormData } from "./Utils.js";

export default function Main() {
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState(null);
    const [availableTimes, dispatchAvailableTimes] = useReducer(
        updateTimes,
        []
    );

    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        async function loadInitialTimes() {
            const times = await initializeTimes();
            dispatchAvailableTimes({ type: "updateTimes", payload: times });

            // Set the date field to today (YYYY-MM-DD)
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, "0");
            const dd = String(today.getDate()).padStart(2, "0");
            setSelectedDate(`${yyyy}-${mm}-${dd}`);
        }
        loadInitialTimes();
    }, []);

    useEffect(() => {
        if (!selectedDate) return;

        async function getTimes() {
            const times = await fetchAvailableTimes(new Date(selectedDate));
            dispatchAvailableTimes({ type: "updateTimes", payload: times });
        }
        getTimes();
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const schema = yup.object().shape({
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

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
        bookingType: "Guest",
        dining: "Indoor"
        }
    });

    useEffect(() => {
        if (selectedDate) {
            form.setValue("date", selectedDate);
        }
    }, [selectedDate, form]);

    const submitForm = async (data) => {
        const result = await submitFormData(data);
        if (result === true) {
            setBookingData(data);
            console.log("Booking submitted:", data);
            navigate("/confirmation");
        } else {
            console.warn("Booking submission failed:", result);
            alert("Booking submission failed. Please try again.");
        }
    };

    return (
        <main id="main-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                    path="/bookings"
                    element={
                        <BookingPage
                            form={form}
                            submitForm={submitForm}
                            availableTimes={availableTimes}
                            dispatchAvailableTimes={dispatchAvailableTimes}
                            handleDateChange={handleDateChange}
                        />
                    }
                />
                <Route path="/delivery" element={<UnderConstruction />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/confirmation" element={<ConfirmedBooking bookingData={bookingData} />} />
            </Routes>
        </main>
    )
}
