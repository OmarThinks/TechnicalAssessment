import React from 'react';
import landing from '../landing.svg';
import { GiPartyPopper } from 'react-icons/gi';
import {Box, TextField, FormControl, InputLabel, OutlinedInput, Button} from '@mui/material';
import { Container } from '@mui/system';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { useFormik } from 'formik';
import * as yup from 'yup';

import { useNavigate, createSearchParams } from "react-router-dom";




const CreateRoute = () =>{


    let navigate = useNavigate(); 


    const validationSchema = yup.object({
        eventName: yup
          .string('Enter Event Name')
          .min(8)
          .required(),
          hostName: yup
          .string('Enter Event Name')
          .min(8)
          .required(),
          eventLocation: yup
          .string('Enter Event Name')
          .min(8)
          .required(),


          startTime: yup.date().default(()=>{new Date()}),
          endTime: yup.date().default(()=>{new Date()})

      });



    const formik = useFormik({
        initialValues: {
            eventName: '',
            hostName:'',
            eventLocation: '',
            startTime: new Date(),
            endTime: new Date(),
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
        navigate({
            pathname: "/event",
            search: createSearchParams(values).toString()
        });
        },
    });



    


      const handleStartTimeEvent= (newValue) => {formik.setFieldValue("startTime",newValue);}
      const handleEndTimeEvent= (newValue) => {formik.setFieldValue("endTime",newValue);}
    


    
    return (
    
    <Container>
        



        <Box>
        <form onSubmit={formik.handleSubmit}>
            <Container>
                <FormControl sx={{ m: 1, width: '35ch'}} >
                    <TextField
                        value={formik.values.eventName}
                        onChange={formik.handleChange}
                        id="eventName"
                        name="eventName"
                        label="Event Name"
                        placeholder='Interview Event'
                        error={formik.touched.eventName && Boolean(formik.errors.eventName)}
                        helperText={formik.touched.eventName && formik.errors.eventName}
                    />
                </FormControl>
            </Container>
            <Container>
                <FormControl sx={{ m: 1, width: '35ch'}}>
                    <TextField
                        id="hostName"
                        label="Host Name"
                        placeholder='My Name'
                        name="hostName"
                        value={formik.values.hostName}
                        onChange={formik.handleChange}
                        error={formik.touched.hostName && Boolean(formik.errors.hostName)}
                        helperText={formik.touched.hostName && formik.errors.hostName}

                    />
                </FormControl>
            </Container>

            <Container>
                <FormControl sx={{ m: 1, width: '35ch'}}>
                    <TextField
                        id="eventLocation"
                        label="Event Location"
                        name="eventLocation"
                        value={formik.values.eventLocation}
                        onChange={formik.handleChange}
                        error={formik.touched.eventLocation && Boolean(formik.errors.eventLocation)}
                        helperText={formik.touched.eventLocation && formik.errors.eventLocation}

                    />
                </FormControl>
            </Container>


            <Container>
                <FormControl  sx={{ m: 1, width: '35ch'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="Start DateTime"
                            value={formik.values.startTime}
                            onChange={handleStartTimeEvent}
                            error={formik.touched.startTime && Boolean(formik.errors.startTime)}
                            helperText={formik.touched.startTime && formik.errors.startTime}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Container>

            <Container>
                <FormControl  sx={{ m: 1, width: '35ch'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props} />}
                            label="End DateTime"
                            value={formik.values.endTime}
                            onChange={handleEndTimeEvent}
                            error={formik.touched.endTime && Boolean(formik.errors.endTime)}
                            helperText={formik.touched.endTime && formik.errors.endTime}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Container>

            <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
            </Button>

            </form>
        </Box>

    </Container>

    );
}


export default CreateRoute;