import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import {toast} from 'react-toastify'
function Card({ id, title, description, image}){
    const [rm , setRM] = useState(false);
    const[likedIcon,setLikedIcon] = useState(false);
    function toggleProp(){
        (rm===false)?setRM(true):setRM(false);
    }
    function changeIcon(){
        setLikedIcon(!likedIcon);
        likedIcon?toast.warning("Like Removed"):toast.success("Liked Successfully");
    }
    const information = (rm===false)?description.substr(0,100):description;
    const text = (rm==false)?"Read More":"Show Less"
    return(
        
        <div className="card">
        <img src={image?.url} alt={image?.alt} className="img"></img>
        <button className="btn-icon" onClick={()=>changeIcon()}>
            {
                likedIcon?<FcLike className="fc-like"></FcLike>:<FcLikePlaceholder className="fc-dislike"></FcLikePlaceholder>
            }
        </button>
        <p className="name">{title}</p>
        <p className="description">{information} ...<span className="read-more" onClick={()=>toggleProp()}>{text}</span></p>
    </div>
    )
}
export default Card;