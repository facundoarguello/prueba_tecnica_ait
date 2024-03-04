import React from 'react';
import { TextField } from '@mui/material';
import { MenuItem } from '@mui/material';
import { FormHelperText } from '@mui/material';
import { FormControl} from '@mui/material';
import { Select } from '@mui/material';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom'


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
    const [coin, setCoin] = React.useState('$ARS');
    const location = useLocation()
    const { isUpdate } = location.state;
    const sxCode = stylesForms();
    const title = isUpdate ? 'Update Item' : 'Add Item';
    return (
        <form noValidate autoComplete="off" >
            <Typography sx={sxCode.title}>{title}</Typography>
            <div id='content-id-description'>
                 {isUpdate ? <TextField disabled id="standard-basic" label="Id" sx={sxCode.id}/>: null}
                <TextField required id="standard-basic" label="Description" sx={sxCode.description} />
            </div>
            <div id="content-id-description">
                <TextField required id="standard-basic" label="Code" sx={sxCode.default}/>
                <FormControl 
                    required  
                    sx={sxCode.default}
                 
                >
                    <Select value={coin}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {coinSymbols.map((coin) => (
                            <MenuItem value={coin}>{coin}</MenuItem>
                        ))}
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
                <TextField 
                    required 
                    id="standard-basic" 
                    label="Price"
                    type='number' 
                    sx={sxCode.default}
                    InputProps={{
                        inputProps: { min: 0 }
                      }}
                />
            </div>
            <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
        </form>
    )
}