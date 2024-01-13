import React from 'react'
import { AppBar, Toolbar,styled,Button,Box} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LivePage } from './LivePage'
import { faClockRotateLeft, faFolder, faForward, faTriangleExclamation, faTv,faUpload } from '@fortawesome/free-solid-svg-icons'
import { Link, Navigate, Outlet } from 'react-router-dom'
let App_bar=styled(AppBar)`
  background:#5a2a75;
  box-shadow:none;
  padding:0;
  position:sticky;
`;
let style={
 textAlign:"center",
 fontSize:"10px",
 fontWeight:"100",
};
let style2={
   borderLeft:"1px solid 	#717171",
   padding:"10px",
};
let style3={
   borderLeft:"1px solid 	#717171",
   borderRight:"1px solid 	#717171",
   padding:"10px",
};
const Nav_bar = () => {
  return (
    <div>
        <App_bar>
            <Toolbar >
             <Box sx={{paddingRight:"10px",paddingLeft:"0"}}>
                   <Button><Link to="LivePage"><FontAwesomeIcon icon={faTv} size="xl" style={{color: "#fffafb",}} /></Link></Button>
                   <Box sx={style}>Live</Box>
              </Box>
                <Box sx={style2}>
                   <Button><FontAwesomeIcon icon={faForward} size="xl" style={{color: "#fffafb",}} /></Button>
                   <Box sx={style}>Playback</Box>
                </Box>
                <Box sx={style2}>
                 <Button ><FontAwesomeIcon icon={faFolder} size="xl" style={{color: "#fffafb",}} /></Button> 
                   <Box sx={style}>Folders</Box>
                </Box>
                <Box sx={style2}>
                 <Button ><Link to="Uploads"><FontAwesomeIcon icon={faUpload} size="xl" style={{color: "#fffafb",}} /></Link></Button>
                   <Box sx={style}>Uploads</Box>
                </Box>
                <Box sx={style2}>
                   <Button><FontAwesomeIcon icon={faClockRotateLeft} size="xl" style={{color: "#fffafb",}} /></Button>
                   <Box sx={style}>History</Box>
                </Box>
                <Box sx={style3}>
                   <Button ><FontAwesomeIcon icon={faTriangleExclamation} size="xl" style={{color: "#fffafb",}} /></Button>
                   <Box sx={style}>Anomaly</Box>
                </Box>
            </Toolbar>
        </App_bar>
       <Outlet/>
    </div>
  )
}

export default Nav_bar