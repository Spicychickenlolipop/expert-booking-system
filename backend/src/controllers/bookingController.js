const Booking = require("../models/Booking");
const mongoose = require("mongoose");

const createBooking = async (req, res, next) => {
  const session = await mongoose.startSession();

  session.startTransaction();

  try {
    const {
      expert,
      name,
      email,
      phone,
      date,
      timeSlot,
      notes,
    } = req.body;

    const existingBooking = await Booking.findOne({
      expert,
      date,
      timeSlot,
    }).session(session);

    if (existingBooking) {
      await session.abortTransaction();

      return res.status(400).json({
        message: "Slot already booked",
      });
    }

    const booking = await Booking.create(
      [
        {
          expert,
          name,
          email,
          phone,
          date,
          timeSlot,
          notes,
        },
      ],
      { session }
    );

    await session.commitTransaction();

    req.io.emit("slotBooked", {
      expert,
      date,
      timeSlot,
    });

    res.status(201).json({
      message: "Booking successful",
      booking: booking[0],
    });
  } catch (error) {
    await session.abortTransaction();

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Slot already booked",
      });
    }

    next(error);
  } finally {
    session.endSession();
  }
};

const updateBookingStatus = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      {
        status: req.body.status,
      },
      {
        new: true,
      }
    );

    res.json(booking);
  } catch (error) {
    next(error);
  }
};

const getBookingsByEmail = async (req, res, next) => {
  try {
    const bookings = await Booking.find({
      email: req.query.email,
    }).populate("expert");

    res.json(bookings);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createBooking,
  updateBookingStatus,
  getBookingsByEmail,
};