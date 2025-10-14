import './db.js';
import "./models/Video.js"
import express from "express";
import morgan from "morgan";
import globalRouter  from "./routers/globalRourter.js";
import userRouter  from "./routers/userRouter.js";
import actionRouter  from "./routers/actionRouter.js";

const app = express();
const morganLogger = morgan("dev");
const PORT = 3000;
const initController = () =>{
    console.log(`server listening http://localhost:${PORT}/`);
}
// console.log('Video :: '+Video);
// global middleware. 모든 URL에 적용 됨
app.set("view engine","pug");
app.set("views",process.cwd()+"/src/views"); // views 파일 경로 지정
app.use(morganLogger);
app.use(express.urlencoded({extended : true}));
app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/action", actionRouter);
app.listen(PORT,initController);
// app.get("/something",handler) get 사용시 반드시 use 이후에 나와야 함
// const logger = (req, res, next) =>{
    // console.log(`${req.method} ${req.url}`);
    // next();
// }