//import s from './Landing.module.css'
import { Link } from "react-router-dom";



function Landing() {
    return (
      
            <div>
                <h1>Maximiliano Fonseca</h1>
                <h3>Poyecto Individual</h3>
                <h4>( Food )</h4>
            <div>
                <button>
                    <Link to={"/home"}><h3>Inicio</h3></Link>
                </button>
            </div>
            </div>
       
    );
  }
  
export default Landing;