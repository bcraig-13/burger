const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        const hbsObject = {
            burger_name: data,
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create({ burger_name: req.body.burger_name, devoured: false }, (result) => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id/devoured", (req, res) => {
    const eaten = { id: req.params.id };
    const update = { devoured: req.body.value };

    burger.update(update, eaten, (result) => {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;