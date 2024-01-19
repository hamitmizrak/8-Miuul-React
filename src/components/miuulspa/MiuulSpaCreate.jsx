// REACT
import React, { useEffect, useState } from 'react'

// NAVIGATE
import { useNavigate } from 'react-router-dom'

// REGISTER
import MiuulNodeJsMongoDbReactApi from '../../services/MiuulNodeJsMongoDbReactApi';


// FUNcTION REGISTER
export default  function MiuulSpaCreate(props) {

  // REDIRECT
  const navigate = useNavigate();

  // STATE
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [counter, setCounter] = useState(null);

  // OnChange
  const titleOnChange = (event) => {
    const { name, value } = event.target;
    setTitle(value);
  }

  const descriptionOnChange = (event) => {
    const { name, value } = event.target;
    setDescription(value);
   }

   const counterOnChange = (event) => {
    const { name, value } = event.target;
    setCounter(value);
   }

  // onSubmitSearch
  const onSubmitForm = (e) => {
    e.preventDefault();
  }

  // SUBMIT
  // miuulSpaCreateSubmit
  const miuulSpaCreateSubmit = async (event) => {
    //miuulCreateObject
    const miuulCreateObject = {
      title,
      description,
      counter
    }
    //console.log(miuulCreateObject);

    // API
    try {
      const response = await MiuulNodeJsMongoDbReactApi.miuulSpaApiCreate(miuulCreateObject);
      if (response.status == 200) {
        // Toast Message
        alert("Kayıt Başarılı");
        navigate('/miuul/spa/list');
      }
    } catch (err) {
     console.log(err);
    }
  }

  // RETURN
  return (
    <React.Fragment>
      <h1 className="mt-5">SPA CREATE</h1>
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
              onChange={
                (event) => {
                  const { name, value } = event.target;
                  setTitle(event.target.value);
                }
              }
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
            />
          </div>

             {/* Counter */}
             <div className="form-group"><label htmlFor="counter">Counter</label>
            <input
              type="text"
              className="form-control"
              id="counter"
              name="counter"
              placeholder="Counter"
              autoFocus={false}
              required={true}
              onChange={counterOnChange}
            />
          </div>

        {/* RESET */}
        <button
          type='reset'
          className="btn btn-danger mt-2 me-2">Temizle</button>

        {/* SUBMIT   */}
        <button
          type='submit'
          onClick={miuulSpaCreateSubmit}
          className="btn btn-primary mt-2 me-2">
         Gönder
        </button>
        </div>
      </form>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </React.Fragment>
  ) 
}

