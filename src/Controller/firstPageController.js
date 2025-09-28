const videos = [
    {
        title : "title",
        comments : 3,
        createdAt : "정호윤"

    },
    {
        title : "title2",
        comments : 4,
        createdAt : "홍길동"
    }
]
export const firstPageController = (req, res,next) => {
    const pateTitle = {pateTitle : "타이틀임",condition : false,videos};
    res.render("home",pateTitle);
}
export const homeController = (req, res,next) => {
    // 여기서 파라미터를 view에 전달하면 되는구나?
    res.send("<h1>home</h1>");
}
