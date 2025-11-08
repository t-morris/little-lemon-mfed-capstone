import { Routes, Route } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState, useReducer } from 'react';
import Home from './Home.js';
import BookingPage from './BookingPage.js';
import OurStory from "./OurStory.js";
import Menu from './Menu.js';
import Delivery from './Delivery.js';
import NotFound from './NotFound.js';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { initializeTimes, updateTimes } from "./Utils.js";

export default function Main() {

    const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

    const schema = yup.object().shape({
      dining: yup.string().required("Location of dining experience is required."),
      people: yup.string().required("Party size is required."),
      date: yup.string().required("Date of booking is required."),
      time: yup.string().required("Time of booking is required."),
      occasion: yup.string(),
      bookingType: yup.string().required(),
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      email: yup.string().email("Invalid email").required("E-mail is required"),
      phone: yup
        .string()
        .matches(/^[0-9]{10,}$/, "Invalid phone number")
        .required("Phone is required"),
      card: yup
        .string()
        .matches(/^[0-9\- ]{16,19}$/, "Invalid card number")
        .required("Card number is required"),
      cvc: yup
        .string()
        .matches(/^[0-9]{3,4}$/, "Invalid CVC")
        .required("CVC is required"),
    });

    const form = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
        bookingType: "Guest",
        dining: "Indoor"
        }
    });

    const handleBookingSubmit = (data) => {
        console.log("Booking submitted via Main.js:", data);
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                    path="/bookings"
                    element={
                        <BookingPage
                            form={form}
                            handleBookingSubmit={handleBookingSubmit}
                            availableTimes={availableTimes}
                            dispatchAvailableTimes={dispatchAvailableTimes}
                        />
                    }
                />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}
