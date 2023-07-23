import { Avatar } from "@mui/material";
import { useState } from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Badge from '@mui/material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';

const DashboardSideBar = () => {
    const [open,setOpen]=useState(true)
    const dashboardInfos=[
        {infoName:'Dashboard', icon:<DashboardIcon></DashboardIcon>},
        {infoName:'Creators', icon:<PersonAddAltIcon></PersonAddAltIcon>},
        {infoName:'Active Deals', icon:<CheckCircleOutlineIcon></CheckCircleOutlineIcon>},
        {infoName:'Completed Deals', icon:<AssignmentIcon></AssignmentIcon>},
        {infoName:'Notification', icon:<NotificationsNoneIcon></NotificationsNoneIcon>},
        {infoName:'Profile Settings', icon:<AccountCircleIcon></AccountCircleIcon>}
    ]
    return (
        <div className={`${open? 'w-52 lg:w-72':'w-20'} bg-white duration-300  relative min-h-screen`}>
           <img onClick={()=>setOpen(!open)} src={'https://cdn-icons-png.flaticon.com/128/2609/2609370.png'} alt="" className={`absolute w-7 border-2 duration-300 rounded-full bg-white border-zinc-700 cursor-pointer -right-3 top-9 ${!open && 'rotate-180'}`} />
           <div className={`flex items-center gap-x-3 ${open? 'p-8':'p-4'}`}>
           <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.663062170.1681230249&semt=sph" />
            <h1 className={`font-semibold text-black  origin-left duration-500 ${!open && 'scale-0'}`}>{'Md Hossain'}</h1>
           </div>
           <h1 className="text-gray-700 p-2 ms-2">Menu</h1>
          {
             <ul className='p-4'>
             {dashboardInfos.map((info,i)=>
          
              <li key={i} className={`cursor-pointer flex items-center gap-x-4 px-4 py-2 rounded ${info.infoName==='Active Deals' && 'bg-teal-500 text-white'}`}>
             <span>{info.icon}</span>
             <span className={`font-medium ${info.infoName==='Active Deals'? 'text-white' :'text-gray-600'} ${!open && 'hidden origin-left duration-200'}`}>{info.infoName}</span>
             {info.infoName==='Notification' && <Badge badgeContent={4} color="success" className={`${open? 'ms-4': 'hidden'}`} />}
             </li>
            
            )}
           </ul>
          }
          <div className="absolute bottom-0 flex items-center gap-x-3 ms-6">
            <LogoutIcon className="rotate-180"></LogoutIcon>
            <span className={`font-semibold text-black  origin-left duration-500 ${!open && 'scale-0'}`}>Logout</span>
          </div>
          
        </div>
    );
};

export default DashboardSideBar;