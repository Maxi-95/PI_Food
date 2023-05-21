import s from './Card.module.css'
import { Link } from "react-router-dom";


function Card({pokes}) {
  const {nombre, imagen, resumen, nivel, id} = pokes;
  return (
    <div className={s.carta}>
      {/* <Link to={`/home/${id}`} style={{ textDecoration: 'none', color: "black"}}> */}
        <div >
          <img src={imagen} alt={"imagen"} className={s.imagen}/>
        </div>

        <div className={s.nombre}>
          <h2>{nombre}</h2>
        </div>

      <div className={s.datos}>
          <p>{resumen}</p>
      </div>


    <div className={s.detalle}>
      
      <div className={s.nivel}>
        <p>Nivel: </p>
        <p>{nivel}</p>
      </div>
      <Link to={`/home/${id}`}>
      
      <button className={s.boton}>
        <h1>+</h1>
      </button>
       </Link>

    </div>
        
        {/* <Link to={`/home/${id}`} style={{ textDecoration: 'none', color: "black"}}> */}

       {/* </Link> */}
      
        {/* <div className={s.caja}>
       
          <div className={s.tipo}>
          <p>Tipo :</p>
          </div>
          {types &&
              types.map((t, index) => {
                return( 
                    <div className={s.tipoH4}>
                    <span key={index}>{t.nombre}</span>
                    </div>
                    )
              })
         }
        
        </div> */}
       {/* </Link> */}
    </div>
   
  );
}

export default Card;