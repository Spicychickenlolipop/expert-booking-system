import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function ExpertDetails() {
  const { id } = useParams();

  const [expert, setExpert] = useState(null);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchExpert();

    socket.on("slotBooked", (data) => {
      if (data.expert === id) {
        fetchExpert();
      }
    });

    return () => {
      socket.off("slotBooked");
    };
  }, [id]);

  const fetchExpert = async () => {
    try {
      const { data } = await API.get(`/experts/${id}`);

      setExpert(data.expert);
      setBookings(data.bookings);
    } catch (error) {
      console.log(error);
    }
  };

  if (!expert) {
    return (
      <div className="loader">
        Loading expert...
      </div>
    );
  }

  const isBooked = (date, slot) => {
    return bookings.some(
      (b) => b.date === date && b.timeSlot === slot
    );
  };

  return (
    <div className="container section">
      <div className="glass form-container">
        <div className="flex items-center gap-5 mb-8">
          <div className="avatar">
            {expert.name.charAt(0)}
          </div>

          <div>
            <h1 className="form-title">
              {expert.name}
            </h1>

            <p className="form-subtitle">
              {expert.bio}
            </p>
          </div>
        </div>

        <div className="card-info mb-8">
          <p>💼 {expert.category}</p>
          <p>⭐ {expert.rating} Rating</p>
          <p>
            🚀 {expert.experience} years experience
          </p>
        </div>

        <div className="slot-group">
          {expert.availableSlots.map((item, index) => (
            <div
              key={index}
              className="mb-8"
            >
              <h2 className="slot-date">
                {item.date}
              </h2>

              <div className="slot-list">
                {item.slots.map((slot) => (
                  <div
                    key={slot}
                    className={`slot ${
                      isBooked(item.date, slot)
                        ? "booked"
                        : ""
                    }`}
                  >
                    {slot}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          to={`/booking/${expert._id}`}
          className="btn btn-primary mt-5"
        >
          Book Session
        </Link>
      </div>
    </div>
  );
}

export default ExpertDetails;