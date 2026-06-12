const express = require("express");

const router = express.Router();

const protect =
  require("../middleware/authMiddleware");

const {
  createCustomer,
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
} =
require("../controllers/customerControllers");

router.post("/", protect, createCustomer);
router.get("/", protect, getCustomers);
router.get("/:id", protect, getCustomer);
router.put("/:id", protect, updateCustomer);
router.delete("/:id", protect, deleteCustomer);

module.exports = router;