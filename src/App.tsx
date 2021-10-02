import "./App.css";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Head from "./components/Head";
// import About from "./components/About";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDy5OwVes7kWSPyYB0_9l100Rr0rmAkf2s",
    authDomain: "pedrodev-f4d57.firebaseapp.com",
    projectId: "pedrodev-f4d57",
    storageBucket: "pedrodev-f4d57.appspot.com",
    messagingSenderId: "2404850739",
    appId: "1:2404850739:web:6918f9470561a5b58c9746",
};

function App() {
    const app = initializeApp(firebaseConfig);
    return (
        <div>
            <Head />
            <Hero />
            <Contact />
        </div>
    );
}

export default App;
