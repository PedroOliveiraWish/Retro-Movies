import React, { useEffect, useState } from 'react';
import Filme from './types/filmes.type';
import MovieCard from './components/FilmeCard/filmeCard';
import Welcome from './components/Welcome/Welcome';
import Header from './components/Header/Header';
import './app.css';

export default function App() {
    const [filmes, setFilmes] = useState<Filme[]>()

    useEffect(() => {
        const fetchFilme = async () => {
            const response = await fetch(`http://localhost:3001/api/filme`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    AutoAuthorization: `Bearer ${process.env.TOKEN_ACCESS}`
                }
            })

            const responseJson = await response.json()

            const responseResults = responseJson.results;

            const responseFinal = responseResults.map((filme: Filme) => {
                return {
                    id: filme.id,
                    title: filme.title,
                    release_date: filme.release_date,
                    vote_average: filme.vote_average,
                    vote_count: filme.vote_count,
                    overview: filme.overview,
                    popularity: filme.popularity,
                    poster_path: filme.poster_path
                }
            })

            setFilmes(responseFinal)
        }

        fetchFilme()
    }, [])

    return (
        <div className="App">
            <Header />

            <main>
            
            <Welcome />
            
                <div className="movies-group">
                    {filmes?.map((filme) => {
                        return <MovieCard {...filme} />
                    })}
                </div>
            </main>
        </div>
    );
}