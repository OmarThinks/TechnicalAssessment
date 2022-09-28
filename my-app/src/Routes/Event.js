import React from 'react';

import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

import {GrLocation} from 'react-icons/gr'
import {FcCalendar} from 'react-icons/fc'

import dateFormat, { masks } from "dateformat";




const formatDateTime = (dt) =>{

    let d = new Date(dt);

    return dateFormat(d, "d  mmmm hh:mmtt UTC:p");





}




const EventRoute = () =>{
    let { search } = useLocation();

    const query = new URLSearchParams(search);
    

    
    const eventName = query.get('eventName');
    const hostName = query.get('hostName');
    const eventLocation = query.get('eventLocation');
    const startTime = query.get('startTime');
    const endTime = query.get('endTime');


    const d = formatDateTime(startTime);
    


    const startTimeFormatted = dateFormat(startTime, "d  mmmm hh:mmtt");
    const endTimeFormatted = dateFormat(endTime, "d  mmmm hh:mmtt UTC:p");




    return (
        <Container>
        
        <Container>
            <Typography variant="h2" gutterBottom>
            {eventName}
            </Typography>
            <Typography variant="h6" gutterBottom>
            Hosted by <Typography variant='subtitle2' display='inline'>{hostName}</Typography>
            </Typography>
        </Container>





        <Container>

            <FcCalendar />

            <Typography variant="body1" gutterBottom>
                {startTimeFormatted}
            </Typography>
            <Typography variant="body2" gutterBottom>
                to {endTimeFormatted}
            </Typography>
        </Container>






        <Container>

            <GrLocation />

            <Typography variant="body1" gutterBottom>
                Street Name
            </Typography>
            <Typography variant="body2" gutterBottom>
                {eventLocation}
            </Typography>
        </Container>













      </Container>


    )
}

export default EventRoute;
