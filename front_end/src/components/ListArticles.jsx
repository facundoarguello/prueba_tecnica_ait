import React, { Suspense } from 'react';
import { Button } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import ExcelImportButton from './ExcelImportButton';
import ExcelExportButton from './ExcelExportButton';
import TableComponent from './TableComponent';



const useStyles =() => ({
    actionsIcons: {
        color: 'rgb(40, 114, 168)',
        '&:hover': {
            color: "rgb(40, 164, 168)"
        }
    },
    pagination:{
        display: 'flex',
        marginTop: '5%',
        justifyContent: 'center'
    },
    buttonsImportExport:{
        marginLeft: 2,
        marginRight: 2,
        marginBottom:2,
    }
  });


 


export default function ListArticles() {
    const [openDialog, setOpenDialog] = React.useState(false);

    const[items, setItems] = React.useState([]);

    const[itemSelectDelete, SetItemSelectDelete] = React.useState(
        {
            id: 0,
            description: ""
        }
    );


    const handleCloseDialog = (e) => {
        const { name } = e.target;
        if (name == 'agree') {
            try {
                const params = `?pks=${itemSelectDelete.id}`;
                const fetchDeleteArticulos = fetchData("articulos", 'DELETE', null, params);
                window.location.reload();
            } catch (error) {
                console.log(error);
            }
            
        }
        setOpenDialog(false);
    };
    const classesStyles = useStyles();

   

	return (
        <div id='container-list'>
            
            <div id="id_contain_import">
                <ExcelImportButton styleButton={classesStyles.buttonsImportExport}/>
                <ExcelExportButton styleButton={classesStyles.buttonsImportExport} bodyData={items}/>
            </div>
            
                <TableComponent
                    items={items}
                    setItems={setItems}
                    SetItemSelectDelete={SetItemSelectDelete}
                    setOpenDialog={setOpenDialog}
                    classesStyles={classesStyles}
                />
            
            
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>
                {`Do you want to delete this article ? '${itemSelectDelete.description}'`}
                </DialogTitle>
                <DialogActions>
                <Button onClick={handleCloseDialog} name={'disagre'}>Disagree</Button>
                <Button onClick={handleCloseDialog} autoFocus name={'agree'}>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
            
        </div>
	);
}
