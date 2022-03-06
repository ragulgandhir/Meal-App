import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import MealGrid from './MealGrid';
import { textStyles } from '../../assets/styles/sharedStyles';

function Home() {
    const classes = textStyles();

    return (
        <>
            <Grid container>
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            <MealGrid/>
        </>
    )
}

export default Home;