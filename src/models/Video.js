import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({
    title : {type : String, required : true,trim : true,maxLength : 255,minLength : 1},
    description : {type : String, maxLength : 255,minLength : 1},
    createdDate : {type : Date, required : true, default : Date.now}, // moongose가 알아서 now() 함수로 변환시켜줌
    hashtags : [{type : String}],
    meta : {
        views : Number,
        rating : Number
    }
});
// 트리거 개념이 존재한다!!
// 근데 또 모든 api에서 작동하는건 아님...까다롭네.
// 이거는 findByIdAndUpate api에서는 작동을 하지 않음
videoSchema.pre('save',async function(){ // pre = before
    console.log('this :: '+this); 
    this.title = 'before trigger~'; // 이런식으로 데이터 수정 가능
});
videoSchema.static('myStatic',function(something){
    return 'something output';
});
const Video = mongoose.model("Video",videoSchema);
export default Video;