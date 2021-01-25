const express = require("express");
const burger = require("../models/burger.js")
var router = express.Router();


// Create all our routes
router.get("/", function(req, res) {
  burger.selectBurgers(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.addBurger(req.body.name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function(req, res) {

  console.log("id", req.params.id);

  burger.updateBurger(req.params.id,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
