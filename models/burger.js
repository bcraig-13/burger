const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },

  create: (newBurger, cb) => {
    orm.insertOne("burgers", newBurger, (res) => {
      cb(res);
    });
  },
  update: (burgerData, criteria, cb) => {
    orm.updateOne("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
};

module.exports = burger;