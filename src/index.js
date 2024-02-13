/*!

=========================================================
* Now UI Kit PRO React - v1.5.2
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2023 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages
import Presentation from "views/Presentation.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/presentation" element={<Presentation />} />
      <Route path="*" element={<Navigate to="/presentation" replace />} />
    </Routes>
  </BrowserRouter>
);
