import React from 'react'
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
 import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Card }  from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import  GeoChart  from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import StacketChart from '../charts/StacketChart';
import CountUp from 'react-countup';
import Copyright from '../components/Copyright';

export default function Analytics() {
  return (
    <>
    <div className='bgcolor'>
<Navbar />
    <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={2} sm={4} md={2} size={4}>
                <Stack spacing={{ xs: 1, sm: 2 }} direction={{ sm: "row" }} useFlexGap sx={{ flexWrap: 'wrap'}}>
                    <Card sx={{ height: '20%', height:160, flexGrow: 1, background: '#1565c0' }}>
                        <CardContent>
                               <Typography 
                                        gutterBottom 
                                        variant="p" 
                                        component="div" 
                                        sx={{ color: " #f0fcfc", padding: "3px 0px"}}
                                        >
                                        Visitantes
                                     </Typography>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: " #f0fcfc"}}>
                                 <CountUp delay={0.3} end={22000} duration={0.5} />
                                 </Typography>
                                     <Typography 
                                        gutterBottom 
                                        variant="body2" 
                                        component="div" 
                                        sx={{ color: " #ccd1d1"}}
                                        >
                                        Desde el mes anterior
                                     </Typography>
                         </CardContent>
                    </Card>
    <Card sx={{  height: '20%', height:160, flexGrow: 1, background: '#4caf50' }}>
      <CardContent>
      <Typography 
                                        gutterBottom 
                                        variant="body2" 
                                        component="div" 
                                        sx={{ color: " #f0fcfc", padding: "3px 0px"}}
                                        >
                                        Visitantes
                                     </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: " #ccd1d1"}}>
        <CountUp delay={0.3} end={25000} duration={0.5} />
        </Typography>
        <Typography 
        gutterBottom 
        variant="body2" 
        component="div" 
        sx={{ color: " #ccd1d1"}}
        >
          Desde inicio de mes
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{  Width : '20%', height:150, background: '#4caf50' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: " #ccd1d1"}}>
        <CountUp delay={0.3} end={10000} duration={0.5} />
        </Typography>
        <Typography 
        gutterBottom 
        variant="body2" 
        component="div" 
        sx={{ color: " #ccd1d1"}}
        >
          Visitas desde el mes anterior 
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{  Width : '20%', height:150, background: '#1565c0' }}>
                        <CardContent>
                             <Typography gutterBottom variant="h5" component="div" sx={{ color: " #ccd1d1"}}>
                             <CountUp delay={0.3} end={5000} duration={0.5} />
                                 </Typography>
                                     <Typography 
                                        gutterBottom 
                                        variant="body2" 
                                        component="div" 
                                        sx={{ color: " #ccd1d1"}}
                                        >
                                        Total Compras HHHHssss
                                     </Typography>
                         </CardContent>
                    </Card>
   </Stack>
       </Grid>
     
         <Grid item xs={2} sm={4} md={2} size={8}>
           <Card sx={{ width:870, height:42 + "vh" }} >
              <CardContent>
             <StacketChart/>
               </CardContent>
             </Card>
       </Grid>
      
        </Grid>
          <Box height={20} />
           <Grid container spacing={2}>
            <Grid size={8}>
             <Card sx={{ height: 60 + "vh" }}>
              <CardContent>
                 <GeoChart/>
               </CardContent>
             </Card>
        </Grid>
        <Grid size={4}>
          <Card variant="outlined" sx={{ height: 60 + "vh"}}>
            <CardContent>
              <PieChart/>
            </CardContent>
        </Card>
        </Grid>
        </Grid>
        <Copyright/>
       </Box>        
    </Box>
    </div>
    
     </>
    
  )
}
