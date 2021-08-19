import '../styles/Card.css'
import {useEffect,useState} from 'react'

let string1 =""
let string2=""
let score=0;
let miss=0;
function Card({image,name,missFunction, scoreFunction,key}){
  const [activeMenu, setActiveMenu] = useState()


  const toggle =(e)=>{
      setActiveMenu('dashboard')

    if (string1===""){
      string1=e.target.innerText
      console.log("card one is:",string1)

    }else if (string2===""){
      string2=e.target.innerText
      console.log("card two is:",string2)
    }

    if(string1!=="" && string2!==""){
      if(string1===string2){
        score++
      }else{
        miss++
      }
      missFunction(miss);
      scoreFunction(score);
      console.log("the score is",score)
      console.log('number of miss:',miss)
      string1="";
      string2=""
    }
    // console.log(e.target.innerText)

  }


  return(
    <div className="card__container"  onClick={toggle} key={key}>

    <div className="deck">
      <div className="card card1 ">

          <div

          className={activeMenu === 'dashboard' ? 'face back ' : 'face front'}
          >
          {name? name:'no card name'}
          </div>

          <div
          className={activeMenu === 'dashboard' ? ' face front' : 'face back'}

          >
            {image ?(<img src={image}/>):(<p>no image</p>)}
          </div>
      </div>

</div>
    </div>
  )
}

export default Card
