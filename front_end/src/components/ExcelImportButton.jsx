import { styled } from '@mui/material/styles';
import { Button, } from '@mui/material';
import {read, utils} from "xlsx";
import { fetchData } from '../utils/fetchData';

import React from 'react';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const makeObjItem=(data)=>{
    return data.map((item ) => {
        let newData = {};
         Object.keys(item).forEach(key => {
           newData[key.toLowerCase()] = item[key];
        });
        return {
            description: newData.description,
            code: newData.code,
            price: newData.price,
            coin: newData.coin 
        }
    });
  }


export default function ExcelImportButton({styleButton}) {
    
    let hojas = [];
    const handleClickImport=(event) => {

        const fileObj =  event.target.files[0];
        if (!fileObj) {
        return;
        }

        let reader = new FileReader();
        reader.readAsArrayBuffer(fileObj);
        reader.onloadend = (e) => {
            let data = new Uint8Array(e.target.result);
            let woorkbook = read(data,{type: 'array'});
            woorkbook.SheetNames.forEach(function(sheetName){
                    let excel_row = utils.sheet_to_json(woorkbook.Sheets[sheetName]);
                    hojas.push(...excel_row);
                }
            );
            
            const dataRequestPost = makeObjItem(hojas);

            const fetchPostResponse = fetchData('articulos','POST', dataRequestPost, null);
            window.location.reload();

        }


    }


    return(
        <Button 
            variant="contained" 
            sx={styleButton}
            component="label"
            role={undefined}
            tabIndex={-1}
            onChange={handleClickImport}
        >
            Import Excel
            <VisuallyHiddenInput type="file" accept=".xlsx, .xls"  />
        </Button>
    );
}