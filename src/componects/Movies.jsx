import React, { useState } from "react";
import { movies } from "./data";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);
  
  const filterByCategory = (cat)=>{
    setMovieList(movies.filter((data)=>data.category==cat))
  }
  return (
    <>
      <div
        className="my-3 text-center"
        style={{
          width: "1300px",
          margin: "auto",
          padding:"10px",
        }}
      >
        <button onClick={()=>setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3">
          All
        </button>
        <button onClick={()=>filterByCategory("Action")} type="button" className="btn btn-outline-secondary mx-3">
          Action
        </button>
        <button onClick={()=>filterByCategory("Thriller")} type="button" className="btn btn-outline-success mx-3">
          Thriller
        </button>
        <button onClick={()=>filterByCategory("Animation")} type="button" className="btn btn-outline-danger mx-3">
          Animation
        </button>
        <button onClick={()=>filterByCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">
          Horror
        </button>
        <button onClick={()=>filterByCategory("Drama")} type="button" className="btn btn-outline-info mx-3">
          Drams
        </button>
        <button onClick={()=>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">
          Sci-Fi
        </button>
       
      </div>


      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          // gap: "3rem",
          textAlign: "center",
          width: "1300px",
          margin: "auto",
          marginTop: "1.5rem",
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "350px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover-effect">
              <img
                src={data.poster_path}
                style={{
                  width: "230px",
                  height: "300px",
                  border: "1px solid pink",
                  borderRadius: "5px",
                }}
              ></img>
            </div>
            <h5>{data.title}</h5>
            <p>{data.release_date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
