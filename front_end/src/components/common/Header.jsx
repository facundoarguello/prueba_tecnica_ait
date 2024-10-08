
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import aiotLogo from "../../assets/icon_ait.svg"
import  Button  from "@mui/material/Button";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';


export default function Header() {
    const listActions = [
        {
            path: 'add',
            name: 'Add',
            icon: <AddCircleOutlineIcon />,
            props:{
                isUpdate: false
            }

        },
        {
            path: 'list',
            name: 'List',
            icon: <FormatListBulletedIcon/>,
            props: {}

        },
    ]
	return (
		<AppBar  sx={{position: 'sticky'}}>
			<Toolbar sx={{justifyContent: 'space-between'}}>	
                <Link to="/">
                    <img src={aiotLogo}/>
                </Link>
                <div>
                    {listActions.map((item) => (
                        <Button 
                            variant="text" 
                            color='inherit' 
                            key={item.name} 
                            startIcon={item.icon}
                            >
                            <Link 
                                style={{color: "white"}} 
                                to={`/${item.path}`} 
                                state={item.props}>
                                    {item.name}
                            </Link>
                        </Button>
                    ))}
                </div>
			</Toolbar>
		</AppBar>
	);
}
