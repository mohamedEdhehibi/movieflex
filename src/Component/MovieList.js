import React from 'react';
import Movie from './Movie';

const MovieList = ({filter}) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {filter.map((movie) => (
                 <Movie key={movie.title} {...movie} />
            ))}
        </div>

    );
}

export default MovieList