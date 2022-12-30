import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import Header from "../components/Header";
import Booking from "../components/Booking";
import Theater from "../components/Theater";
import App from "../App";

const AppRouter = () => {
    return (
        <div className="AppRouter">
            <Header />
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/movie/*" element={<MovieInfo />}></Route>
                <Route path="/booking" element={<Booking />}></Route>
                <Route path="/theater" element={<Theater />}></Route>
            </Routes>
        </div>
    );
};

export default AppRouter;