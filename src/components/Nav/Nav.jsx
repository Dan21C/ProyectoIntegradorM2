import Style from '../Nav/Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link} from 'react-router-dom';



export default function Nav(props) {
    const{onSearch}=props;
    return(
        <div className={Style.Nav}>
        <h1 className={Style.Title}>Rick & Morty</h1>
        <Link to='/home'><h3 className={Style.NavElements}>Home</h3></Link>
        <Link to='/about'><h3 className={Style.NavElements}>About</h3></Link>
        <Link to='/favorites'><h3 className={Style.NavElements}>Favorites</h3></Link>
        <SearchBar className={Style.SearchBar} onSearch={onSearch} />
        </div>
     );
    }
