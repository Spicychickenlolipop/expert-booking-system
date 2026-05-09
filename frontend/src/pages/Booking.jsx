import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

function Booking() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    timeSlot: "",
    notes: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/bookings", {
        ...formData,
        expert: id,
      });

      setMessage("Booking successful!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        timeSlot: "",
        notes: "",
      });
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          "Booking failed"
      );
    }
  };

  return (
    <div className="container section">
      <div className="form-container glass">
        <h1 className="form-title">
          Book a Session
        </h1>

        <p className="form-subtitle">
          Fill in your details to confirm your booking.
        </p>

        {message && (
          <div className="status confirmed mb-5">
            {message}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="input w-full"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="input w-full"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
            className="input w-full"
          />

          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="input w-full"
          />

          <input
            type="text"
            name="timeSlot"
            placeholder="Time Slot"
            required
            value={formData.timeSlot}
            onChange={handleChange}
            className="input w-full"
          />

          <textarea
            name="notes"
            placeholder="Additional Notes"
            rows="5"
            value={formData.notes}
            onChange={handleChange}
            className="textarea w-full"
          />

          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default Booking;