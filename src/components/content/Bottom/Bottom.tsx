import React from 'react';
import {Grid, Typography} from "@mui/material";
import styles from './Bottom.module.scss'
import logo from './../../../assets/images/logo.png'
import visaCard from './../../../assets/images/visacard.png'
import masterCard from './../../../assets/images/mastercard.png'
import facebook from './../../../assets/images/facebook.png'
import viber from './../../../assets/images/viber.png'
import telegram from './../../../assets/images/telegram.png'
import whatsapp from './../../../assets/images/whatsapp.png'
import googlePlay from './../../../assets/images/googlePlay.png'
import appStore from './../../../assets/images/appStore.png'

const Bottom = () => {
    return (
        <>
        <Grid sx={{display: 'flex', width: '100%', justifyContent: 'center', background: '##FFFEFF', minHeight: '240px', alignItems: 'center', color: '#2F2B57', flexDirection: 'column'}}>
            <div className={styles.line}/>
            <Grid container sx={{maxWidth: '1350px', paddingTop: '45px', paddingBottom: '25px', paddingLeft: '15px', paddingRight: '15px'}}>
                <Grid sx={{paddingLeft: '10px', display: 'flex', flexDirection: 'column'}} className={styles.rightBottom} item lg={4} xs={12}>
                    <img src={logo} style={{width: '135px', marginLeft: '15px'}} className={styles.bottomLogo}/>
                    <Grid>
                        <img src={visaCard} style={{width: '70px', marginTop: '30px'}}/>
                        <img src={masterCard} style={{width: '70px', marginTop: '30px'}}/>
                    </Grid>
                    <Grid sx={{marginTop: '26px'}}>
                        <img src={facebook} style={{width: '39px', cursor: 'pointer'}}/>
                        <img src={viber} style={{width: '39px', cursor: 'pointer', marginLeft: '5px'}}/>
                        <img src={telegram} style={{width: '39px', cursor: 'pointer', marginLeft: '5px'}}/>
                        <img src={whatsapp} style={{width: '39px', cursor: 'pointer', marginLeft: '5px'}}/>
                    </Grid>
                </Grid>
                <Grid lg={4} xs={12} item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                    <Grid >
                        <Typography  className={styles.textCenter}>
                            Termeni şi condiţii
                        </Typography>
                        <Typography sx={{marginTop: '13px'}} className={styles.textCenter}>
                            Politica de securitate
                        </Typography>
                        <Typography sx={{marginTop: '13px'}} className={styles.textCenter}>
                            Întrebări frecvente
                        </Typography>
                        <Typography sx={{marginTop: '13px'}} className={styles.textCenter}>
                            Registrul cheilor publice
                        </Typography>

                    </Grid>
                </Grid>
                <Grid lg={4} xs={12} item sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}} className={styles.leftBottom}>
                    <Grid>
                        <Typography sx={{marginTop: '-15px', fontSize: '20px', fontWeight: 600}} className={styles.textContact}>
                            Contacte
                        </Typography>
                        <Typography sx={{marginTop: '15px'}} className={styles.textCenter}>
                            Moldova, Chișinău, str. Calea Ieșilor 10B,
                        </Typography>
                        <Typography sx={{font: 'Inter'}} className={styles.textCenter}>
                            MD-2069
                        </Typography>
                        <Typography sx={{marginTop: '15px'}} className={styles.textCenter}>
                            info@europarc.md
                        </Typography>
                        <Typography sx={{marginTop: '15px'}} className={styles.textCenter}>
                            09:00-16:00
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <div className={styles.line}/>
            <Grid container sx={{maxWidth: '1350px', paddingTop: '25px', paddingBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                    <Grid item xs={12} lg={6} sx={{display: 'flex', flexDirection: 'row'}} className={styles.bottomMApps}>
                        <img src={googlePlay} style={{height: '50px', width: '170px', cursor: 'pointer'}}/>
                        <img src={appStore} style={{height: '50px', width: '170px', marginLeft: '10px', cursor: 'pointer'}} className={styles.appStore}/>
                    </Grid>
                    <Grid sx={{display: 'flex', justifyContent: 'right'}} xs={12} lg={6} item  className={styles.bottomEuroparc}>
                        <Typography>© Europarc 2023</Typography>
                    </Grid>
            </Grid>
        </Grid>
        </>
    );
};

export default Bottom;
