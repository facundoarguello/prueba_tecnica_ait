import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function ListArticles() {
   
	return (
        <div id="form-up-and-add">
            <Typography variant="h5" gutterBottom>
                Esto es una breve carta de presentación para la prueba técnica. Desarrollada en Reactjs y usando la liberia de Mui para la facitalisación de algunos componentes.
                La idea es mostrar la lista de artículos con su respectiva informacion .
                También que se pueda agregar, modificar y borrar los articulos.
            </Typography>
            <Typography variant="h5" gutterBottom sx={{mt:5}}>
                This is a brief cover letter for technical testing. Developed in Reactjs and using the Mui library for the facitalization of some components.
                The idea is to show the list of items with their respective information.
                You can also add, modify and delete items.
            </Typography>

            <Button 
                variant="contained" 
            >
                <Link to="/list">Comenzar</Link>
            </Button>
        </div>
        
	);
}