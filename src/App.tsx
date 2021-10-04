import "./App.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Head from "./components/Head";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import BackToTop from "./components/BackToTop";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import { Typography } from "@mui/material";

const firebaseConfig = {
    apiKey: "AIzaSyDy5OwVes7kWSPyYB0_9l100Rr0rmAkf2s",
    authDomain: "pedrodev-f4d57.firebaseapp.com",
    projectId: "pedrodev-f4d57",
    storageBucket: "pedrodev-f4d57.appspot.com",
    messagingSenderId: "2404850739",
    appId: "1:2404850739:web:6918f9470561a5b58c9746",
    measurementId: "G-3GYZLMB0BQ",
};

// Import the functions you need from the SDKs you need

function App() {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    return (
        <Router>
            <Head />
            <Switch>
                <Route exact path="/">
                    <Hero />
                    <Contact />
                </Route>
                <Route exact path="/projects">
                    <Typography variant="h3" fontWeight="200" textAlign="center" margin="1em">
                        This page still under development, come back later!
                    </Typography>
                    {/* <About /> */}
                    <Contact />
                </Route>
                <Route path="*">
                    <Typography variant="h3" fontWeight="200" textAlign="left" margin="1em">
                        404 - Nothing to see here...
                    </Typography>
                </Route>
            </Switch>
            <BackToTop />
        </Router>
    );
}

export default App;
