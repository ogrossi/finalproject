import React, { useEffect } from 'react';
import MovieList from "../Movie/movie-list";
const Page3 = () => {
    useEffect(() => {
        document.title = 'Page3';
    });
    return (
        <div>
            <h1>Movie Review Page</h1>
            <MovieList/>
        </div>
    );
};
export default Page3;