import Card from "../Card/Card";
import s from './CardsContainer.module.css'
import { useSelector } from "react-redux";


function CardContainer() {
    const recetas = useSelector((state)=>state.recipes)
   
    return (
       
    <div >
      <div >
            <div className={s.contenedor_cartas}>
                {recetas?.map((pokes)=>(
                    <Card pokes={pokes}/>
                ))}
            </div>
      </div>
    </div>
    );
  }
  
  export default CardContainer;