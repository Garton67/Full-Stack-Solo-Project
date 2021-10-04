import img1 from '../img/fish.jpg';

function Game(){
    

    return(

        <div >
            <h4 className="fish">Count the Fish</h4>
                <img src={img1} alt="" className="fishimg"/>
                <h1>Counter</h1>
        </div>
    )

}


export default Game;