// REACT JS
import React from "react";

// REACT DOM
import ReactDOM from "react-dom/client";

// External Css
import "./index.css";

// reportWebVitals
import reportWebVitals from "./reportWebVitals";

// ROUTER
import { BrowserRouter } from "react-router-dom";
import MyRouterMiuul from "./compontents/_6_RouterComponent/MyRouterMiuul";
//import MyContextApp from "./compontents/_5_ContentComponent/MyContextApp.jsx";

// Component
// import _1_Style from './compontents/_1_Style/Style';
//  import JsxTutorials from './compontents/_2_Jsx/JsxTutorials';
//  import MyClassComponent from './compontents/_3_ClassComponet/MyClassComponent.jsx';
//  import MyFunctionComponent from './compontents/_4_FunctionComponent/_1_MyFunctionComponent';
//  import MyFunctionMiuulCounter from './compontents/_4_FunctionComponent/_2_MyFunctionUseState';
// import MyFunctionUseEffect from './compontents/_4_FunctionComponent/_3_MyFunctionUseEffect';
// import ReducerCounterMiuul from "./compontents/_4_FunctionComponent/_4_MyFunctionReducer.jsx";

// ROOT
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <_1_Style />  */}

    {/* <JsxTutorials /> */}

    {/* <MyClassComponent companyName="Miuul" /> */}

    {/* <MyFunctionComponent 
    companyName="Miuul" 
    content="Function Component Data" 
    /> */}

    {/* <MyFunctionMiuulCounter /> */}

    {/* <MyFunctionUseEffect/> */}

    {/* <ReducerCounterMiuul /> */}

    {/* <MyContextApp/> */}

    <BrowserRouter>
       <MyRouterMiuul/>
    </BrowserRouter>
  
  </React.StrictMode>
);

reportWebVitals();
