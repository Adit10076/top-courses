import { useState } from "react";
function Card({ id, title, description, image}){
    const [rm , setRM] = useState(false);
    function toggleProp(){
        (rm===false)?setRM(true):setRM(false);
    }
    const information = (rm===false)?description.substr(0,100):description;
    const text = (rm==false)?"Read More":"Show Less"
    return(
        <div className="card">
        <img src={image?.url} alt={image?.alt} className="img"></img>
        <p className="name">{title}</p>
        <p className="description">{information} ...<span className="read-more" onClick={()=>toggleProp()}>{text}</span></p>
    </div>
    )
}
export default Card;