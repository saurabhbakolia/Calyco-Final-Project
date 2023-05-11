import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Container fixed maxWidth={false} sx={{ minWidth: '100%' }} className='bg-black text-gray-300 min-h-[320px] fixed bottom-0 left-0'>
      <Grid container spacing={10} className='w-full py-14 px-28'>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ margin: "15px" }} className="text-white border-b-2 border-gray-400 w-fit">
            Company
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            <Link to='/'>Home</Link>
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            <Link to='/about-us'>About Us</Link>
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            <Link to='/join-us'>Join Our Team</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ margin: "15px" }} className="text-white border-b-2 border-gray-400 w-fit">
            Get Help
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            <Link to='/contact-us'>Contact Us</Link>
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            <Link to='/'>FAQ</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ margin: "15px" }} className="text-white border-b-2 border-gray-400 w-fit">
            Contact Info
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            Sales@Calyco.com
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            Sales@Calyco.com
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            Sales@Calyco.com
          </Typography>
          <Typography sx={{ margin: "15px" }}>
            {" "}
            Sales@Calyco.com
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Typography variant="h6" sx={{ margin: "15px" }} className="text-white border-b-2 border-gray-400 w-fit">
            Follow Us
          </Typography>
          <Container maxWidth="md">
            <Stack direction='column' spacing={1}>
              <LinkedInIcon sx={{fontSize:40}}/>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer;

