import React from 'react'
import Sidenav from '../components/Sidenav';
import Navbar from '../components/Navbar';
import AccordionDash from '../components/AccordionDash';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import { Card }  from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import "../Dash.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import  BarChart  from "../charts/BarChartG";
import CountUp from 'react-countup';
import Copyright from '../components/Copyright';

export default function Home() {
  return (
    <>
    <div className='bgcolor'>
<Navbar />
    <Box height={70} />
     <Box sx={{ display: 'flex' }}>
      <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
        <Grid size={8}>
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49 +"%", height:150, background: '#1565c0' }}>
        <CardContent>
        <div>
          <CreditCardIcon className="iconstyle"/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: " #ccd1d1"}}>
          $<CountUp delay={0.2} end={55000} duration={0.4} />
        </Typography>
        <Typography 
        gutterBottom 
        variant="body2" 
        component="div" 
        sx={{ color: " #ccd1d1"}}
        >
          Total Compras
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 49 +"%", height:150, background: '#4caf50' }}>
      <CardContent>
      <div>
          <ShoppingBagIcon className="iconstyle"/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: " #ccd1d1"}}>
          $<CountUp delay={0.2} end={25000} duration={0.4} />
        </Typography>
        <Typography 
        gutterBottom 
        variant="body2" 
        component="div" 
        sx={{ color: " #ccd1d1"}}
        >
          Total Ventas
        </Typography>
      </CardContent>
    </Card>
    </Stack>
        </Grid>
        <Grid size={4}>
          <Stack spacing={2} >
          <Card sx={{ maxWidth: 345, background: '#81c784' }} >
      
      <Stack spacing={2} direction="row" >
        <div>
         <StorefrontIcon className="iconstyle" /> 
        </div>
         <div className="paddinall">
          <span className="pricetitle">$<CountUp delay={0.2} end={62500} duration={0.4} /></span>
          <br/>
          <span className="pricesubtitle">Total Ganancia</span>
        </div>
        </Stack>
      </Card>
    <Card sx={{ maxWidth: 345, background: '#29b6f6' }}>
      
      <Stack spacing={2} direction="row" >
        <div className="iconstyle">
         <StorefrontIcon  className="iconstyle"/> 
        </div>
         <div className="paddinall">
          <span className="pricetitle">$<CountUp delay={0.2} end={20540} duration={0.4} /></span>
          <br/>
          <span className="pricesubtitle">Total Ganancia</span>
        </div>
        </Stack>
       
    </Card>
          </Stack>
        </Grid>
        </Grid>

        <Box height={20} />
        <Grid container spacing={2}>
        <Grid size={8}>
        <Card sx={{ height: 60 + "vh" }}>
      <CardContent>
          <BarChart />
      </CardContent>
    </Card>
        </Grid>
        <Grid size={4}>
        <Card sx={{ height: 60 + "vh" }}>
      <CardContent>
         <div className='paddingall'>
          <span className='pricetitle'>Productos Populares</span>
         </div>
        <AccordionDash/>
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
