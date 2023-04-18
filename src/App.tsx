import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./components/content/MainPage";
import Home from "./components/Home/Home";
import {ThemeProvider} from "@mui/material";
import {theme} from "./components/Other/theme";
import Signature from "./components/Signature/Signature";
import SignatureAuthentication from "./components/Signature/SignatureAuthentication";
import SignatureDownload from "./components/Signature/SignatureDownload";
import Contacts from "./components/Contacts/Contacts";
import Documentation from "./components/Documentation/Documentation";
import GetSign from "./components/GetSign/GetSign";
import NotFound from "./components/content/NotFound/NotFound";
import Verification from "./components/Verification/Verification";
import VerificationResult from "./components/Verification/VerificationResult";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}>
                    <Route path={''} element={
                        <Home/>
                    }/>
                    <Route path={'Signature/Sign'} element={
                        <Signature/>
                    }/>
                    <Route path={'Signature/Authentication'} element={
                        <SignatureAuthentication/>
                    }/>
                    <Route path={'Signature/Download'} element={
                        <SignatureDownload/>
                    }/>
                    <Route path={'Contacts'} element={
                        <Contacts/>
                    }/>
                    <Route path={'Documentation'} element={
                        <Documentation/>
                    }/>
                    <Route path={'GetSign'} element={
                        <GetSign/>
                    }/>
                    <Route path={'Verification/Upload'} element={
                        <Verification/>
                    }/>
                    <Route path={'Verification/Result'} element={
                        <VerificationResult/>
                    }/>
                    <Route path="*" element={
                        <NotFound/>
                    } />
                </Route>
            </Routes>
        </ThemeProvider>
    );
}

export default App;
