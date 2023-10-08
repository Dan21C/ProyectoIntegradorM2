import Style from '../SearchBar/SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {
   const [id,setId]=useState("");
   const {onSearch}=props;

   const handleChange=(e)=>{
      setId(e.target.value);
   };

   return (
      <div className={Style.SearchBar}>
         <input className={Style.type} type='search' onChange={handleChange} value={id} />
         <button className={Style.boton} onClick={()=>onSearch(id)}>Agregar</button>
      </div>
   );
}
