import img1 from '../img/fish.jpg';
import img2 from '../img/birds.jpg';
import Counter from '../components/Counter';

function Game(){
    

    return(

        <div >
            <h1>Game</h1>
                <img src={img2} alt="" className="fishimg"/>
                <h4 className="fish">Count the Birds</h4>
                <Counter />
        </div>
        
    )

}


export default Game;