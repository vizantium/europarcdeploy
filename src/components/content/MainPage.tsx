import React from 'react';
// import Header from "./Header/Header";
import {Outlet} from "react-router-dom"
import Header from "./Header/Header";
import Bottom from "./Bottom/Bottom";
// import {Bottom} from "./Bottom/Bottom";
import styles from './MainPage.module.scss'
import googlePlay from "../../assets/images/googlePlay.png";
import appStore from "../../assets/images/appStore.png";
import {Grid} from "@mui/material";

const MainPage:React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
            <div>
                <div style={{width: '100%',zIndex: 9999}}>
                    <Header/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}} className={styles.outlet}>
                    <Outlet/>
                </div>
            </div>
            <div style={{marginTop: 'auto', display: 'flex'}}>
                <Bottom/>
                {/*<Grid sx={{display: 'flex', flexDirection: 'column'}} className={styles.bottomMAppsFull}>*/}
                {/*    <img src={googlePlay} style={{height: '50px', width: '170px', cursor: 'pointer'}}/>*/}
                {/*    <img src={appStore} style={{height: '50px', width: '170px', cursor: 'pointer', marginTop: '10px'}} className={styles.appStore}/>*/}
                {/*</Grid>*/}
            </div>
        </div>
    );
};

export default MainPage;
