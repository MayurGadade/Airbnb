if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}

const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingConstroller = require("../controllers/listings.js");
const multer = require('multer')
const { storage } = require("../cloudConfig.js")
const upload = multer({ storage })

router.route("/")
    .get(wrapAsync(listingConstroller.index))  // Index route
    .post(isLoggedIn, upload.single("listing[image]"), validateListing, wrapAsync(listingConstroller.creatListing));    // Creat route


// New route
router.get("/new", isLoggedIn, listingConstroller.renderNewForm);

router.route("/:id")
    .get(wrapAsync(listingConstroller.showListing))     // Show route
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingConstroller.updateListing))     // Update route
    .delete(isLoggedIn, isOwner, wrapAsync(listingConstroller.destroyListing));     // Delete route

// Edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingConstroller.renderEditForm));

module.exports = router;