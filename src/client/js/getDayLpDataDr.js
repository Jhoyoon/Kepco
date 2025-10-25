import * as Excel from "exceljs/dist/exceljs.min.js";
import { saveAs } from "file-saver";

const fnCalloutForm = async (event) => {
    console.log('fnCalloutForm run');    
    const loadingDiv = document.querySelector("#loading");
    const loadingP = document.createElement("p");

    loadingP.innerText = '조회 중입니다...';
    loadingDiv.appendChild(loadingP);
}
// html은 form submit으로 잡고, 동작을 막지만 말자
const calloutForm = document.querySelector("#calloutForm");
if(calloutForm){
    calloutForm.addEventListener("submit",fnCalloutForm);
}
const fnExcelExport = async (event) => {
    console.log('fnExcelExport run');
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet('전력소비 데이터');
    // 기본 컬럼들
    const columns = [
    { header: '고객번호', key: 'custNo', width: 20 },
    { header: '계기번호', key: 'meterNo', width: 20 },
    { header: '조회일자', key: 'mr_ymd', width: 20 },
    { header: '다계기여부', key: 'multi_meter_yn', width: 20 },
    { header: '유효전력', key: 'vld_pwr', width: 20 },
    ];

    // ✅ “소모 전력 0015 ~ 2400”까지 자동 추가
    for (let i = 15; i <= 2400; i += 15) {
    const num = i.toString().padStart(4, "0"); // 0015, 0030, 0045, ...
    columns.push({
            header: `소모 전력 ${num}`,
            key: `pwr_qty${num}`,
            width: 20
        });
    }
    worksheet.columns = columns;
    worksheet.addRows(window.datas);
    // 파일 생성
    const fileData = await workbook.xlsx.writeBuffer(); //writeBuffer는 프로미스를 반환하므로 async-await을 사용해야 한다.
    const blob = new Blob([fileData], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, `일단위 전력소비 데이터(DR)`);
}
const excelButton = document.querySelector("#excelExport");
if(excelButton) excelButton.addEventListener('click',fnExcelExport);
