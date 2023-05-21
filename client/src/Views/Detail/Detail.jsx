import s from './Detail.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getById } from "../../Redux/Actions/actions";


function Detail() {
  const estado = useSelector((state) => state.detail);
  const {imagen, nombre} = estado;


  const dispatch = useDispatch();
  let { id } = useParams();
  
  useEffect(() => {
    dispatch(getById(id));
  }, []);

    return (
      <div>
        <h1>Detail</h1>
          <div className={s.pagina}>
        <div className={s.detalles}>
        <div className={s.caja_imagen}>
          <img src={imagen} alt="" className={s.imagen} />
        </div>
        <div>

        <div className={s.dato}>
          <h3>Nombre:</h3>
          <p>{nombre}</p>
        </div>
        <Link to={"/home"}>Inicio</Link>
        </div>

        </div>

        </div>
      </div>
    );
  }
  
export default Detail;