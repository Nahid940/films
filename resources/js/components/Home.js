import React from 'react';
import {Link} from 'react-router-dom'
function Home() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-success"><h2>Films</h2></div>
                        <div className="card-body">
                            <h4 className="text-primary">Film Archives</h4>
                            <p>-> Go to <Link to="/films"><strong>Films</strong> </Link> menu to see all the films list</p>
                            <p>-> Go to <Link to="/films/create"><strong>Add New</strong></Link> menu to add new film</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;



