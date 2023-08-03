const Io = require("../../utils/Io")
const Users = new Io(process.cwd()+"/database/users.json")

const {Router} = require("express");
const router = Router();


// router.post("/auth/login", login);
// router.post("/auth/register", register);

router.get("/", async (req, res) => {
  const users = await Users.read();
  res.render("index", {
    users,
  });
});

module.exports = router;
