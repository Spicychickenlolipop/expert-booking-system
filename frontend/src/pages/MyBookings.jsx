import { useState } from "react";
import API from "../api/axios";

function MyBookings() {
  const [email, setEmail] = useState("");
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    try {
      setError("");

      const { data } = await API.get(
        `/bookings?email=${email}`
      );

      setBookings(data);
    } catch (error) {
      setError("Failed to fetch bookings");
    }
  };

  return (
    <div className="container section">
      <div className="hero text-center">
        <div className="glass hero-badge">
          📅 Your Scheduled Sessions
        </div>

        <h1 className="hero-title">
          My
          <span className="gradient-text">
            {" "}Bookings
          </span>
        </h1>

        <p className="hero-subtitle">
          Search your booked mentoring sessions using
          your email address.
        </p>
      </div>

      <div className="glass search-wrapper mb-10">
        <div className="search-bar">
          <input
            type="email"
            placeholder="Enter your email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            onClick={fetchBookings}
            className="btn btn-primary"
          >
            Search
          </button>
        </div>
      </div>

      {error && (
        <div className="error mb-6">
          {error}
        </div>
      )}

      {bookings.length === 0 ? (
        <div className="loader">
          No bookings found
        </div>
      ) : (
        <div className="expert-grid">
          {bookings.map((booking) => (
            <div
              key={booking._id}
              className="card glass"
            >
              <div className="card-header">
                <div>
                  <h2 className="card-title">
                    {booking.expert.name}
                  </h2>

                  <p className="card-subtitle">
                    Mentoring Session
                  </p>
                </div>

                <div
                  className={`status ${
                    booking.status === "confirmed"
                      ? "confirmed"
                      : booking.status === "completed"
                      ? "completed"
                      : "pending"
                  }`}
                >
                  {booking.status}
                </div>
              </div>

              <div className="card-info mt-6">
                <p>
                  📅 Date: {booking.date}
                </p>

                <p>
                  ⏰ Time: {booking.timeSlot}
                </p>

                <p>
                  📧 {booking.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyBookings;