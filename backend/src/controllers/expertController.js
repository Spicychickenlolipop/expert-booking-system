const Expert = require("../models/Expert");
const Booking = require("../models/Booking");

exports.getExperts = async (req, res, next) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 6;

    const query = {};

    if (req.query.search) {
      query.name = {
        $regex: req.query.search,
        $options: "i",
      };
    }

    if (req.query.category) {
      query.category = req.query.category;
    }

    const experts = await Expert.find(query)
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Expert.countDocuments(query);

    res.json({
      experts,
      total,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
};

exports.getExpertById = async (req, res, next) => {
  try {
    const expert = await Expert.findById(req.params.id);

    if (!expert) {
      return res.status(404).json({
        message: "Expert not found",
      });
    }

    const bookings = await Booking.find({
      expert: expert._id,
    });

    res.json({
      expert,
      bookings,
    });
  } catch (error) {
    next(error);
  }
};