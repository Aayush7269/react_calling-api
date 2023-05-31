import React, { useState } from "react";
import { CustomCard } from "./CustomCard";
import axios from "axios";
import { fetchData } from "../Helper/axiosHelper";

export const SearchForm = ({ adToList }) => {
  const [form, setForm] = useState("");
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);

  // 1. get the data for the form on change

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setForm(value);
  };
  // 2. on form subnit , use the searched data to call the api

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    //call the api
    const data = await fetchData(form);

    if (data?.imdbID) {
      setMovie(data);
      setIsError(false);
    } else {
      setIsError(true);
      setMovie({});
    }
  };

  const handleOnAddMovieClicked = (type) => {
    adToList({...movie, type})
    setMovie({})
    console.log(type);
  };

  return (
    <div className="search-form">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row g-2 ">
          <div className="col-md-9 ">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-warning">Search</button>
          </div>
        </div>
      </form>
      <div className="d-flex justify-content-center mt-3">
        {movie.imdbID && (
          <CustomCard
            {...movie}
            handleOnAddMovieClicked={handleOnAddMovieClicked}
          />
        )}

        {isError && <div className="alert alert-danger">No Movie found!</div>}
      </div>
    </div>
  );
};