import express from "express";
import { firstPageController } from "../controller/firstPageController.js";
import { getUpload } from "../controller/firstPageController.js";
import { postUpload } from "../controller/firstPageController.js";

const globalRouter = express.Router();
globalRouter.get('/',firstPageController);
globalRouter.get('/upload',getUpload).post('/upload',postUpload);
// globalRouter.get('/:id(\\d+)',homeController); // url에 변수를 넣을수 있음. 정규식 적용 가능. 숫자만 받는 정규식

export default globalRouter;