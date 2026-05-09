import { useEffect, useState } from "react";
import API from "../api/axios";
import ExpertCard from "../components/ExpertCard";

function Experts() {
  const [experts, setExperts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchExperts();
  }, [search, category, page]);

  const fetchExperts = async () => {
    try {
      setLoading(true);

      const { data } = await API.get(
        `/experts?search=${search}&category=${category}&page=${page}`
      );

      setExperts(data.experts);
      setTotalPages(data.totalPages);
    } catch (error) {
      setError("Failed to load experts");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="loader">
        Loading experts...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container section">
        <div className="error">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container section">
      <div className="hero">
        <div className="glass hero-badge">
          ✨ Connect with industry experts
        </div>

        <h1 className="hero-title">
          Find Your Next
          <span className="gradient-text">
            {" "}Mentor
          </span>
        </h1>

        <p className="hero-subtitle">
          Discover top developers, designers, and mentors
          ready to help you level up your career.
        </p>

        <div className="glass search-wrapper">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search experts..."
              className="input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="Developer">Developer</option>
              <option value="Designer">Designer</option>
              <option value="Mentor">Mentor</option>
            </select>
          </div>
        </div>
      </div>

      <div className="expert-grid">
        {experts.map((expert) => (
          <ExpertCard
            key={expert._id}
            expert={expert}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="page-btn"
        >
          ←
        </button>

        <span>
          Page {page} / {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className="page-btn"
        >
          →
        </button>
      </div>
    </div>
  );
}

export default Experts;