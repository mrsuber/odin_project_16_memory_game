import "../styles/Cards.css"
import Card from '../component/Card'
import img1 from '../images/bird1.jpg'
import img2 from '../images/bird2.jpg'
import img3 from '../images/bird3.jpg'
import img4 from '../images/bird4.jpg'
import img5 from '../images/bird5.jpg'
import img6 from '../images/bird6.jpeg'
import img7 from '../images/bird7.jpg'
import img8 from '../images/bird8.jpg'
import img9 from '../images/bird9.jpg'
import img10 from '../images/bird10.jpg'


function Cards({missFunction, scoreFunction}){

  return(
    <div className="cards__container">
    <Card name='Card 1' image={img1} key={1} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 10'image={img10} key={10} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 2'image={img2} key={2} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 1' image={img1} key={1} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 3'image={img3} key={3} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 4'image={img4} key={4} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 2'image={img2} key={2} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 6'image={img6} key={6} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 5'image={img5} key={5} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 6'image={img6} key={6} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 9'image={img9} key={9} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 3'image={img3} key={3} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 4'image={img4} key={4} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 7'image={img7} key={7} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 7'image={img7} key={7} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 5'image={img5} key={5} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 8'image={img8} key={8} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 9'image={img9} key={9} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 8'image={img8} key={8} missFunction={missFunction} scoreFunction={scoreFunction}/>
    <Card name='Card 10'image={img10} key={10} missFunction={missFunction} scoreFunction={scoreFunction}/>
    </div>
  )
}

export default Cards
