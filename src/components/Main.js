import { Routes, Route } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useReducer } from "react";
import Home from './Home.js';
import BookingPage from "./BookingPage.js";
import OurStory from "./OurStory.js";
import Menu from "./Menu.js";
import Delivery from "./Delivery.js";
import NotFound from "./NotFound.js";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function initializeTimes() {
  return [
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
    "09:00 PM", "09:30 PM", "10:00 PM"
  ];
}

function updateTimes(state, action) {
  switch (action.type) {
    case "dateChanged":
      // In future will be the selected date (string, e.g. "2025-11-08") but for now, ignore the date and return the same list.
      return [
        "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
        "07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM",
        "09:00 PM", "09:30 PM", "10:00 PM"
      ];
    default:
      return state;
  }
}

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
