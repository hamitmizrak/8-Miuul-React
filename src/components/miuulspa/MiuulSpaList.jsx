// rfce
// REACT
import React, { useEffect, useState } from 'react'

// LINK
import {Link, useNavigate} from 'react-router-dom'

import MiuulNodeJsMongoDbReactApi from '../../services/MiuulNodeJsMongoDbReactApi';

//Function
export default function MiuulSpaList(props) {

  
    // REDIRECT
    let navigate = useNavigate();

    // STATE
    const [miuulSpaApiList, setMiuulSpaApiList] = useState([]); //unutma diziyi yaz

    // EFFECT
    useEffect(() => {
        //2.YOL
        fetchMiuulSpa();
    }, []) //end useEffect

    // Fetch users from API
    const fetchMiuulSpa = async () => {
        try {
            const response = await MiuulNodeJsMongoDbReactApi.miuulSpaApiList();   //fetch('https://api.example.com/users');
            setMiuulSpaApiList(response.data)
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // FUNCTION
    // LIST AFTER LOADING
    const miuulSpaListManipulationAfter = () => {
      MiuulNodeJsMongoDbReactApi.miuulSpaApiList()
            .then(
                (response) => {
                    console.log(response);
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.headers);
                    if (response.status === 200) {
                        setMiuulSpaApiList(response.data)
                    }
                }
            )
            .catch((err) => {
                console.log(err);
            });
    }

    ////////////////////////////
    // CRUD
    // REGISTER UPDATE
    const miuulSpaSetUpdate = (data) => {
        // 1.YOL (id useParams)
        // 2.YOL (localStorage)
        let { id } = data
        localStorage.setItem("miuul_spa_update_id", id)
    }

    // REGISTER VIEW
    const miuulSpaSetView = (id) => {
        // 1.YOL (id useParams)
        // 2.YOL (localStorage)
        localStorage.setItem("miuul_spa_view_id", id)
    }

    //REGISTER DELETE
    const miuulSpaSetDelete = (id) => {
        if (window.confirm(id + " silmek istiyor musunuz ?")) {
            // 1.YOL
            MiuulNodeJsMongoDbReactApi.miuulSpaApiDeleteById(id)
                .then((response) => {
                    if (response.status === 200) {
                        miuulSpaListManipulationAfter();
                        navigate('/miuul/spa/list')
                    }
                })
                .catch((err) => {
                    console.error(err);
                    navigate('/miuul/spa/list')
                });
        } else {
            alert(id + " nolu data silinmedi !!!");
            window.location = "/miuul/spa/list"
        }
        
    }

  return (
    <div style={{marginTop:"2rem"}}>
               <br /><br /><br /><br />
            <h1 className="text-center display-5 mb-5">SPA LIST</h1>
            <Link className='btn btn-primary me-2' to="/miuul/spa/create">SPA CREATE</Link>
            <table className='table table-striped table-responsive mb-5'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>COUNTER</th>
                    <th>DATE</th>
                    <th>UPDATE</th>
                    <th>SHOW</th>
                    <th>DELETE</th>
                </tr>
                </thead>
                <tbody>
                {
                            
                    miuulSpaApiList.map((data) =>
                        <tr key={data._id}>
                            <td>{data._id}</td>
                            <td>{data.title}</td>
                            <td>{data.description}</td>
                            <td>{data.counter}</td>
                            <td>{data.createdDate}</td>
                            <td>
                                <Link to={`/miuul/spa/update/${data._id}`}>
                                    <i onClick={() => miuulSpaSetUpdate(data)} className="fa-solid fa-pen-nib text-primary"></i>
                                </Link>
                            </td>
                            <td>
                                <Link to={`/miuul/spa/view/${data._id}`}>
                                    <i onClick={() => miuulSpaSetView(data._id)} className="fa-solid fa-eye text-secondary"></i>
                                </Link>
                            </td>
                            <td>
                                <Link>
                                    <i onClick={() => miuulSpaSetDelete(data._id)} className="fa-solid fa-trash text-danger"></i>
                                </Link>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
      </div>
  )
}
