const Listing = require("../models/listing.js")

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash('error', 'Listing you are trying to access dose not exist!');
        res.redirect("/listings")
    }
    // console.log(listing)
    res.render("listings/show.ejs", { listing })
};

module.exports.creatListing = async (req, res, next) => {
    let image_url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.url = { image_url, filename };
    await newListing.save();
    req.flash('success', 'New Listing Created!');
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res, next) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('success', ' Listing Edited!');
        res.redirect("/listings");
    }
    let originalImageUrl = listing.url.image_url;
    relpaceImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit.ejs", { listing, relpaceImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let filename = req.file.filename;
        let image_url = req.file.path;
        listing.url = { image_url, filename };
        await listing.save();
    }
    req.flash('success', ' Listing Updated!');
    res.redirect(`/listings/${id}`)
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    // console.log(deletedListing);
    req.flash('success', ' Listing Deleted!');
    res.redirect("/listings")
};