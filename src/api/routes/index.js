const authRoute = require("./auth.route");
const usersRoute = require("./users.route");
const videosRoute = require("./videos.route");
const addVideo = require("./add")

module.exports = [authRoute, usersRoute, videosRoute, addVideo];