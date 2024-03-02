import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import aiotLogo from "../assets/icon_ait.svg"
import  Button  from "@mui/material/Button";
import { Link } from "react-router-dom";


export default function Header() {
    const listActions = ['Add', 'List' ]
	return (
		<AppBar >
			<Toolbar sx={{justifyContent: 'space-between'}}>	
                <Link to="/">
                    <img src={aiotLogo}/>
                </Link>
                <div>
                    {listActions.map((item) => (
                        <Button variant="text" color='inherit' key={item} >
                            <Link style={{color: "white"}} to={`/${item}`}>{item}</Link>
                        </Button>
                    ))}
                </div>
			</Toolbar>
		</AppBar>
	);
}
