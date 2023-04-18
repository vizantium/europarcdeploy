import React from 'react';
import styles from './NotFound.module.scss';
import {Grid, Typography} from "@mui/material";

const NotFound = () => {
    return (
        <Grid container className={styles.notFoundMain}>
            <Grid sx={{height: '100%', alignItems: 'center', display: 'flex'}}>
                <Typography sx={{fontSize: '80px'}}>Not Found</Typography>
            </Grid>
        </Grid>
    );
};

export default NotFound;
