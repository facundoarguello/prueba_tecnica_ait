import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useFetch, fetchData } from '../utils/fetchData';



export default function TableComponent({
    items,
    setItems,
    SetItemSelectDelete,
    setOpenDialog, 
    classesStyles,
    }) {
    
    const[totalItems, SetTotalItems] = React.useState(0)
    const [page, setPage] = React.useState(0);
    const [offset, setOffset] = React.useState(0);
    const [limit, SetLimit] = React.useState(5);

    const handleChangePage =  (event, newPage) => {
        setPage(newPage);
        setOffset(newPage * limit);
        
    };

    const handleClickDeleteIcon = (event, item) =>{
        setOpenDialog(true);
        SetItemSelectDelete({
            id:item.id,
            description: item.description
        });
 
    };

    useFetch('articulos', limit, offset, setItems, SetTotalItems);

    return(
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
                    {items?.map((article) => (
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
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[5]}
                            colSpan={7}
                            count={totalItems}
                            rowsPerPage={limit}
                            page={page}
                            onPageChange={handleChangePage}
                            // onClick={handleClickPage}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        
        </TableContainer>
    );
}