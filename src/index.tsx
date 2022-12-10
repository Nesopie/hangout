import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantOwnerPage from "./pages/RestaurantOwnerPage";
import RestaurantEditPage from "./pages/RestaurantEditPage";

import "./index.css";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Routes>
                <Route
                    path="/"
                    element={<RestaurantOwnerPage />}
                />
                <Route
                    path="/edit"
                    element={<RestaurantEditPage />}
                />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
