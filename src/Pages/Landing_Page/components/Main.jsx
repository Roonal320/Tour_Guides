import React, {useState} from 'react';

// importing DBs
import GuideDb from '../../../TestDBS/GuidesDb';

// importing libraries


// Importing image components
import Tour_Img from './images/IMG_1.jpg';

// Importing css
import "./Main.css";

// Importing components
import GuideCards from './GuideCards';

function Main(){


    const [query, setQuery] = useState("")
    const [cards, setCards] = useState(GuideDb);


    
    
//    handling change in search bar

    function handleChange(e) {
        var {value}= e.target;

        value= value.replace(/ /g, '')

        value = value.toLowerCase();

        setQuery(value);

        if(!value){
            setCards(GuideDb);
            return;
        }
        const result= GuideDb.filter(guide=>{return guide.location.city===value})

        
        if (!result.length) {
            setCards([]);
          } else {
            setCards(result);
          }

    }

   

    
// handling submit 

    function handleSubmit(e, query){
        e.preventDefault();

        if(!query){
            setCards(GuideDb);
            return;
        }

        const result= GuideDb.filter(guide=>{return guide.location.city===query})

        
        if (!result.length) {
            setCards([]);
          } else {
            setCards(result);
          }
        
        
    }
    

    return(
        <div>
            <div className="wrapper" >
                <img src={Tour_Img} alt="Tour_Guide_Img" width="100%" height="100%" over="true"/>
                <div className="search-wrapper">

                    <div className="searchField">
                        <form>
                            <button  disabled className="searchField_button searchField_prepend"><i className="fas fa-map-marker-alt"></i></button>
                            <input onChange={handleChange} className="searchField_input" type="text" placeholder="Where do you want to go" />
                            <button onClick={(e)=>handleSubmit(e, query)} className="searchField_button searchField_append"><i className="fas fa-search"></i></button>
                        </form>
                    </div>            
                </div>   
            </div>

            <div style={cards.length?null:{height:"50rem"}} className="Card_Components">

                {cards.map((cardInfo, index)=>{
                    return(<GuideCards 
                    key={index}
                    image={cardInfo?.img}
                    name={cardInfo?.name}
                    about={cardInfo?.about}
                    location={cardInfo?.location}
                    price={cardInfo?.price}
                    rating={cardInfo?.rating}
                    review={cardInfo?.review}
                 />);
                })}
                
            </div>
        </div>

        
        
        
    );
}

export default Main;



