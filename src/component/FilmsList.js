import PropTypes from 'prop-types';
import { FilmsListItem } from './FilmsListItem';



export const FilmsList = ({films, onClick}) => {
    return (
     <ul>
         {films.map(({id, title,  img}) => {
             return (
                 <li>
                     <FilmsListItem onClick={onClick} title={title} img={`https://image.tmdb.org/t/p/w780${img}`} />

                 </li>
             )
         })}
     </ul>
    )
}

//watched: <span>{watched}</span>

FilmsList.propTypes = {
    wotched: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    films: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }).isRequired,
    ),
}