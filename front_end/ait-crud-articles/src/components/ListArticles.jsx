import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import { Button, Pagination } from '@mui/material';
import { Link } from 'react-router-dom'




const exampleArticlesList =[
    {
        "id":1,
        "description": "Articulo de prueba uno",
        "code":"Ar24567",
        "coin": '$',
        "price": 23.03,
        "strprice": '$ 23.03',
        "datecreate": "2023-02-02"
    },
    {
        "id":2,
        "description": "Articulo de prueba uno",
        "code":"Ar24567",
        "coin": '$ARS',
        "price": 23.03,
        "strprice": '$ARS 23.03',
        "datecreate": "2023-02-02"
    }
]

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

    const classesStyles = useStyles();
   
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
                        {exampleArticlesList.map((article) => (
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
                                        state={{ isUpdate: true }}
                                    >
                                        <UpdateIcon sx={classesStyles.actionsIcons}/>
                                    </Link>
                                </TableCell>
                                <TableCell align="center">
                                    <DeleteIcon sx={classesStyles.actionsIcons}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination count={10} color="primary" sx={classesStyles.pagination}/>
            
        </div>
	);
}
