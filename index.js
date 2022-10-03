const koa = require("koa");
const Router = require("koa-router");
var bodyParser = require("koa-body");
const db = require("./utils/index");
const devicesModel = require("./models/devices");
const usersModel = require("./models/users");
const logsModel = require("./models/logs");
const cors = require("@koa/cors");
var cookieParser = require("cookie-parser");

const app = new koa();
const router = new Router();
app.use(cors());
db.connect();
app.use(
  bodyParser({
    formidable: { uploadDir: "./uploads" },
    multipart: true,
    urlencoded: true,
  })
);
// app.use(cookieParser());

//get devices
router.get("/devices", async ctx => {
  const devices = await devicesModel.find({});
  ctx.body = devices;
});

//add devies
router.post("/adddevice", async ctx => {
  const newDevice = new devicesModel(ctx.request.body);
  await newDevice.save();
  ctx.body = true;
});

//Login authencation
router.post("/login/request", async ctx => {
  ctx.cookies.set("username", "john");
  const user = await usersModel.findOne({
    username: ctx.request.body.username,
  });
  if (user) {
    if (user.password === ctx.request.body.password) ctx.body = true;
    else ctx.body = false;
  } else ctx.body = false;
});

//check account exist
router.post("/checkacc", async ctx => {
  const res = await usersModel.findOne({ username: ctx.request.body.username });
  if (res) ctx.body = false;
  else ctx.body = true;
});

//create new account
router.post("/createnewacc", async ctx => {
  const newUser = new usersModel(ctx.request.body);
  await newUser.save();
  ctx.body = true;
});

//get device logs
router.get("/logs", async ctx => {
  const data = await logsModel.find({});
  ctx.body = data;
});

//search device logs
router.get("/devicesearch", async ctx => {
  const result = await logsModel.find({ name: RegExp(ctx.query.name, "i") });
  ctx.body = result;
});

app.use(router.routes());

app.listen(8000);
