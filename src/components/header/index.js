import React from 'react'
import GDLogo from '../../media/google-drive-logo.png'
import "../../styles/Header.css"
import { HelpOutline, Settings , Search , ExpandMore, Apps} from '@material-ui/icons'


const index = ({userPhoto}) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={GDLogo} alt="" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <Search />
                    <input type="text" placeholder="Search in drive" />
                    <ExpandMore />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutline />
                    <Settings />
                </span>
                <Apps />
                <img src={userPhoto} alt="User Photo" />
            </div>
        </div>
    )
}

export default index
