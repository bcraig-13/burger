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

router.post("/api/burger", (req, res) => {
    burger.create({ name: req.body.burger_name, devoured: req.body.devoured }, (result) => {
        res.json({ id: result.insertId });
    });
});

