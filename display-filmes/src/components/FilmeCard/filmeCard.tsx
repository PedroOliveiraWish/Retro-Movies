import Filme from "../../types/filmes.type";
import './filmeCard.css'

export default function MovieCard(data: Filme) {

    const imagemFilme = `https://image.tmdb.org/t/p/w500${data.poster_path}`

    return (
        <div className="movie-card">

            <div className="movie-imagem-group">
                <img src={imagemFilme} alt={data.title} />
            </div>

            <div className="movie-info-group">
                <div className="movie-header-group">
                    <div className="movie-title">{data.title}</div>

                    <div className="movie-date-vote">
                        <div className="movie-date">{data.release_date}</div>
                        <div className="movie-vote">{data.vote_average}</div>
                    </div>
                </div>

                <div className="movie-body-group">
                    {data.overview}
                </div>
            </div>

        </div>
    )
}