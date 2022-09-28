import React from 'react';
import landing from '../landing.svg';


import { GiPartyPopper } from 'react-icons/gi';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const HomeRoute = () =>{
    return (
    
    
    
    <>
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={8} sx={{margin:"auto"}} margin={"auto"}>

                    <img src={landing} alt="LandingPageImage" sx={{alignContent:"center"}}/>
                </Grid>
                <Grid item xs={4}>
                    <div>Imagine if</div>
                    <div>Snapchat</div>
                    <div>had events.</div>
                    <div>Easily share events with your friends across social media.</div>
                    <div><GiPartyPopper/> Create my event</div>
                </Grid>
                    
            </Grid>
        </Box>


    </>
    );
}

export default HomeRoute;
