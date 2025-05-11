import ErrorHandler from "../error/error.js";
import {Reservation}from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    
        const { name, email, phoneNumber,date, time, guests } = req.body;
         console.log("BODY RECEIVED:", req.body);

        if (!name || !email || !phoneNumber|| !date || !time || !guests) {
            return next(new ErrorHandler("Please fill all the fields", 400));
        }
        try{

        const reservation = await Reservation.create({
            name,
            email,
            phoneNumber,
            date,
            time,
            guests,
        });

        return res.status(201).json({
            success: true,
            message: "Reservation created successfully",
        });
    } catch (error) {
        if(error.name === 'ValidationError') {
            const validateErrors = Object.values(error.errors).map(err => err.message);
            return next(new ErrorHandler(validateErrors.join(", "), 400));
        }
        return next(error);
    }
}