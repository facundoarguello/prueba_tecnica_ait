import React from 'react';
import { 
    TextField,
    MenuItem,
    FormHelperText,
    FormControl,
    Select,
    Button,
    Typography,
    Snackbar,
    Alert} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useLocation, useNavigate} from 'react-router-dom';
import { fetchData } from '../utils/fetchData';
import Update from '@mui/icons-material/Update';
import { isGoodValuesNum, isGoodValuesStr } from '../utils/utils';




const coinSymbols = [
    "$ARS", "$USD", "ЄEUR"
]

const stylesForms = () => ({
    id:{
        width: '30%',
        marginRight: 3,
    },
    description :{
        width: '100%',

    },
    default:{
        marginRight:3,
    },
    title :{
        marginBottom: '20px',
        marginRight: '25%',
        marginLeft: '25%',
        fontSize:'3rem'
    }
})

export default function AddArticles() {
    const navigate = useNavigate();
    const location = useLocation()
    const { isUpdate, item } = location.state;
    const sxCode = stylesForms();
    const title = isUpdate ? 'Update Item' : 'Add Item';
    const [openSnakebar, setOpenSnakebar] = React.useState(
        {
            error: false,
            open: false,
            msg: 'The items has insert correct!'
        }
    );
    const [values, setValues] = React.useState(
        !isUpdate ?
        {
            description: null,
            code: null,
            coin: '$ARS',
            price: 0,
        }
        :
        {
            description: item.description,
            code: item.code,
            coin: item.coin, // Cambia la moneda, por ejemplo.
            price: item.price, // Cambia el precio.
        }
      );
    
    

    const [errors, setErrors] = React.useState({
        description: false,
        code: false,
        coin: false,
        price: false,
      });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((v) => ({ ...v, [name]: value }));
      };

    const handleSaveButton= () =>{
        const { description, code, price, coin } = values;

        let sendRequestPrice = isGoodValuesNum('price', values, setErrors);
        let sendRequestDesc = isGoodValuesStr('description', values, setErrors);
        let sendRequestCode = isGoodValuesStr('code', values, setErrors);

        if ( sendRequestCode
            && sendRequestDesc
            && sendRequestPrice){
                const body_request = {
                    description,
                    code,
                    coin,
                    price,
                };
                if(! isUpdate){
                    try {
                        const fetchPost =  fetchData('articulos', 'POST', body_request, null);
                        setOpenSnakebar((v) => ({ ...v, ['open']: true })); 
                        
                    }
                    catch (e) {
                        console.log(e.message);
                        setOpenSnakebar((v) => ({ ...v, ['open']: true }));
                        setOpenSnakebar((v) => ({ ...v, ['error']: true }));
                        setOpenSnakebar((v) => ({ ...v, ['message']: 'Error when you have insert!' }));
                    }
                }
                else {
                    const idItem = item.id;
                    const paramsStr = `?pk=${idItem}`;
                    try {
                        const fetchPut =  fetchData('articulos', 'PUT', body_request, paramsStr);
                        setOpenSnakebar((v) => ({ ...v, ['open']: true }));
                        setOpenSnakebar((v) => ({ ...v, ['message']: 'Item updated succesfully !' }));
                
                    }
                    catch (e) {
                        console.log(e.message);
                        setOpenSnakebar((v) => ({ ...v, ['open']: true }));
                        setOpenSnakebar((v) => ({ ...v, ['error']: true }));
                        setOpenSnakebar((v) => ({ ...v, ['message']: 'Error when you have update!' }));
                    }
                }
               
        }
        
    }

    const handleClose = () => {
        setOpenSnakebar((v) => ({ ...v, ['open']: false }));
        console.log("sadas")
        if(!openSnakebar.error) {
            navigate('/list');
        };
      };
    return (
        <form noValidate autoComplete="off" id='form-up-and-add' >
            <Typography sx={sxCode.title}>{title}</Typography>
            <div id='content-id-description'>
                 {isUpdate ? <TextField 
                        focused 
                        name='id_item' 
                        disabled 
                        label="Id" 
                        sx={sxCode.id}
                        value={item.id}
                        />
                : null}
                <TextField 
                    focused
                    name='description'
                    required id="standard-basic" 
                    label="Description" 
                    sx={sxCode.description} 
                    error={errors.description}
                    value={values.description}
                    onChange={handleChange}
                    />
            </div>
            <div id="content-id-description">
                <TextField 
                    focused
                    name='code'
                    required id="standard-basic" 
                    label="Code" 
                    value={values.code}
                    sx={sxCode.default} 
                    error={errors.code}
                    onChange={handleChange}
                    />
                <FormControl 
                    required  
                    sx={sxCode.default}
                    value={values.coin}
                 
                >
                    <Select 
                        name='coin'
                        value={values.coin}
                        onChange={handleChange}>
                        {coinSymbols.map((coin_i) => (
                            <MenuItem value={coin_i}>{coin_i}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <TextField 
                    focused
                    required 
                    value={values.price}
                    name='price'
                    default
                    id="standard-basic" 
                    label="Price"
                    type='number' 
                    error={errors.price}
                    sx={sxCode.default}
                    onChange={handleChange}
                    InputProps={{
                        inputProps: { min: 0 }
                      }}
                    
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={!isUpdate ? <SaveIcon /> : <Update />}
                onClick={handleSaveButton}
            >
                {!isUpdate ? 'Save' : 'Update'}
            </Button>
            <Snackbar
                open={openSnakebar.open}
                autoHideDuration={5000}
                onClose={handleClose}
            >
                 <Alert
                onClose={handleClose}
                severity={openSnakebar.error ? "error" : "success" }
                variant="filled"
             
                sx={{ width: '100%' }}
                >
                    {openSnakebar.message}
                </Alert>
            </Snackbar>
        </form>
    )
}