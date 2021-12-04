
import PropTypes from 'prop-types'


export const FilmsListItem = ({title, img, onClick  }) => {
    return (
        <>
        <h2>{title}</h2>
        <img src={img} alt="" onClick={() => onClick(img) }/>


        </>

    )
}

FilmsListItem.propTypes = {
    title: PropTypes.func.isRequired,
     img: PropTypes.string.isRequired,
      onClick: PropTypes.string.isRequired, 
}

// <p>Wothed: <span>&`{wathed}`</span></p>
