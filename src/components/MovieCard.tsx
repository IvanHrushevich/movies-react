import type { MovieDto } from '../models/MovieDto.model';

export interface MovieCardProps {
    movie: MovieDto;
}

const MovieCard = ({
    movie: {
        title,
        vote_average,
        poster_path,
        release_date,
        original_language,
    },
}: MovieCardProps) => {
    const imgPath = poster_path
        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
        : '/no-movie.png';

    const vote = vote_average ? vote_average.toFixed(1) : 'N/A';

    const year = release_date ? release_date.split('-')[0] : 'N/A';

    return (
        <div className="movie-card">
            <img src={imgPath} alt={title} />

            <div className="mt-4">
                <h3>{title}</h3>
                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star icon " />
                        <p>{vote}</p>
                    </div>

                    <span>·</span>
                    <p className="lang">{original_language}</p>

                    <span>·</span>
                    <p className="year">{year}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
