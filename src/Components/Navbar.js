import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
      <>
        <nav class="navbar navbar-expand-md justify-content-center bg-dark navbar-dark">
            <div className="container"> 
                <Link className="navbar-brand" to="/">EduWorld <img src="https://e7.pngegg.com/pngimages/426/685/png-clipart-assorted-books-and-globe-illustration-student-textbook-make-science-fun-education-cartoon-books-books-cartoon-character-globe.png" width={20}></img>  </Link>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Course">
                                Courses Offered
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                About Us
                            </Link>
                        </li>                       
                    </ul>
                  </div>

            </div>
        </nav>
    

      </>          
    )
}

export default Navbar;