// Router Import
import { Navigate, Link, Route, Routes } from "react-router-dom";

// rcc
import React, { Component } from "react";
import MiuulHeader from "./components/MiuulHeader";
// import MiuulFooter from "./components/MiuulFooter";
import MiuulMain from "./components/MiuulMain";
import MiuulSpaCreate from "./components/miuulspa/MiuulSpaCreate";
import MiuulSpaList from "./components/miuulspa/MiuulSpaList";
import MiuulSpaView from "./components/miuulspa/MiuulSpaView";
import MiuulSpaUpdate from "./components/miuulspa/MiuulSpaUpdate";

class MiuulReactRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <MiuulHeader logo="Miuul Logo" />

        <div className="container mb-5">
          <Routes>
            <Route path={"/"} element={<MiuulMain />} />
            <Route path={"/index"} element={<MiuulMain />} />

            <Route path={"/miuul/spa/list"} element={<MiuulSpaList />} />
            <Route path={"/miuul/spa/create"} element={<MiuulSpaCreate />} />
            <Route path={"/miuul/spa/view/:id"} element={<MiuulSpaView />} />
            <Route path={"/miuul/spa/update/:id"} element={<MiuulSpaUpdate />}
            />

            <Route path={"*"} element={<Navigate to={"/"} />} />
          </Routes>
        </div>

        {/* <MiuulFooter copy="Miuul Footer"/> */}
      </React.Fragment>
    );
  }
}

//EXPORT
export default MiuulReactRouter;
