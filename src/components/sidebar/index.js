import React from 'react'
import '../../styles/Sidebar.css'

import NewFile from './NewFile'
import SidebarItem from './SidebarItem';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StorageIcon from '@material-ui/icons/Storage';

const index = ({useremail}) => {
    return (
        <div className='sidebar'>
            <NewFile useremail={useremail}/>

            <div className="sidebar__itemsContainer">
                <SidebarItem arrow={true} icon={(<InsertDriveFileIcon />)} label={'My Drive'} />
                <SidebarItem arrow={true} icon={(<ImportantDevicesIcon />)} label={'Computers'} />
                <SidebarItem arrow={false} icon={(<PeopleAltIcon />)} label={'Shared with me'} />
                <SidebarItem arrow={false}  icon={(<QueryBuilderIcon />)} label={'Recent'} />
                <SidebarItem arrow={false}  icon={(<StarBorderIcon />)} label={'Starred'} />
                <SidebarItem arrow={false}  icon={(<DeleteOutlineIcon />)} label={'Bin'} />
                
                <hr/>
                
                <SidebarItem icon={(<StorageIcon />)} label={'Storage'} />

            </div>

        </div>
    )
}

export default index