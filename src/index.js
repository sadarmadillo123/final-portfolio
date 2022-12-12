import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import reportWebVitals from "./reportWebVitals";
import Home from "./routes/Home";
import Project1 from "./routes/Project1";
import Project2 from "./routes/Project2";
import Project3 from "./routes/Project3";
import Project4 from "./routes/Project4";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "project1/",
    element: <Project1 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "project2/",
    element: <Project2 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "project3/",
    element: <Project3 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "project4/",
    element: <Project4 />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
