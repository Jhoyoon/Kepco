import express from "express";

const userRouter = express.Router();

// globalRouter.get('/:id(\\d+)',homeController); // url에 변수를 넣을수 있음. 정규식 적용 가능. 숫자만 받는 정규식
export default userRouter;