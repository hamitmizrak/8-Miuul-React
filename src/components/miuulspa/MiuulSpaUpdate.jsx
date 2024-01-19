//MiuulSpaUpdate
// REACT
import React, { useEffect, useState } from "react";

// NAVIGATE
import { useNavigate,useParams } from "react-router-dom";

// REGISTER
import MiuulNodeJsMongoDbReactApi from "../../services/MiuulNodeJsMongoDbReactApi";

// FUNCTION REGISTER
export default function MiuulSpaUpdate(props) {

  // REDIRECT
  const navigate = useNavigate();

  // STATE
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [counter, setCounter] = useState(null);

  // STATE ID
  const [miuulSpaId, setMiuulSpaId] = useState(null);

  // PARAMS
  const updateParamsMiuulSpaId = useParams();

    // USE EFFECT
    useEffect(() => {

      // Params ID
      setMiuulSpaId(updateParamsMiuulSpaId.id)
   
      // FIND
      MiuulNodeJsMongoDbReactApi.miuulSpaApiFindById(updateParamsMiuulSpaId.id)
        .then((response) => {
          if (response.status === 200) {
            console.log(response);
            setTitle(response.data.title);
            setDescription(response.data.description)
            setCounter(response.data.counter)
          } else
            Promise.reject()
        })
        .catch((err) => {
          console.error(err)
        })
    }, [])

  // OnChange
  const titleOnChange = (event) => {
    const { name, value } = event.target;
    setTitle(value);
  };

  const descriptionOnChange = (event) => {
    const { name, value } = event.target;
    setDescription(value);
  };

  const counterOnChange = (event) => {
    const { name, value } = event.target;
    setCounter(value);
  };

  // onSubmitSearch
  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  // SUBMIT
  // miuulSpaUpdateSubmit
  const miuulSpaUpdateSubmit = async (event) => {
    alert("ID: "+updateParamsMiuulSpaId.id)
    //miuulCreateObject
    const miuulCreateObject = {
      title,
      description,
      counter,
    };
    //console.log(miuulCreateObject);

    // API
    try {
      const response = await MiuulNodeJsMongoDbReactApi.miuulSpaApiUpdate(
        updateParamsMiuulSpaId.id,miuulCreateObject);
      if (response.status == 200) {
        // Toast Message
        alert("Kayıt Güncellendi");
        navigate("/miuul/spa/list");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // RETURN
  return (
    <React.Fragment>
      <h1 className="mt-5">SPA UPDATE</h1>
      <div
        class="alert alert-primary"
        role="alert"
      >
        <strong>ID</strong> {updateParamsMiuulSpaId.id}
        {/* <strong>ID</strong> {miuulSpaId} */}
      </div>
      
      <form onSubmit={onSubmitForm}>
        {/* <form onSubmit="event.preventDefault()"> */}
        <div className="d-grid gap-4">
          {/* TITLE */}
          <div className="form-group">
            <label htmlFor="title"> TITLE</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title Giriniz"
              autoFocus={true}
              required={true}
              // onChange={titleOnChange}
              onChange={(event) => {
                const { name, value } = event.target;
                setTitle(event.target.value);
              }}
              value={title}
            />
          </div>

          {/* description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Description"
              autoFocus={false}
              required={true}
              onChange={descriptionOnChange}
              value={description}
            />
          </div>

          {/* Counter */}
          <div className="form-group">
            <label htmlFor="counter">Counter</label>
            <input
              type="text"
              className="form-control"
              id="counter"
              name="counter"
              placeholder="Counter"
              autoFocus={false}
              required={true}
              onChange={counterOnChange}
              value={counter}
            />
          </div>

          {/* RESET */}
          <button type="reset" className="btn btn-danger mt-2 me-2">
            Temizle
          </button>

          {/* SUBMIT   */}
          <button
            type="submit"
            onClick={miuulSpaUpdateSubmit}
            className="btn btn-primary mt-2 me-2"
          >
            Gönder
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
