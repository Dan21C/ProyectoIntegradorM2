import './App.css';
import axios from 'axios'

import { useState } from 'react';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './Views/About/About';
import Detail from './Views/detail/Detail'

import {Route, Routes} from 'react-router-dom'


function App() {
   const [characters, setCharacters] = useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char)=>{
            return char.id !== Number(id);
         })
      );
   };

   return (
      <div className='App'>
         <div>
         <Nav onSearch={onSearch}/>
         <Routes>
            <Route path="/home"
               element={<Cards characters={characters} onClose={onClose}/>} 
            />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path={'*'} element={<h1 style={{ color: '#f2f2f2'}}>404 Not Found</h1>}/>
         </Routes>
         </div> 

      </div>
   );
}

export default App;