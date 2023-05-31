import React from "react";

export const CustomCard = ({
  Poster,
  Title,
  Year,
  imdbRating,
  handleOnAddMovieClicked,
}) => {
  return (
    <div className="card" style={{ width: "18rem", marginTop: "1rem" }}>
      <img src={Poster} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>

        <div className="card-text">
          <div>Rate: {imdbRating}</div>
          <div>Released: {Year}</div>
        </div>

        <div className="d-flex justify-content-between py-3">
          <button
            onClick={() => handleOnAddMovieClicked("awesome")}
            className="btn btn-warning"
          >
            Awesome
          </button>
          <button
            onClick={() => handleOnAddMovieClicked("boring")}
            className="btn btn-danger"
          >
            Boaring
          </button>
        </div>
        <div className="d-grid">
          <button className="btn btn-danger">Remove</button>
        </div>
      </div>
    </div>
  );
};