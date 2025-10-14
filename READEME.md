"comments": {
    "express": "JS로 서버를 구성할수 있게 해주는 패키지",
    "babel/core": "최신 JS 문법을 사용할수 있게 해주는 컴파일러의 core 패키지",
    "babel/node" : "babel node 명령어를 사용할수 있게 해준다. script를 통해서 babel을 자동으로 돌릴수 있음",
    "preset-env": "바벨을 통해서 추가되는, 최신 JS 문법들을 사용할수 있게 해주는 패키지"
  }

url
/ : home
/user/id : get : 사용자 정보 read
/user/id : post : 사용자 정보 생성
/user/id : patch : 사용자 정보 생성
/action/getDayLpDataDr : 일단위 전력소비 데이터(DR)
/action/getDayLpDataNormal : 일단위 전력소비 데이터(일반) 
/action/getMinuteLpDataDr : 15분단위 전력소비 데이터(DR) 
/action/getMinuteLpDataNormal : 15분단위 전력소비 데이터(일반) 
/action/getCustNoList : 고객번호
/action/getCustMeterList : 고객번호, 계기번호 
/action/getAllCustPeriodData : 전체고객의 전력소비 데이터 
/action/getPeriodData : 특정고객의 특정시간 전력소비 데이터 
/action/getCustInfoData : 고객정보
/action/getCustBillData : 청구정보
/action/getCustJoinInfoData : 고객가입여부확인
/action/getKukminDayLpData : 일단위 전력소비 데이터(SG) 
/action/getKukminMinuteLpData : 15분단위 전력소비 데이터(SG)
/action/getPPAGenBizrBasc : PPA 발전사업자 기본정보 
/action/getPPASmkpUnitCost : PPA 발전 SMP 정산대금정보
/action/getPPAGenMrVal : PPA 고객 발전 정기검침내역
/action/getPPAGenMinuteLpData  : PPA 15분단위 발전량 정보