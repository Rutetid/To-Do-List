import React from 'react';
// import { useState } from 'react';
import { Typography } from '@mui/material';
// import { response } from 'express';

// const fetch = require("fetch")

// App.use(fetch());
function TodoEntry(){
    // const [todo , setTodo] = useState("");
    // let todoy;
    // fetch("http://localhost:3000/todos" , { method : "GET" , 
    //     Headers: {
    //         'Content-Type': 'application/json',
    //     } , 
    //     body: JSON.stringify({ title : title }),
    // }).then(response => response.JSON()).then(data => data = todoy)
    return ( 
    <div>
   
    <Typography variant='h4' style={{paddingTop : 25 ,
    displayv: "flex" , 
    justifyContent : "start"}}>Todo Entry</Typography>
    </div>
   
    )
}

export default TodoEntry;