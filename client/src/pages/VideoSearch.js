import img2 from '../img/youtube.jpg';

function Video(){
    
    return(

        <div >
                <h1>Ambience</h1>
                <img src={img2} alt="" className="youtubeimg"/>
                <div className="Youtube">
                <h4 className="logo">Youtube Channels</h4>

      <a class="dropdown-item" href="https://www.youtube.com/channel/UCfak21UYFUer7Nhucu3CuJA" target="_blank">Cozy Rain</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UCfak21UYFUer7Nhucu3CuJA" target="_blank">New Blizz</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UCfak21UYFUer7Nhucu3CuJA" target="_blank">Nature Zilla</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UCfak21UYFUer7Nhucu3CuJA" target="_blank">Relaxing Ambience ASMR</a>
    </div>
        </div>
    )

}


export default Video;



