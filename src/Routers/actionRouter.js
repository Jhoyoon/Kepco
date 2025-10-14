import express from "express";
import { getDayLpDataDr,postDayLpDataDr,getDayLpDataNormal,getMinuteLpDataDr,getMinuteLpDataNormal,getCustNoList,getCustMeterList,getAllCustPeriodData,getPeriodData,getCustInfoData,getCustBillData,getCustJoinInfoData,getKukminDayLpData,getKukminMinuteLpData,getPPAGenBizrBasc,getPPASmkpUnitCost,getPPAGenMrVal,getPPAGenMinuteLpData } from "../controller/actionController.js";

const actionRouter = express.Router();
actionRouter.get('/getDayLpDataDr',getDayLpDataDr).post('/getDayLpDataDr',postDayLpDataDr);
actionRouter.get('/getDayLpDataNormal',getDayLpDataNormal);
actionRouter.get('/getMinuteLpDataDr',getMinuteLpDataDr);
actionRouter.get('/getMinuteLpDataNormal',getMinuteLpDataNormal);
actionRouter.get('/getCustNoList',getCustNoList);
actionRouter.get('/getCustMeterList',getCustMeterList);
actionRouter.get('/getAllCustPeriodData',getAllCustPeriodData);
actionRouter.get('/getPeriodData',getPeriodData);
actionRouter.get('/getCustInfoData',getCustInfoData);
actionRouter.get('/getCustBillData',getCustBillData);
actionRouter.get('/getCustJoinInfoData',getCustJoinInfoData);
actionRouter.get('/getKukminDayLpData',getKukminDayLpData);
actionRouter.get('/getKukminMinuteLpData',getKukminMinuteLpData);
actionRouter.get('/getPPAGenBizrBasc',getPPAGenBizrBasc);
actionRouter.get('/getPPASmkpUnitCost',getPPASmkpUnitCost);
actionRouter.get('/getPPAGenMrVal',getPPAGenMrVal);
actionRouter.get('/getPPAGenMinuteLpData',getPPAGenMinuteLpData);


// globalRouter.get('/:id(\\d+)',homeController); // url에 변수를 넣을수 있음. 정규식 적용 가능. 숫자만 받는 정규식
export default actionRouter;