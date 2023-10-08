import Style from '../detail/Detail.module.css'
import React,{ useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const [character,setCharacter]=useState({});
    const {id}=useParams();

    useEffect(() => {        
        //     axios(`https://rickandmortyapi.com/api/character/${id}`)
        //     .then(({ data }) => {
        //         if (data.name) {
        //            setCharacter(data);
        //         } else {
        //            window.alert('No hay personajes con ese ID');
        //         }
        //     }).catch((error)=>{
        //     console.log('Error en api ',error);
        // })
 
        // (async()=>{
        //     try{
        //         const response=await axios(`https://rickandmortyapi.com/api/character/${id}`);
        //         const data=response.data;
        //     }
        //     catch(error){
        //         console.log(error);
        //     }
        // })();

        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response)=>response.json())
        .then((data)=>{
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
            }).catch((error)=>{
                console.log('Error en api ',error);
            })

        return setCharacter({});
     }, [id]);

    return (
        <div>
        <h1 className={Style.title}>Detail {id}</h1>
        <h2>{character.name}</h2>
        <h2>{character.status}</h2>
        <h2>{character.gender}</h2>
        <h2>{character.specie}</h2>
        <h2>{character.origin?.name}</h2>
        <div></div>
        <img src={character.image} alt="" />
        </div>
    );
}
 export default Detail;