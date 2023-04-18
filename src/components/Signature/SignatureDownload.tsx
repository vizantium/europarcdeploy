import React, {useState} from 'react';
import {Button, Grid, Typography} from "@mui/material";
import styles from './Signature.module.scss'
import exportIcon from './../../assets/images/exporticon.png'
import download from './../../assets/images/download.png'
import edit from './../../assets/images/edit.png'
import end from './../../assets/images/end.png'
import unlock from './../../assets/images/unlock.png'
import vector1 from './../../assets/images/vector1.png'
import vector2 from './../../assets/images/vector2.png'
import vector3 from './../../assets/images/vector3.png'
import vector4 from './../../assets/images/vector4.png'
import uploadIcon from './../../assets/images/uploadIcon.png'
import showPDF from './../../assets/images/showpdf.png'
import deletePDF from './../../assets/images/deletedpf.png'
import downloadButton from './../../assets/images/downloadbutton.png'
import downloadIcon from './../../assets/images/downloadicon.png'
import {Link} from "react-router-dom";

function formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
        return '0';
    } else {
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Byte', 'КB', 'MB', 'GB', 'TB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}


const SignatureDownload = () => {
    const [files, setFiles] = useState<any[]>([])
    const handleChange = (event: any) => {
        setFiles([...files, {name: event.target.files[0].name, size: event.target.files[0].size}])
        console.log(files)
        console.log(event)
    }

    const deleteFile = (name: string) => {

    }

    return (
        <Grid className={styles.signatureMain}>
            <Grid container sx={{maxWidth: '1000px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Typography sx={{fontSize: '48px', fontWeight: 500, color: '#161D39', marginTop: '65px'}} className={styles.textH}>Descarcă</Typography>
                <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '65px'}}>
                    <Grid className={styles.eclipse}>
                        <img src={exportIcon} style={{width: '41px', height: '47px'}}/>
                    </Grid>
                    <img src={vector1} className={styles.vector}/>
                    <Grid className={styles.eclipse}>
                        <img src={unlock} style={{width: '39px', height: '47px'}}/>
                    </Grid>
                    <img src={vector2} className={styles.vector}/>
                    <Grid className={styles.eclipse}>
                        <img src={edit} style={{width: '42px', height: '48px'}}/>
                    </Grid>
                    <img src={vector3} className={styles.vector}/>
                    <Grid className={styles.eclipseSelected}>
                        <img src={download} style={{width: '41px', height: '47px'}}/>
                    </Grid>
                    <img src={vector4} className={styles.vector}/>
                    <Grid className={styles.eclipse}>
                        <img src={end} style={{width: '61px', height: '47px'}}/>
                    </Grid>
                </Grid>
                <Grid container className={styles.mainContainer}>
                    <Grid container sx={{background: '#F5FEDF', borderRadius: '11px', marginTop: '46px', maxWidth: '700px', display: 'flex', alignItems: 'center',
                        flexDirection: 'column', cursor: 'pointer'}}  className={styles.block}>
                        <Typography sx={{marginTop: '29px', color: '#161D39', fontWeight: 500, fontSize: '24px', lineHeight: '36px', letterSpacing: '0.06em'}} className={styles.select}>
                            Selectați sau trageți fișiere aici.
                        </Typography>
                        <img src={downloadButton} style={{width: '64px', marginTop: '32px'}} className={styles.selectLogo}/>
                    </Grid>
                    <Grid container sx={{maxWidth: '485px', marginTop: '40px'}} className={styles.downloadFiles}>
                        {/*{*/}
                        {/*    files && files.map((obj: any, index: number) => {*/}
                        {/*        return  <Grid container sx={{marginTop: '20px'}}>*/}
                        {/*            <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} key={index}>*/}
                        {/*                <Typography sx={{fontSize: '17px', color: '#8A91AD', fontWeight: 500, letterSpacing: '0.06em'}}>{obj.name}</Typography>*/}
                        {/*                <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>*/}
                        {/*                    <Typography sx={{fontSize: '18px', color: '#D554FE', fontWeight: 500, letterSpacing: '0.06em'}}>{formatBytes(obj.size)}</Typography>*/}
                        {/*                    <img src={showPDF} style={{width: '21px', height: '13px', marginLeft: '8px', cursor: 'pointer'}}/>*/}
                        {/*                    <img src={downloadIcon} style={{width: '28px', marginLeft: '8px', cursor: 'pointer'}} onClick={() => deleteFile(obj.name)}/>*/}
                        {/*                </Grid>*/}
                        {/*            </Grid>*/}
                        {/*            <div style={{height: '2px', background: '#6A6EE5', width: '100%', marginTop: '3px'}}/>*/}
                        {/*        </Grid>*/}

                        {/*    })*/}
                        {/*}*/}
                        <Grid container sx={{marginTop: '40px'}}>
                            <Grid container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <Typography sx={{fontSize: '18px', color: '#8A91AD', fontWeight: 500, letterSpacing: '0.06em'}} className={styles.objName}>ABC.pdf</Typography>
                                <Grid sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                    <Typography sx={{fontSize: '18px', color: '#D554FE', fontWeight: 500, letterSpacing: '0.06em'}} className={styles.objName}>0.15 MB</Typography>
                                    <img src={showPDF} style={{width: '21px', height: '13px', marginLeft: '8px'}}/>
                                    <img src={downloadIcon} style={{width: '28px', marginLeft: '8px'}}/>
                                </Grid>
                            </Grid>
                            <div style={{height: '2px', background: '#6A6EE5', width: '100%', marginTop: '3px'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Button component={Link} to={'/'} className={styles.signatureButton}>
                    Descarcă
                </Button>
            </Grid>
        </Grid>
    );
};

export default SignatureDownload;
