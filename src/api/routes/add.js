const {Router} = require("express");
const { add } = require("../controllers/add.controller")

const router = Router();

router.post("/add", add);

router.get("/add", (req, res) => {
    res.render("add.ejs")
})

module.exports = router;