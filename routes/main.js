// Create a new router
const express = require("express");
const router = express.Router();

var shopData = {
    shopName: "Student 101, We have everything",
    productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks" ],
    shopList: [
        {
          name: "Student 101 – New Cross",
          manager: "Vlad Rotari",
          address: "112 High Street, London SE13"
        },
        {
          name: "Student 101 – Walthamstow",
          manager: "John Snow",
          address: "40 Market Road, London E17"
        },
        {
          name: "Student 101 – Leyton",
          manager: "Samuel White",
          address: "75 Park Lane Road, London E10"
        }
      ]
  };

// Handle the main routes
router.get("/", (req, res) => {
    res.render("index.ejs", shopData)
}); 

router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
});

router.get("/search",(req, res) => {
    res.render("search.ejs", shopData)
});
// ""..." Shorter symbol which means take all the data inside the variable shopData
// and copy it here. This applies to both routes /searc_results and /registered.
router.get("/search_result", (req, res) => {
    res.render("search_result.ejs", {
      ...shopData,
      search_text: req.query.search_text,
      category: req.query.category
    });
  });

router.get("/register", (req, res) => {
    res.render("register.ejs", shopData);
});

//I Have decided to use res.render instead of re.send in order to keep the styling consistent with the forms and their answers

router.post("/registered", (req, res) => {
    res.render("registered.ejs", {
      ...shopData,
      first: req.body.first,
      last: req.body.last,
      email: req.body.email
    });
});

router.get("/survey", (req, res) => {
    res.render("survey.ejs", shopData);
});

router.post("/survey_results", (req, res) => {
    res.render("survey_results.ejs", { ...shopData, formData: req.body });
});

// Export the router object so index.js can access it
module.exports = router;
