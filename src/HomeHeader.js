import React, { useState } from 'react'
import './HomeHeader.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase.js';
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'

function HomeHeader({ user }) {
    const history = useHistory('');

    if (user === false) {
        history.push("/login")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/login");
    }

    return (
        <div className = "header">
            <div className = "header__left">
                <img 
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt = "FB-Logo"
                />
                <div className = "header__input">
                    <SearchIcon />
                    <input type = "text" placeholder = "search facebook" className = "header__input__text" />
                </div>
            </div>
            <div className = "header__middle">
                <div className = "header__options header__options--active">
                    <HomeIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <FlagIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SubscriptionsOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <StorefrontOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div>
            </div>
            <div className = "header__right">
                <div className = "header__info">
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h4 className="homeHeader__name">{user?.displayName}</h4>
                </div>
                    <IconButton>
                        <AddIcon fontSize = "large" />
                    </IconButton>
                    <IconButton>
                        <ForumIcon fontSize = "large"/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon  fontSize = "large"/>
                    </IconButton>
                    <IconButton>
                        <div className="dropdown-content">
                        <a onClick={logout}><p>Logout</p></a>
                        </div>
                    </IconButton>
            </div>
        </div>



        // <div className="homeHeader">
        //     <div className="homeHeader__left">
        //         <Link to="/">
        //             <img src="https://firebasestorage.googleapis.com/v0/b/newagent-e757a.appspot.com/o/facebooklogo.png?alt=media&token=2c0922ba-df0a-4feb-9364-2fe3764fd772" alt="Facebook Logo" className="homeHeader__logo" />
        //         </Link>
        //     </div>

        //     <div className="homeHeader__inputSearch">
        //         <input type="text" placeholder="Search" />
        //         <SearchIcon className="homeHeader__inputButton" />
        //     </div>
        //     <div className="homeHeader__icons">
        //         <section>
        //             <Avatar className="homeHeader__avatar" alt="" src="" />
        //             <h3 className="homeHeader__name">{user?.displayName}</h3>
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <h3 className="homeHeader__name">Home</h3>
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <h3 className="homeHeader__name">Find Friends</h3>
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <h3 className="homeHeader__name">Create</h3>
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <GroupAddIcon />
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <TelegramIcon />
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <NotificationsIcon />
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <AssignmentIndIcon />
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>

        //         <section>
        //             <div className="dropdown">
        //                 <ArrowDropDownIcon className="dropdown" />
        //                 <div className="dropdown-content">
        //                     <a onClick={logout}><p>Logout</p></a>
        //                 </div>
        //             </div>
        //         </section>

        //         <h3 className="homeHeader__dash"> | </h3>
        //     </div>
        // </div>
    )
}

// end
export default HomeHeader
