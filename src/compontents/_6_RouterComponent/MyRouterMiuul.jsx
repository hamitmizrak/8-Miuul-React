// Router Import
import { Link, Route, Routes } from "react-router-dom";

// HomeMiuul
function HomeMiuul() {
  return (
    <div>
      <h2>Anasayfa</h2>
      <Link className="btn btn-primary me-2" to="/">
        Anasayfa
      </Link>
      <Link className="btn btn-primary" to="/about">
        about
      </Link>
    </div>
  );
}

// HomeAbout
function AboutMiuul() {
  return <h2>Hakkımızda</h2>;
}

//
function MyRouterMiuul() {
  return (
    <Routes>
      <Route path={"/"} element={<HomeMiuul />} />
      <Route path={"/about"} element={<AboutMiuul />} />
    </Routes>
  );
} //end MyRouterMiuul

// Export
export default MyRouterMiuul;
