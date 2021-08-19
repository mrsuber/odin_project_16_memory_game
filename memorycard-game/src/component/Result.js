import '../styles/Result.css'

function Result({score, miss}){
  if(score+miss===10){
    alert("Game Over. You Had "+score+" Wins and "+miss+" Loss")
    window.location.reload(false);
  }
  return(
    <div className="result__container">
    <h3>the score is {score} and the miss is {miss}</h3>
    </div>
  )
}
export default Result
