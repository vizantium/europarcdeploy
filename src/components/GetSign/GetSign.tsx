import React from 'react';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    Radio,
    RadioGroup,
    Typography
} from "@mui/material";
import styles from './GetSign.module.scss'
import {BootstrapInput} from "../Other/BootstrapInput";

const GetSign = () => {
    return (
        <Grid className={styles.getSignMain}>
            <Grid sx={{maxWidth: '580px', marginTop: '110px', paddingBottom: '140px'}} className={styles.getSignMainBlock}>
                <Typography sx={{color: '#161D39', fontSize: '48px', lineHeight: '72px', fontWeight: 500}} className={styles.getSignTitle}>Comandă semnătura</Typography>
                <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '30px'}}>
                    <Typography className={styles.nameInputs}>
                        IDNO/IDNP
                    </Typography>
                    <BootstrapInput type={'number'} fullWidth/>
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '20px'}}>
                    <Typography className={styles.nameInputs}>
                        Email
                    </Typography>
                    <BootstrapInput type={'email'} fullWidth/>
                </Grid>
                <Grid sx={{display: 'flex', alignItems: 'center', flexDirection: 'row', marginTop: '20px'}}>
                    <Typography className={styles.nameInputs}>
                        Telefon
                    </Typography>
                    <BootstrapInput type={'number'} defaultValue={'373'} fullWidth/>
                </Grid>
                <div className={styles.line} style={{marginTop: '45px'}}/>
                <FormControl sx={{marginTop: '30px'}} className={styles.formRadio}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="1"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel className={styles.radioText} value="1" control={<Radio sx={{
                            color: '#656AE5',
                            '&.Mui-checked': {
                                color: '#656AE5',
                            },
                        }}/>} label="Semnătură 1 an" />
                        <FormControlLabel className={styles.radioText} value="2" control={<Radio sx={{
                            color: '#656AE5',
                            '&.Mui-checked': {
                                color: '#656AE5',
                            },
                        }}/>} label="Semnătură 2 ani" />
                        <FormControlLabel className={styles.radioText} value="3" control={<Radio sx={{
                            color: '#656AE5',
                            '&.Mui-checked': {
                                color: '#656AE5',
                            },
                        }}/>} label="Semnătură 3 ani" />
                        <FormControlLabel className={styles.radioText} value="5" control={<Radio sx={{
                            color: '#656AE5',
                            '&.Mui-checked': {
                                color: '#656AE5',
                            },
                        }}/>} label="Semnătură 5 ani" />
                    </RadioGroup>
                </FormControl>
                <Grid sx={{display: 'flex', marginTop: '5px'}}>
                    <Typography sx={{fontWeight: 700, fontSize: '20px', letterSpacing: '0.06em', lineHeight: '30px'}} className={styles.price}>Preț:</Typography>
                    <Typography sx={{fontWeight: 700, fontSize: '20px', letterSpacing: '0.06em', lineHeight: '30px', marginLeft: '5px'}} className={styles.price}>100 MDL</Typography>
                </Grid>
                <div className={styles.line} style={{marginTop: '15px'}}/>
                <FormGroup sx={{marginTop: '55px', display: 'flex', justifyContent: 'left', alignItems: 'normal' }} className={styles.checkForm}>
                <FormControlLabel className={styles.radioText} control={<Checkbox sx={{
                    color: '#656AE5',
                    '&.Mui-checked': {
                        color: '#656AE5',
                    },
                }} defaultChecked />} label="Sunt Deacord cu regulamentul" />
                <FormControlLabel sx={{marginTop: '10px'}} className={styles.radioText} control={<Checkbox sx={{
                    color: '#656AE5',
                    '&.Mui-checked': {
                        color: '#656AE5',
                    },
                }} defaultChecked/>} label="Prelucrarea datelor cu caracter personal. Termeni si conditii" />
                </FormGroup>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', flexDirection: 'column'}}>
                    <Typography sx={{color: '#161D39', fontWeight: 600, fontSize: '20px', letterSpacing: '0.06em', marginBottom: '40px'}}>După comandarea semnăturii, veți fi apelat.</Typography>
                    <Button className={styles.buttonGetSign}>Comandă semnătură</Button>
                </Grid>
                {/*<Grid sx={{display: 'flex', justifyContent: 'space-between', marginTop: '20px'}}>*/}
                {/*    <Button className={styles.buttonGetSignB}>Nota informativă</Button>*/}
                {/*    <Button className={styles.buttonGetSignB}>Regulamentul prestatorului</Button>*/}
                {/*</Grid>*/}
            </Grid>
        </Grid>
    );
};

export default GetSign;
