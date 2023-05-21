//import Home from "../../Views/Home/Home";
import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import s from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ordenByAtaque, ordenByNombre } from "../../Redux/Actions/actions";


function NavBar() {
  const dispatch = useDispatch();
  
  //const recipes = useSelector((state) => state.state);
  const [orden, setOrden] = useState("");


  function handleOrden(e) {
    e.preventDefault();
    dispatch(ordenByNombre(e.target.value));
    setOrden(e.target.value);
  }
  function handlePopulation(e) {
    e.preventDefault();
    dispatch(ordenByAtaque(e.target.value));
    setOrden(e.target.value);
  }


    return (
      <div className={s.barraDeNavegador}>
      <div>
        <SearchBar/>
      </div>
      <select name="seleccion" id="" onChange={handleOrden} className={s.boton}>
            <option value="nombre">Nombre</option>
            <option value="A-Z">Ascendente</option>
            <option value="Z-A">Descendente</option>
          </select>
          <select name="" id="" onChange={handlePopulation} className={s.boton}>
            <option value="poblacion">Poblacion</option>
            <option value="Min">Ascendente</option>
            <option value="Max">Descendente</option>
          </select>
      <div className={s.caja_botones}>
        <div>
          <button className={s.botonInicio}>
            <Link to={"/home"} style={{ textDecoration: 'none', color: "white"}}>Inicio</Link>
          </button>
        </div>
        <div>
          <button className={s.botonForm}>
            <Link to={"/form"} style={{ textDecoration: 'none', color: "white"}}>Crear Receta</Link>
          </button>
        </div>
      </div>
      </div>
    );
  }
  
  export default NavBar;