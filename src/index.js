// REACT JS
import React from 'react';

// REACT DOM
import ReactDOM from 'react-dom/client';

// External Css
import './index.css';

// reportWebVitals
import reportWebVitals from './reportWebVitals';

// Component
import _1_Style from './compontents/_1_Style/Style';
import JsxTutorials from './compontents/_2_Jsx/JsxTutorials';
import MyClassComponent from './compontents/_3_ClassComponet/MyClassComponent';

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <_1_Style />  */}
    {/* <JsxTutorials /> */}
    <MyClassComponent companyName="Miuul" />
  </React.StrictMode>
);

reportWebVitals();
