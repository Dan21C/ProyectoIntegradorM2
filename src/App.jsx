import './App.css';
import axios from 'axios'

import { useState, useEffect } from 'react';

import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './Views/About/About';
import Detail from './Views/detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


import {Route, Routes, useLocation, useNavigate} from 'react-router-dom'


function App() {
   const {pathname}=useLocation();//Evaluamos la en la que estamos con el hook useLocation
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access,setAccess]=useState(false);
   const email='pipecastov21@hotmail.com'
   const password='1010020984Pipe_'

   const login = (userData) => {
      if(userData.email===email && userData.password===password){
         setAccess(true);
         navigate('/home');
      }else alert('Usuario o contraseña incorrecta')
   }

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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

   useEffect(()=>{
      !access && navigate('/');
   },[access]);

   return (
      <div className='App'>
         <div>
         {/* se evalua si la ubicacion es diferente de / y entonces muestra el nav | El doble && devuelve  */}
         {pathname !== '/' && <Nav onSearch={onSearch}/>} 
         <Routes>
            <Route path="/" element={<Form login={login}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path={'*'} element={<h1 style={{ color: '#f2f2f2'}}>404 Not Found</h1>}/>
         </Routes>
         </div> 

      </div>
   );
}

export default App;