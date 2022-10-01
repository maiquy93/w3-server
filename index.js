const koa = require("koa");
const Router = require("koa-router");
var bodyParser = require("koa-body");

const app = new koa();
const router = new Router();
//Middleware sử lý post từ form
app.use(
  bodyParser({
    formidable: { uploadDir: "./uploads" },
    multipart: true,
    urlencoded: true,
  })
);
router.get("/greetings", ctx => {
  ctx.body = "Hello, World from Router";
});
app.use(router.routes());

app.listen(8000);
