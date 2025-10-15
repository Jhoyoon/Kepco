const URL = "https://opm.kepco.co.kr"; 
export const getDayLpDataDr = async (req, res,next) => {
    const param = {pageTitle : "일단위 전력소비 데이터(DR)", url : URL + "/DrAPI/getDayLpDataDr", datas:[]};
    res.render("actions/getDayLpDataDr",param);
}
export const postDayLpDataDr = async (req, res,next) => {
    let datas = [];
    const {custNo,date, serviceKey } = req.body;
    const requestUrl = `${URL}:11080/DrAPI/getDayLpData.do?custNo=${custNo}&date=${date}&serviceKey=${serviceKey}&returnType=02`;
    const response = await fetch(requestUrl, {
        method: "GET"
    });
    const responseBody = await response.json();
    if(responseBody.dayLpDataInfoList[0].errMsg){
        const param = {pageTitle : "일단위 전력소비 데이터(DR)", url : URL + "/DrAPI/getDayLpDataDr",isReturn : true, errorMessage : responseBody.dayLpDataInfoList[0].errMsg,datas};
        return res.render("getDayLpDataDr",param);
    }
    datas = responseBody.dayLpDataInfoList;
    const param = {pageTitle : "일단위 전력소비 데이터(DR)", url : URL + "/DrAPI/getDayLpDataDr",isReturn : true,datas};
    res.render("actions/getDayLpDataDr",param);
}

export const getDayLpDataNormal = async (req, res,next) => {
    const param = {pageTitle : "일단위 전력소비 데이터(일반)"};
    res.render("getDayLpDataNormal",param);
}
export const getMinuteLpDataDr = async (req, res,next) => {
    const param = {pageTitle : "15분단위 전력소비 데이터(DR)"};
    res.render("getMinuteLpDataDr",param);
}
export const getMinuteLpDataNormal = async (req, res,next) => {
    const param = {pageTitle : "15분단위 전력소비 데이터(일반)"};
    res.render("getMinuteLpDataNormal",param);
}
export const getCustNoList = async (req, res,next) => {
    const param = {pageTitle : "고객번호"};
    res.render("getCustNoList",param);
}
export const getCustMeterList = async (req, res,next) => {
    const param = {pageTitle : "고객번호, 계기번호"};
    res.render("getCustMeterList",param);
}
export const getAllCustPeriodData = async (req, res,next) => {
    const param = {pageTitle : "전체고객의 전력소비 데이터 "};
    res.render("getAllCustPeriodData",param);
}
export const getPeriodData = async (req, res,next) => {
    const param = {pageTitle : "특정고객의 특정시간 전력소비 데이터"};
    res.render("getPeriodData",param);
}
export const getCustInfoData = async (req, res,next) => {
   const param = {pageTitle : "고객정보"};
    res.render("getCustInfoData",param);
}
export const getCustBillData = async (req, res,next) => {
    const param = {pageTitle : "청구정보"};
    res.render("getCustBillData",param);
}
export const getCustJoinInfoData = async (req, res,next) => {
    const param = {pageTitle : "고객가입여부확인"};
    res.render("getCustJoinInfoData",param);
}
export const getKukminDayLpData = async (req, res,next) => {
    const param = {pageTitle : "일단위 전력소비 데이터(SG)"};
    res.render("getKukminDayLpData",param);
}
export const getKukminMinuteLpData = async (req, res,next) => {
    const param = {pageTitle : "일단위 전력소비 데이터(SG)"};
    res.render("getKukminMinuteLpData",param);
}
export const getPPAGenBizrBasc = async (req, res,next) => {
    const param = {pageTitle : "PPA 발전사업자 기본정보"};
    res.render("getPPAGenBizrBasc",param);
}
export const getPPASmkpUnitCost = async (req, res,next) => {
    const param = {pageTitle : "PPA 발전 SMP 정산대금정보 "};
    res.render("getPPASmkpUnitCost",param);
}
export const getPPAGenMrVal = async (req, res,next) => {
    const param = {pageTitle : "PPA 고객 발전 정기검침내역 "};
    res.render("getPPAGenMrVal",param);
}
export const getPPAGenMinuteLpData = async (req, res,next) => {
    const param = {pageTitle : "PPA 15분단위 발전량 정보 "};
    res.render("getPPAGenMinuteLpData",param);
}
