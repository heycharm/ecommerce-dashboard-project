import { Link } from "react-router-dom";
import Logo from "../assets/images/logo_single2.png";
import Button from "@mui/material/Button";
import { MdMenuOpen, MdLightMode, MdEmail } from "react-icons/md";
import SearchBox from "./SearchBox";
import { IoIosCart, IoIosNotifications } from "react-icons/io";
import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import { CgProfile } from "react-icons/cg";
import { MdOutlinePassword } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import "../App.css";
import { Divider } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] =
    React.useState(false);

  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };

  const handleOpennotificationsDrop = () => {
    setisOpennotificationDrop(true);
  };
  const handleClosenotificationsDrop = () => {
    setisOpennotificationDrop(false);
  };

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-180">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wrapper */}
            <div className="col-sm-2 part-1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={Logo} alt="Logo" />
                <span className="ml-2">HOTASH</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part-2 pl-4">
              <Button className="rounded-circle mr-3">
                <MdMenuOpen />
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part-3">
              <Button className="rounded-circle mr-3">
                <MdLightMode />
              </Button>
              <Button className="rounded-circle mr-3">
                <IoIosCart />
              </Button>
              <Button className="rounded-circle mr-3">
                <MdEmail />
              </Button>
              <div className="DropdownWrapper position-relative">
                <Button
                  className="rounded-circle mr-3"
                  onClick={handleOpennotificationsDrop}
                >
                  <IoIosNotifications />
                </Button>

                <Menu
                  anchorEl={isOpennotificationDrop}
                  className=" notifications dropdown_list"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleClosenotificationsDrop}
                  onClick={handleClosenotificationsDrop}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  // transformOrigin={{ horizontal: "right", vertical: "top"}}
                  // anchorOrigin={{ horizontal: "right", vertical: "bottom"}}
                >
                  <div className="NotificationOrder head pl-3 pb-2">
                    <h4 className="h4order">Orders(12)</h4>
                  </div>
                  <Divider className="mb-3" />
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <div className=" d-flex align-items-center">
                      <div className="OrderImg">
                        <span className="rounded-circle">
                          <img
                            className=" rounded-circle"
                            src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                            alt=""
                            srcset=""
                          />
                        </span>
                      </div>
                      <div className="NotiInfo" >
                        <h4>
                          <span >
                            <b>Romil</b> added to his favorite list
                            <b> Leather belt steve madden</b>

                          </span>
                        </h4>
                      </div>
                    </div>
                  </MenuItem>
                </Menu>
              </div>

              <div className="MyAccWrapper">
                <Button
                  className="MyAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDrop}
                >
                  <div className="UserImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="UserInfo">
                    <h4>CHINMAY</h4>
                    <p className="mb-0">@chinmay02</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAccDrop}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <CgProfile />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <MdOutlinePassword />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <IoIosLogOut />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
