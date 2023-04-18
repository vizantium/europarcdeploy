import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import styles from "./Contacts.module.scss";
import phone from './../../assets/images/phone.png'
import email from './../../assets/images/email.png'
import {Link} from "react-router-dom";

const Contacts = () => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <Grid className={styles.contactsMain}>
            <Grid container className={styles.contactBlock}>
                <Grid sx={{height: '100%'}} lg={6}  xs={12} item className={styles.inputBlock}>
                    <Typography sx={{fontSize: '46px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.01em'}} className={styles.titleContact}>Scrie-ne</Typography>
                    <Typography sx={{fontSize: '14px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.01em', marginTop: '28px'}}>Echipa Europarc o sa va raspunda in cel mai scurt timp</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField className={styles.inputs} required sx={{marginTop: '100px'}} id="standard-basic" label="Nume Prenume" variant="standard" fullWidth />
                        <TextField required sx={{marginTop: '18px'}} id="standard-basic" label="Contact Phone" variant="standard" type={'number'} fullWidth />
                        <TextField required sx={{marginTop: '18px'}} id="standard-basic" label="E-mail" variant="standard" fullWidth type={'email'}/>
                        <TextField required sx={{marginTop: '18px'}} id="standard-basic" label="Scrie ceva" variant="standard" fullWidth />
                        <Button type={'submit'} fullWidth className={styles.contactButton}>Submit</Button>
                    </form>
                    <Grid sx={{display: 'flex', alignItems: 'center', marginTop: '90px'}}  className={styles.contactInfo}>
                       <Grid sx={{display: 'flex', alignItems: 'center', textDecoration: 'none'}} component={Link} to={'tel:+37378655333'}>
                           <img className={styles.image} src={phone}/>
                           <Grid sx={{marginRight: '60px'}}>
                               <Typography className={styles.textInfo}>Phone</Typography>
                               <Typography className={styles.textInfo}>+373 000 000</Typography>
                           </Grid>
                       </Grid>
                        <Grid sx={{display: 'flex', alignItems: 'center', textDecoration: 'none'}} component={Link} to={'mailto:support@europarc.com'} className={styles.contactInfoEmail}>
                            <img className={styles.image} src={email}/>
                            <Grid>
                                <Typography className={styles.textInfo}>E-MAIL</Typography>
                                <Typography sx={{fontSize: '13px', fontWeight: 400, letterSpacing: '0.02em', color: '#656AE5', cursor: 'pointer'}}>support@europarc.com</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid lg ={1} xs={12}/>
                <Grid lg={5}  xs={12} item>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.9140354107167!2d28.798954164968837!3d47.04191763774146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d925542931d%3A0x161bdee6820ed57c!2zQWN2aWxhLCBDYWxlYSBJZcWfaWxvciwgQ2hpyJlpbsSDdSwgTW9sZG92YQ!5e0!3m2!1sen!2s!4v1679061760794!5m2!1sen!2s"
                        width="600" height="450" style={{border: '0px', maxWidth: '463px', height: '644px'}} allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" className={styles.map}></iframe>
                    {/*<Grid sx={{display: 'flex'}}>*/}
                    {/*    <Typography sx={{fontSize: '13px', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.01em', color: '#656AE5'}}>*/}
                    {/*        Europarc SRL,*/}
                    {/*    </Typography>*/}
                    {/*    <Typography sx={{fontSize: '13px', fontWeight: 400, lineHeight: '24px', letterSpacing: '0.01em', color: '#656AE5', marginLeft: '10px'}}>*/}
                    {/*        Calea Iesilor*/}
                    {/*        10B*/}
                    {/*    </Typography>*/}
                    {/*</Grid>*/}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contacts;
