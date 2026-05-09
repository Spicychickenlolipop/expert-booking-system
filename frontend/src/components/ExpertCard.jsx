import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ExpertCard({ expert }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card glass"
    >
      <div className="card-header">
        <div className="avatar">
          {expert.name.charAt(0)}
        </div>

        <div className="status confirmed">
          ⭐ {expert.rating}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="card-title">
          {expert.name}
        </h2>

        <p className="card-subtitle">
          {expert.category}
        </p>
      </div>

      <div className="card-info">
        <p>
          💼 {expert.experience} years experience
        </p>

        <p>
          🚀 Available for booking
        </p>
      </div>

      <Link
        to={`/expert/${expert._id}`}
        className="btn btn-primary mt-7 w-full"
      >
        View Details
      </Link>
    </motion.div>
  );
}

export default ExpertCard;