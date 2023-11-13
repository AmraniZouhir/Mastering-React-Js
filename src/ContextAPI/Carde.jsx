import { useContext } from "react";
import HelloWorld from "../Hellow Word/hellow-word";
import { Appcontext } from "./App";

function Card({ title, body }) {
const isDarkModed =useContext(Appcontext)

    return (
        <>
                <div className="card mb-3 mx-3" style= {(isDarkModed) ? {color:"white", backgroundColor:"black" } :{}}>
                <div className="row g-0">
                <div className="col-md-4">
                        <img className="img-fluid rounded-start" src="https://picsum.photos/200/300?grayscale"
                             alt=""/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body"><h4 className="card-title">{title}</h4>
                            <p className="card-text">{body}</p>
                            <div className="card-text">
                                <HelloWorld lastName='zouhir'/>
                            </div>
                            <p className="card-text"><small style= {(isDarkModed) ? {color:"white", backgroundColor:"black" } :{}}>Last
                                updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>

        
        
           
        </>
    );
}

export default Card