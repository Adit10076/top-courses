import Card from './Card.js'
import {btnClick}  from './FilterCourse.js'
function Cards({info , selectedId}){

    return(
        <div className='cards'>
            {
                Object.keys(info).map((category)=>{
                    return(
                        info[category].map((course)=>{
                            if(selectedId==="All"){
                                return(
                                    <Card {...course}></Card>
                                )
                            }
                            if(category===selectedId){
                                return(
                                    <Card {...course}></Card>
                                    

                                )
                            }
                            return null;

                        })
                    )
                })
            }
        </div>
    )
}
export default Cards;