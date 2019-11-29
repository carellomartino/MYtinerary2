import React from "react";
import gif from "../../assets/loading.gif";
import "./SearchCitiesComponentStyle.css";
import { Link } from "react-router-dom";

const SearchCitiesComponent = ({ onChange, data, cityNotFound }) => {
  return (
    <div>
      {console.log("soy data", data)}
      <h1 className="noLink5">Search for a City</h1>
      <label htmlFor="filter"></label>
      <input
        type="text"
        id="filter"
        onChange={onChange}
        placeholder="Type a city here..."
      />

      <div className="container">
        <div className="row justify-content-center">
          {data.ciudadesFromRoutes ? (
            !cityNotFound ? (
              data.ciudadesFromRoutes.map((item, i) => (
                <div
                  key={i}
                  className="col-xl-4 col-lg-4 col-md-12 col-sm-12 marg2"
                >
                  <Link to={`/cities/${item.title}`}>
                    <p className="noLink p">{item.name}</p>
                    <p className="noLink2 p">({item.country.toUpperCase()})</p>
                    <img className={"marg"} src={item.image} alt="" />
                  </Link>
                  <hr />
                </div>
              ))
            ) : (
              <h2>We could not found any city that matches your description. Would you like to <Link to={'/add-city'}><span className={"red"}>add the city to our database?</span></Link></h2>
            )
          ) : (
            <div className="flexCont">
              <img className="loading" src={gif} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCitiesComponent;
