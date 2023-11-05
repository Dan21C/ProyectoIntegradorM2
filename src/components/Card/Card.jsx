import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import Style from '../Card/Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'; 


function Card(props) {

   const {
      id,
      name, 
      status, 
      species, 
      gender, 
      origin, 
      image, 
      onClose,
      addFav,
      removeFav, 
      myFavorites
   }=props;
   
   const [isFav,setIsFav]=useState(false);

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props)
      setIsFav(!isFav);
   };

   return (
      <div className={Style.Card}>

         {isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
         )}

         {useLocation().pathname !== "/favorites" && (
             <button className={Style.Exit} onClick={() => onClose(id)}>
            X
            </button>
         )}
        
         <Link to={`/detail/${id}`}><h2 className={Style.title} >{name}</h2></Link>
         <p className={Style.p2}>{origin}</p>
         <img className={Style.img} src={image} alt='' /> 

         <div className={Style.Contendor2}>
            <p className={Style.p1}>{status}</p>
            <p className={Style.p1}>{species}</p>
            <p className={Style.p1}>{gender}</p>
         </div>

      </div>
                  
   );
}

   const  mapDispatchToProps = (dispatch) => {
      return {
         addFav: (character) => {
            dispatch(addFav(character));
         },
         removeFav: (id) => {
            dispatch(removeFav(id));
         }, 
      };
   };

   const mapStateToProps = (state) => {
      return {myFavorites: state.myFavorites};
   };

   export default connect(mapStateToProps,mapDispatchToProps)(Card);

