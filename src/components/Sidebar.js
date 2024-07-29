import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdLogOut } from "react-icons/io";


const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubMenu(!isToggleSubMenu)

    }
    return (
        <div className="SideBar">
            <ul>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                            <span className='icon'><MdDashboard /></span>
                            Dashboard <span className='arrow'><FaAngleRight /></span>
                        </Button>
                    </Link>
                </li>
                <li>

                    <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}><span className='icon'><BiSolidCategory /></span>
                        Products <span className='arrow'><FaAngleRight /></span></Button>
                    <div className={`SubmenuWrapper ${activeTab === 1 && isToggleSubMenu === true ? 'collapse' : 'colapsed'}`}>
                        <ul className='SubMenu'>
                            <li><Link to="/">Product List</Link></li>
                            <li><Link to="/">Product View</Link></li>
                            <li><Link to="/">Product Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}><span className='icon'><FaCartShopping /></span>
                            Orders <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}><span className='icon'><FaMessage /></span>
                            Messages <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className='w-100'><span className='icon'><FaBell /></span>
                            Notiifications <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}><span className='icon'><IoSettings />
                        </span>
                            Settings <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}><span className='icon'><MdDashboard /></span>
                            Dashboard <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}><span className='icon'><BiSolidCategory /></span>
                            Products <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}><span className='icon'><FaCartShopping /></span>
                            Orders <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}><span className='icon'><FaMessage /></span>
                            Messages <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 9 ? 'active' : ''}`} onClick={() => isOpenSubmenu(9)}><span className='icon'><FaBell /></span>
                            Notiifications <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmenu(10)}><span className='icon'><IoSettings />
                        </span>
                            Settings <span className='arrow'><FaAngleRight /></span></Button>
                    </Link>
                </li>
            </ul>

            <br />

            <div className='LogoutWrapper'>
                <div className='logoutBox'>
                    <Button variant="contained"><IoMdLogOut />
                    Logout</Button>
                    
                </div>
            </div>

        </div>



    )
}

export default Sidebar;