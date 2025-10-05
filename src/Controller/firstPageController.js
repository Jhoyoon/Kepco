import Video from '../models/Video.js';

export const firstPageController = async (req, res,next) => {
    const result = await Video.find({});
    console.log('result :: '+result);
    const pateTitle = {pateTitle : "타이틀임",condition : false,videos : []};
    res.render("home",pateTitle);
}
export const homeController = (req, res,next) => {
    // 여기서 파라미터를 view에 전달하면 되는구나?
    res.send("<h1>home</h1>");
}
