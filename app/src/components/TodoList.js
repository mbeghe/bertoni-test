import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';
import { Delete, Create } from '@material-ui/icons'
import axios from 'axios';

function TodoList() {
    const [data, setData] = useState([]);
    
    const handleDelete = async (id) => {
        const result = await axios.delete(`http://localhost:3000/tasks/${id}`);
    }

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(
          'http://localhost:3000/tasks',
        );
        
        const tasks = await result.data;
        console.log(tasks);
        setData(tasks);
      };
   
      fetchData();
    }, [setData]);

    return(
        <Paper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Task</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { data != null ? 
                        data.map((item, ix) => {
                            return(
                                <TableRow key={ix}>
                                    <TableCell>{item.task}</TableCell>
                                    <TableCell align="right">
                                        <IconButton
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            <Delete color="error"/>
                                        </IconButton>
                                        <IconButton>
                                            <Create/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            );
                            
                        }) :
                        <TableRow>
                            <TableCell>No data</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </Paper>
    );
}

export default TodoList;