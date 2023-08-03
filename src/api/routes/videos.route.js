const {Router} = require("express");
const router = Router();

const Io = require("../../utils/Io")
const Videos = new Io(process.cwd() + "/database/videos.json")

router.get("/videos/:id", async (req, res) => {
  const {id} = req.params;

  const arr = await Videos.read()
5
  const videos = arr.filter((video) => video.user_id == id);

  res.render("videos", {
    videos,
  });
});

module.exports = router;
