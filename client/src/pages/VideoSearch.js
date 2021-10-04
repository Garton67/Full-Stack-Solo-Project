import img2 from '../img/youtube.jpg';

function Video(){
    
    return(

        <div >
                <h1>Videos</h1>
                <img src={img2} alt="" className="youtubeimg"/>
                <div className="Youtube">
                <h4 className="logo">Youtube Channels</h4>
                <h4 className="logo">For Ambient Sounds</h4>

      <a class="dropdown-item" href="https://www.youtube.com/channel/UCfak21UYFUer7Nhucu3CuJA" target="_blank">Cozy Rain</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UC-gjtyoUTzGEwWM5Y1J4J7Q" target="_blank">New Bliss</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UCDmvEp5Rtjw817rMw_Z-S1A" target="_blank">Nature Zilla</a>
      <a class="dropdown-item" href="https://www.youtube.com/channel/UCfsZsMaDMDpN-1lYeWnteMg" target="_blank">Nature SFX</a>
    </div>
        </div>
    )

}


export default Video;



