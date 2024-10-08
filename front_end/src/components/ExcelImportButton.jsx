import { styled } from '@mui/material/styles';
import { Button, } from '@mui/material';
import { fetchImportData } from '../utils/fetchData';

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
    const handleClickImport= async (event) => {

        const fileObj =  event.target.files[0];
        if (!fileObj) {
        return;
        }

        const formData = new FormData(); // Crear un FormData para enviar el archivo
        formData.append('file', fileObj);

        try {

            const response = await fetchImportData("articulos/import", formData);
            window.location.reload();
        } catch (error) {
            console.log(error);
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