import "./App.css";
import { firebaseConfig } from "./config/firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Hero, Contact, Header, About, Footer, BackToTop } from "./pages";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { Typography } from "@mui/material";

function App() {
    const app = initializeApp(firebaseConfig);
    getAnalytics(app);
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Hero />
                    <Contact />
                </Route>
                <Route path="/projects">
                    <About />
                    <Contact />
                </Route>
                <Route path="*">
                    <Typography variant="h3" fontWeight="200" textAlign="left" margin="1em">
                        404 - Nothing to see here...
                    </Typography>
                </Route>
            </Switch>
            <Footer />
            <BackToTop />
        </Router>
    );
}

export default App;
