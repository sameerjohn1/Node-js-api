const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// validate token or private route
router.use(validateToken);

// get route and post route
router.route("/").get(getContacts).post(createContact);

// get / update(put) / delete contact route for paticular id
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
