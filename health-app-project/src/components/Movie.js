import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}) {
    return (
    <Link to={{
        pathname: `/movie/${id}`,
        state: {
            year,
            title,
            summary,
            poster,
            genres,
        }
    }}>
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h5 class="movie__year">{year}</h5>
                <p class="movie__summary">{summary}</p>
                <ul className="genres">{genres.map((genre, index) => (
                    <li key={index} className="genres__genre">{genre}</li>
                ))}
                </ul>

            </div>
        </div>
    </Link>
    )
}

Movie.propsType = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;