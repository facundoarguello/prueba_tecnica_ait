import { Button } from '@mui/material';
import { fetchAndDownloadExcel } from '../../utils/fetchData';

export default function ExcelExportButton({styleButton, bodyData}) {
    const handleDownload = () => {
        fetchAndDownloadExcel('articulos/export', 'GET', null, null);
      };

    return(
        <Button 
            variant="contained" 
            sx={styleButton}
            component="label"
            tabIndex={-1}
            onClick={e => handleDownload()}
        >
            Export Excel
            
        </Button>
    );
}