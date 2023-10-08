import Card from '../Card/Card';
import Style from '../Cards/Cards.module.css';

export default function Cards(props) {
   const {characters, onClose} =props;

   return <div className={Style.ContenedorCards}>
      {characters.map((character)=>{
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
            onClose={onClose}
          />
         );
      })}
   </div>;
   
}
