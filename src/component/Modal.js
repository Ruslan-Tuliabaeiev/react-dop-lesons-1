
export const Modal = ({img, onClick}) => {
    return(
         <div onClick={onClick}>

             <img src={`https://image.tmdb.org/t/p/w780${img}`} alt=""/>


         </div>

    )
}

