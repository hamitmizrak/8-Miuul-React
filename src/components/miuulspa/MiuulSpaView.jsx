// React
import React, { useEffect, useState } from "react";

// Navigate
import { useNavigate, useParams } from "react-router-dom";

// İmage
import myViewPicture from "../../img/dünya.png";

// Api
import MiuulNodeJsMongoDbReactApi from "../../services/MiuulNodeJsMongoDbReactApi";

// FUNCTION
function CategoryView(props) {
  // REDIRECT
  let navigate = useNavigate();

  // STATE
  const [id, setId] = useState(null);
  const [miuulViewStateApi, setMiuulViewStateApi] = useState([]); //dikkat diziyi unutma

  // PARAMS (ID)
  const redirectHandlingViewId = useParams();

  // USE EFFECT
  useEffect(() => {
    // 1.YOL (ID)
    // setId(localStorage.getItem("category_view_id"));
    setId(redirectHandlingViewId.id); //2.YOL (ID)

    //FIND
    MiuulNodeJsMongoDbReactApi.miuulSpaApiFindById(redirectHandlingViewId.id)
      .then((response) => {
        console.log(response.data);
        setMiuulViewStateApi(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []); //end use effect

  /////////////////////////////////////////

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center display-3 mt-5">VIEW</h1>
      <div className="card text-center w-75">
        <img
          className="card-img-top w-50  ms-5 "
          src={myViewPicture}
          alt="Title"
        />
        <div className="card-body">
          <h4 className="card-title">{miuulViewStateApi._id}</h4>
          <p className="card-text">{miuulViewStateApi.title}</p>
          <p className="card-text">{miuulViewStateApi.counter}</p>
          <p className="card-text">{miuulViewStateApi.description}</p>
        </div>
      </div>
    </React.Fragment>
  ); //end return
} // end function

// EXPORT
export default CategoryView;
