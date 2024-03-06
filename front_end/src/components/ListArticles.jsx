import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Button, Pagination, IconButton } from '@mui/material';
import { Link } from 'react-router-dom'
import { fetchData } from '../utils/fetchData';
import { Suspense } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';



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
const getArticulos = fetchData("articulos", 'GET', null, null);


export default function ListArticles() {

    const { data } = getArticulos.read();

    const [openDialog, setOpenDialog] = React.useState(false);

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

    const handleClickDeleteIcon = (event, item) =>{
        setOpenDialog(true);
        SetItemSelectDelete({
            id:item.id,
            description: item.description
        });
 
    };
   
	return (
        <div>
            <div id="id_contain_import">
                <Button variant="contained" sx={classesStyles.buttonsImportExport}>Import Excel</Button>
                <Button variant="contained" sx={classesStyles.buttonsImportExport}>Export Excel</Button>
            </div>
            <TableContainer >
                <Table sx={{ minWidth:  { xs: 300, sm: '75rem' } }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell align="left">Article Description</TableCell>
                        <TableCell align="left">Article Code</TableCell>
                        <TableCell align="left">Price</TableCell>
                        <TableCell align="left">Date Create</TableCell>
                        <TableCell align="center">Update</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <Suspense fallback={<div>Loading...</div>}>
                            {data.map((article) => (
                                <TableRow
                                key={article.id}
                                >
                                    <TableCell component="th" scope="row">{article.id}</TableCell>
                                    <TableCell align="left">{article.description}</TableCell>
                                    <TableCell align="left">{article.code}</TableCell>
                                    <TableCell align="left">{article.strprice}</TableCell>
                                    <TableCell align="left">{article.datecreate}</TableCell>
                                    <TableCell align="center">
                                        <Link 
                                            to='/add' 
                                            state={{ 
                                                isUpdate: true ,
                                                item : article

                                            }}
                                        >
                                            <UpdateIcon sx={classesStyles.actionsIcons}/>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="center">
                                    <IconButton aria-label="delete" color="primary" onClick={(event) => handleClickDeleteIcon(event, article)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </Suspense>
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={10} color="primary" sx={classesStyles.pagination}/>
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
