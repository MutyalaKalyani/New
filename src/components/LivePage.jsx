import { Grid ,styled,Box,Button} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faThLarge} from '@fortawesome/free-solid-svg-icons'
import React,{useState} from 'react'
import img from './img.jpg'
import ReactPlayer from 'react-player/youtube'

export const LivePage = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4','Item5','Item 6', 'Item 7', 'Item 8', 'Item 9',];
  function selectFunc()
  {
     document.getElementById('one').style.display='block';
     document.getElementById('four').style.display='none';
     document.getElementById('nine').style.display='none';
  }
  function selectFunc1(){
    document.getElementById('one').style.display='none';
    document.getElementById('four').style.display='block';
    document.getElementById('nine').style.display='none';
  }
  function selectFunc2(){
    document.getElementById('one').style.display='none';
    document.getElementById('four').style.display='none';
    document.getElementById('nine').style.display='block';
  }

  return (
    <>
    <div>
      <div id="one" style={SmallerContainer}>
      <Grid container style={style} spacing={2} lg={10} md={10} xm={10}>
      {data.map((item, index) => (
        <Grid item key={index}  ><ReactPlayer url="https://youtu.be/YRBmZIDqSrc?feature=shared" height="100%" width="100%"/></Grid>
      ))}
      </Grid>

    </div>
    <div id="four" style={SmallerContainer1}  >
      <Grid container style={style1} spacing={8} >
      {data.slice(0,4).map((item, index) => (
        <Grid item key={index} ><ReactPlayer url="https://youtu.be/YRBmZIDqSrc?feature=shared" height="100%" width="100%"/></Grid>
      ))}
      </Grid>

    </div>
      <div id="nine" style={SmallerContainer2}  >
      <Grid container style={style} spacing={1} lg={10} md={10} xm={10}>
        <Grid item  style={style2}><ReactPlayer url="https://youtu.be/YRBmZIDqSrc?feature=shared"/></Grid>
      </Grid>

    </div>
    </div>
 <Appbar>
 <Button onClick={selectFunc}><img src={img} alt="grid" height={"25px"} width={"25px"} /></Button>
 <Button onClick={selectFunc1}><FontAwesomeIcon icon={faThLarge} size="2xl" style={{color: "#fffafb",}} /></Button>
 <Button onClick={selectFunc2}><FontAwesomeIcon icon={faSquare} size="2xl" style={{color: "#fffafb",}} /></Button>
</Appbar>
</>
  )
}
let Appbar=styled(Box)`
  background:#5a2a75;
  bottom:1px;
  position:fixed;
  height:40px;
  width:70%;
  padding:10px 20px;
`;
let style={
   listStyleType: 'none',
    display: 'flex', 
    padding: 0 ,
}
let style1={
  listStyleType: 'none',
   display: 'flex', 
   padding: 0 ,
   margin:'auto',
}
let style2={
  margin:' auto',
  marginTop:'50px',
}

  const SmallerContainer={
    position: "relative",
    top:'40px',
    margin:'auto 30px',

  };
  const SmallerContainer1={
    position: "relative",
    top:'40px',
    margin:'auto 30px',
    display:'none',
    width:'65%',
  };

  const SmallerContainer2={
    position: "relative",
    top:'40px',
    margin:'auto 30px',
    display:'none',
    width:'70%',
  };

