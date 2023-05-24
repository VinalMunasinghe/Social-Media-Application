import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar"> 
            <div className="left">
                 <Link to = "./" style={{textDecoration:"none"}}>
                 <span>iamsocial</span>
                 </Link>
                 <HomeOutlinedIcon/>
                 <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className="search">
                <SearchOutlinedIcon/>
                 <input type="text" placeholder="Search for friends"/>
                 </div>
            </div>
        <div className="right">
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <span>Vinal Munasinghe</span>


            </div>



        </div>
        </div>
    )
}

export default Navbar;