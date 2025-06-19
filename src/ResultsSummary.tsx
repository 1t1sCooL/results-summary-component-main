import Results from "./Results";
import Summary from "./Summary";

function ResultsSummary(){
    return(<>
    <div className='result-summary'>
        <Results/>
        <Summary/>
    </div>
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="https://mmalabugin.ru">1t1sCooL</a>.
  </div>
    </>
)
}

export default ResultsSummary;