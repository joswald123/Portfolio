const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

/* GET home page */
router.get("/", function (req, res, next) {
  res.render("index", { projects });
});

/* GET about page */
router.get("/about", function (req, res, next) {
  res.render("about", { projects });
});

/* GET project page */
router.get("/projects/:id", function (req, res, next) {
  const projectId = req.params.id;
  const project = projects.find(({ id }) => id === +projectId);

  if (project) {
    res.render("project", { project });
  } else {
    console.log("Error 404");
    res.status(404).render("not-found");
  }
});

/* GET generated error route - create and throw 500 server error */
router.get("/error", (req, res, next) => {
  const err = new Error();
  err.message = `Custom 500 error thrown`;
  err.status = 500;
  throw err;
});

module.exports = router;
