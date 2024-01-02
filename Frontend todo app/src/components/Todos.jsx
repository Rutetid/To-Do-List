import * as React from 'react';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TodoEntry from './TodoEntry';
import { Typography } from '@mui/material';

function Todos(){

    return (
        <div style={{paddingTop : 150 ,
                    marginBottom : 6}}>
            <center>
                
        <Card variant="outlined" style={{width : 450 , padding : 10}}>
        <Typography variant='h3'
        style={{padding : 20 ,
                display : "flex" , 
                justifyContent : "start" ,
                fontFamily : "Courier New"}}> To Do List</Typography>
            <TextField 
                id="outlined-basic" 
                label="Enter new Todo" 
                variant="outlined" 
                style={{width : 285,
                        height : 50}}/>

            <Button 
                variant="contained" 
                style={{width : 140 ,
                marginLeft : 15,
                height : 55
        }}

            >Create Todo
            </Button>

            <br />

            <TodoEntry></TodoEntry>
            
      </Card>
      </center>
      </div>
    )
}

export default Todos;