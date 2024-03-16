import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Header = ({ isLoggedIn=false, onLogout, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    console.log("Logout button clicked");
    onLogout();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary-subtle">
      <div className="container-fluid justify-content-between">
        <Link className="navbar-brand" to="/">CRUD</Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
            value={searchTerm} onChange={handleSearchChange}/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          {isLoggedIn && (
            <button className="btn btn-danger ms-3" onClick={handleLogout}>
              Logout
            </button>
          )}
        {/* </div> */}
      </div>
    </nav>
  );
};
