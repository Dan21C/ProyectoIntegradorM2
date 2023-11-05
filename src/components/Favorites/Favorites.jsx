import { connect, useDispatch } from "react-redux"
import { filterCards,orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import { useState } from "react";

const Favorites = (props) => {
    const {myFavorites} = props;
    const [aux,setAux]=useState(false);
    const dispatch=useDispatch();

    const handleOrder = (e) => {
      dispatch(orderCards(e.target.value));
      setAux(!aux);
    }

    const handleFilter = (e) => {
      dispatch(filterCards(e.target.value));
    }

    return (
     <div> 
         <div>
            <select onChange={handleOrder}>
               <option value="A">Asecendente</option>
               <option value="D">Descendente</option>
            </select>
         </div>

         <div>
            <select onChange={handleFilter}>
            <option value="ALL">All</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
         </div>

      {myFavorites.map((character)=>{
         return (
          
          <Card 
            key={character.id}
            id={character.id}
            name={character.name} 
            status={character.status}  
            species={character.species} 
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
          />
         );
      })}
   </div>
   );
};

const mapStateToProps = (state) => {
    return { myFavorites: state.myFavorites};
};
export default connect (mapStateToProps, null)(Favorites);
