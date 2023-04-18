import React, {useState} from 'react';
import {AppBar, Button, Grid, Menu, MenuItem, Typography} from "@mui/material";
import logo from './../../../assets/images/logo.png';
import {Link} from "react-router-dom";
import styles from './header.module.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import number from './../../../assets/images/number.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [language, setLanguage] = useState('RO')
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [languageSelected, setLanguageSelected] = useState('RO')

    function handleClick(event: any) {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    const setIsOpenMenuHandler = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    function handleClose() {
        setAnchorEl(null);
    }

    const handleChangeLang = (lang: string) => {
        setAnchorEl(null);
        setLanguage(lang)
    }

    return (
        <>
            <AppBar className={styles.appBar} sx={{background: '#FFFEFF', height: '115px', display: 'flex', alignItems: 'center', width: '100%'}} >
                <Grid className={styles.headerPC} sx={{maxWidth: '1450px', padding: '0px 15px'}} container>
                    <Grid md={2} item>
                        <Link to={'/'}>
                            <img style={{height: '84px', marginTop: '10px', paddingLeft: '10px', cursor: 'pointer'}} src={logo}/>
                        </Link>
                    </Grid>
                    <Grid md={1}>
                    </Grid>
                    <Grid md={3.5} item sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', color: '#2F2B57'}}>
                        <Grid>
                            <Typography sx={{color: '#161D39'}} component={Link} to={'/Signature/Sign'}
                                        className={styles.headerTypography}>
                                Semnează
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{color: '#161D39'}} component={Link} to={'/Verification/Upload'}
                                        className={styles.headerTypography}>
                                Verifica
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography sx={{color: '#161D39'}} component={Link} to={'/GetSign'}
                                        className={styles.headerTypography}>
                                Obține semnătură
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid md={1}>
                    </Grid>
                    <Grid md={4.5} item sx={{display: 'flex', alignItems: 'center', color: '#161D39', justifyContent: 'right'}} >
                        <Grid sx={{display: 'flex', marginTop: '2px', marginRight: '30px'}}>
                           <Typography onClick={() => setLanguageSelected('RO')}
                               sx={{color: '#2F2B57',
                                        fontWeight: 600,
                                        fontSize: '17px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RO' ? '65%' : '100%'}`}}>RO</Typography>
                           <Typography onClick={() => setLanguageSelected('RU')}
                               sx={{color: '#2F2B57',
                                        fontWeight: 600,
                                        fontSize: '17px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RU' ? '65%' : '100%'}`}}>RU</Typography>
                           <Typography onClick={() => setLanguageSelected('EN')}
                               sx={{color: '#2F2B57',
                                        fontWeight: 600,
                                        fontSize: '17px', marginRight: '10px', cursor:'pointer', opacity: `${languageSelected === 'EN' ? '65%' : '100%'}`}}>EN</Typography>
                        </Grid>
                        <Grid component={Link} to={'tel:+37378655333'} sx={{marginRight: '40px', display: 'flex', cursor: 'pointer', textDecoration: 'none'}}>
                            <img style={{width: '24px'}} src={number}/>
                            <Link style={{fontWeight: 500, fontSize: '14px', textDecoration: 'none', color: '#161D39', marginTop: '2px'}} to={'tel:+37378655333'}>+373 78 655 333</Link>
                        </Grid>
                        <Grid>
                            <Button sx={{width: '174px', height: '50px'}} component={Link} to={'/'} className={styles.button}>
                               Autentificare
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={styles.headerMob} container>
                    <Grid>
                        <Grid sx={{marginTop: '-2px', marginLeft: '5px'}}  onClick={setIsOpenMenuHandler}>
                            <Hamburger color={'black'} toggled={isOpenMenu}/>
                        </Grid>
                        {/*<MenuIcon sx={{color: 'black', marginTop: '4px', marginLeft: '5px'}} onClick={setIsOpenMenuHandler} fontSize={'large'}/>*/}
                    </Grid>
                    <Grid sx={{display: 'flex', alignItems: 'center'}}>
                        <Grid sx={{display: 'flex', cursor: 'pointer', textDecoration: 'none'}} component={Link} to={'tel:+37378655333'} className={styles.headerNumber}>
                            <img style={{width: '20px', height: '22px'}} src={number}/>
                            <Typography sx={{fontWeight: 500, fontSize: '14px', color: '#161D39'}}>+373 78 655 333</Typography>
                        </Grid>
                        <Grid sx={{display: 'flex'}}>
                            <Grid sx={{display: 'flex', marginTop: '6px', marginLeft: '5px'}}>
                                <Typography onClick={() => setLanguageSelected('RO')}
                                            sx={{color: '#2F2B57',
                                                fontWeight: 600,
                                                fontSize: '15px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RO' ? '65%' : '100%'}`}}>RO</Typography>
                                <Typography onClick={() => setLanguageSelected('RU')}
                                            sx={{color: '#2F2B57',
                                                fontWeight: 600,
                                                fontSize: '15px', marginRight: '5px', cursor:'pointer', opacity: `${languageSelected === 'RU' ? '65%' : '100%'}`}}>RU</Typography>
                                <Typography onClick={() => setLanguageSelected('EN')}
                                            sx={{color: '#2F2B57',
                                                fontWeight: 600,
                                                fontSize: '15px', marginRight: '10px', cursor:'pointer', opacity: `${languageSelected === 'EN' ? '65%' : '100%'}`}}>EN</Typography>
                            </Grid>
                            <Button  component={Link} to={'/'} className={styles.button}>
                                Autentificare
                            </Button>
                        </Grid>
                    </Grid>
                    {
                        <Grid className={isOpenMenu ? styles.headerMenuActive : styles.headerMenu}>
                            <Typography sx={{borderTop: '1px solid #D3D3D3'}} className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/'}>Acasa</Typography>
                            <Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/Signature/Sign'}>Semnează</Typography>
                            <Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/Verification/Upload'}>Verifica</Typography>
                            <Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/GetSign'}>Obține semnătură</Typography>
                            {/*<Typography className={styles.headerItems} onClick={() => setIsOpenMenu(false)} component={Link} to={'/Authentication'}>Autentificare</Typography>*/}
                        </Grid>
                    }
                </Grid>
            </AppBar>

        </>
        );
};

export default Header;
