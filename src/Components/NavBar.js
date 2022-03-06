import React from 'react';
import { AppBar, Toolbar, IconButton, Grid, Typography } from '@material-ui/core';
import { Link as NavLink } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import { navBarStyles } from '../assets/styles/sharedStyles';

function NavBar() {
    const classes = navBarStyles();

    return (
      <div className={classes.container}>
        <AppBar className={classes.navBar}>
          <Toolbar>
            <IconButton className={classes.home} component={NavLink} to="/">
              <HomeOutlinedIcon className={classes.homeBtn} />
              Home
            </IconButton>
            <IconButton className={classes.btn} component={NavLink} to="/random">
              <ShuffleOutlinedIcon className={classes.homeBtn} />
              Random Meal
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
}

export default NavBar;