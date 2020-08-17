import React from 'react';
import { Grid, IconButton, InputBase, Paper } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <Grid container justify="center" spacing={4}>
      <Grid item xs={10}>
        <Paper component="form" >
          <IconButton aria-label="menu">
            <Add />
          </IconButton>
          <InputBase
            placeholder="Add task"
          />
        </Paper>
      </Grid>
      <Grid item xs={10}>
        <TodoList/>
      </Grid>
    </Grid>
  );
}
 
export default App;
