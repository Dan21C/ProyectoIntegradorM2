import { Link } from 'react-router-dom';
import Style from '../Card/Card.module.css';


export default function Card(props) {
   const {id, name, status, species, gender, origin, image, onClose}=props//destructuring

   return (
      <div className={Style.Card}>

         <button className={Style.Exit} onClick={() => onClose(id)}>
            X
            </button>
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
