const {v4: uuid} = require("uuid")
const path = require("path")

const Video = require("../../models/video.model")

const Io = require("../../utils/Io")
const Videos = new Io(process.cwd()+"/database/videos.json")

const add = async (req, res) => {
    const {description, user_id} = req.body;
    const video = req.files?.video;

    const mimetype = path.extname(video.name);
    const url = uuid() + mimetype;

    const videos = await Videos.read()

    const id = (videos[videos.length - 1]?.id || 0) + 1;

    const box = new Video(id, description, url, "12.02.2021", user_id)

    const result = videos.length ? [...videos, box] : [box]

    await Videos.write(result)

    res.redirect("/api/")
};

module.exports = {add};