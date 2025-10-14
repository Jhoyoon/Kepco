import Video from '../models/Video.js';

export const firstPageController = async (req, res,next) => {
    console.log('firstPageController run');
    // const result = (await Video.find({})).sort({createdDate : "asc"}); // 이런식으로 정렬도 가능
    // console.log('result :: '+result);
    const param = {pageTitle : "한전오픈 API"};
    res.render("home",param);
}
export const homeController = (req, res,next) => {
    // 여기서 파라미터를 view에 전달하면 되는구나?
    res.send("<h1>home</h1>");
}
export const getUpload = (req, res,next) => {
    // 여기서 파라미터를 view에 전달하면 되는구나?
    const pateTitle = {pateTitle : "upload",condition : false,videos : []};
    res.render("upload",pateTitle);
}
export const postUpload = async (req, res,next) => {
    console.log('postUpload run');
    const { title, description } = req.body; // 아래 코드랑 동일
    // console.log('req.body.title :: '+req.body.title);
    // console.log('req.body.description :: '+req.body.description);
    // 검색해서 찾기
    // await Video.findById();
    // 검색해서 찾고 바로 update 하기
    // await Video.findByIdAndUpdate(id : id,{title : tile, something...})
    // 삭제해버려~
    // await Video.findByIdAndDelete(id : id);
    // moongose에도 트리거 개념이 존재한다!!
    // req.query url 쿼리 파라미터 가져올수 있음
    await Video.find({
        title : {
            $regex : new RegExp(keyword,"i") // 정규식으로 검색 가능. mongodb 문서에 쿼리 옵션들 더 많이 있음
        }
    })
    const video = new Video({ // 아래거랑 동
        title,
        description : Video.myStatic('something')

    });
    // Video.create({
    //     title,
    //     description,
    //     createdDate : Date.now()
    // });
    const result = await video.save();
    console.log('result :: '+result);
    // const pateTitle = {pateTitle : "upload",condition : false,videos : []};
    res.redirect('/');
}