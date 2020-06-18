import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../env'
import Paginate from './paginate/paginate.component'


function List() {

    const [totalPages,setTotalPages]=useState(0);
    const [currentPage,setCurrentPage]=useState(1);
    const [films,setFilms]=useState([]);

    let URL_PARTS=`v1/films?page=${currentPage}`;

    useEffect(()=>
    {
        axios.get(BASE_URL+URL_PARTS)
            .then(response=>
            {
                setFilms(response.data.data)
                setCurrentPage(response.data.meta.current_page)
                setTotalPages(response.data.meta.total)
            })
    },[currentPage]);

    const getCurrentPage=(page)=>
    {
        setCurrentPage(page)
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Films List</div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                <tr className="bg-success">
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Country</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    films.map((film,index)=>
                                        (<tr key={index}>
                                            <td>{film.id}</td>
                                            <td>{film.name}</td>
                                            <td>{film.description.substr(0,15)}...</td>
                                            <td>{film.price}</td>
                                            <td>{film.country}</td>
                                        </tr>))
                                }
                                </tbody>
                            </table>
                            <div className="text-center">
                                <Paginate total_pages={totalPages}
                                          currentPage={currentPage}
                                          getCurrentPage={getCurrentPage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default List;
