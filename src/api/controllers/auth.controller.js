const Io = require("../../utils/Io");
const Users = new Io(process.cwd() + "/database/users.json");

const {v4: uuid} = require("uuid")
const path = require("path")

const jwt = require("../../utils/jwt");
const User = require("../../models/user.model");


const login = async (req, res) => {
  const {email, password} = req.body;

  const users = await Users.read();

  const user = users.find((user) => user.email === email)

  if(!user) 
    return res.redirect("/api/register")

  const result = user.password === password;
  if(result)
    return res.redirect("/api/")

  res.redirect("/api/register")
};

const register = async (req, res) => {
  const {email, fullname, password} = req.body;
  const image = req.files?.photo;

  const mimetype = path.extname(image.name);
  const url = uuid() + mimetype;

  image.mv(process.cwd() +"/uploads/"+url);

  const users = await Users.read();

  const id = (users[users.length - 1]?.id || 0) + 1;

  const user = users.find((user) => user.email === email)

  if(user)
    return res.redirect("/api/register")

  const box = new User(id, email, fullname, password, url);

  const result = users.length ? [...users, box] : [box]

  await Users.write(result);

  res.redirect("/api/")
};

module.exports = {
  login,
  register,
};
