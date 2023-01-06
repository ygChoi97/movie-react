import React from "react";
import { Route, Routes } from "react-router-dom";
import NavMovie from "../components/NavMovie";
import Header from "../components/Header";
import Booking from "../components/Booking";
import Theater from "../components/Theater";
import App from "../App";
import MovieDetail from "../components/MovieDetail";
import SlickEx from "..//components/SlickEx";
import Join from "../components/Join";
import Signin from "../components/Signin";

const AppRouter = () => {
    return (
        <div className="AppRouter" style={{}}>
            <Header />
            <Routes>
                <Route path="/" element={<SlickEx />} />
                <Route path="/regdb" element={<App />} />
                <Route path="/join" element={<Join />}></Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/movie/*" element={<NavMovie />}></Route>
                <Route path="/movie-detail/*" element={<MovieDetail />}></Route>
                <Route path="/booking" element={<Booking />}></Route>
                <Route path="/theater" element={<Theater />}></Route>
            </Routes>
        </div>
    );
};

export default AppRouter;