import e from "express";
import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        minlength: [3, "Name must be at least 3 characters"],
        maxLength: [30, "Name cannot exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please enter your phone number"],
        minlength: [10, "Phone number must be 10 digits"],
        maxLength: [10, "Phone number must be 10 digits"],
    },
    date: {
        type: Date,
        required: [true, "Please select a date"],
    },
    time: {
        type: String,
        required: [true, "Please select a time"],
    },
    guests: {
        type: Number,
        required: [true, "Please enter the number of guests"],
    },
});
export const Reservation = mongoose.model("Reservation", reservationSchema);