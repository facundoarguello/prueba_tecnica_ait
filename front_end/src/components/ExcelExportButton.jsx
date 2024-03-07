import { Button } from '@mui/material';
import FileSaver from "file-saver";
import {utils, write} from "xlsx";

export default function ExcelExportButton({styleButton, bodyData}) {
    const rowsNames = ['id','description', 'code','coin', 'price','strprice', 'datecreate']

    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const seconds = String(today.getSeconds()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    const fileName = `List items ${formattedDateTime}`;
    const fileType ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";

    const Heading = [
        {
        id: 'Id',
        description: "Description",
        code: "Code",
        coin: "Coin",
        price: "Price",
        strprice: "Pricen text",
        datecreate: "Date Create"
        }
    ];
    const wscols = [
        { wch: Math.max(...bodyData.map(data => String(data.id).length)) + 3 },
        { wch: Math.max(...bodyData.map(data => data.description.length)) },
        { wch: Math.max(...bodyData.map(data => data.code.length)) },
        { wch: Math.max(...bodyData.map(data => data.coin.length)) },
        { wch: Math.max(...bodyData.map(data => String(data.price).length)) },
        {
          wch: Math.max(...bodyData.map(data => data.strprice.length)) + 3
        },
        {
            wch: Math.max(...bodyData.map(data => data.datecreate.length)) + 3
        }
      ];

    const exportToCSV = (csvData, fileName, wscols) => {

        const ws = utils.json_to_sheet(Heading, {
          header: rowsNames,
          skipHeader: true,
          origin: 0 //ok
        });
        ws["!cols"] = wscols;
        utils.sheet_add_json(ws, csvData, {
          header: rowsNames,
          skipHeader: true,
          origin: -1 //ok
        });
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
      };

    return(
        <Button 
            variant="contained" 
            sx={styleButton}
            component="label"
            tabIndex={-1}
            onClick={e => exportToCSV(bodyData, fileName, wscols)}
        >
            Export Excel
            
        </Button>
    );
}