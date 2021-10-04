

/*
Random Cabin
*/
function HomePage() {
  let array = ["cabin", "lakehouse", "camping"];
  let pages = Math.floor(Math.random() * 3);
  const requestUrl =`https://api.unsplash.com/search/photos?query=?${array[pages]}&client_id=-lvgmwUFMDguutg_5ks41KffSPddHwysgkiKqO72FR8`;
  const getImagesButton = document.querySelector('.getImagesButton');
  const imageToDisplay = document.querySelector('.imageToDisplay');

  async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    let allImages = data.results[randomNumber];
    if (allImages.urls) {
      return allImages.urls.regular; 
    }
  });
  }

  function handleClick (event) {
    if (event.target.id ===  "btn-1") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1615800580133-1e8dff436965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')";
    } else if (event.target.id === "btn-2") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603204043962-f1562f2ea562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80')";
    } else if (event.target.id ===  "btn-3") {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1544143779-6afcefd7ac46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')";
    } else  {
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1624469681156-4114efeb85a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')";
    }
  }
  const getRandom = async () => {
    const imageToDisplay = document.querySelector('.imageToDisplay');
    let randomImage = await getNewImage();
    imageToDisplay.src = randomImage;
  }
  return(
    <div class="adiv">
      <div class="fetchImagesWrapper">
        <button onClick={getRandom} class="getImagesButton">
          Get A Random Image
        </button>

        <button onClick={handleClick} id="btn-1">1</button>

        <button onClick={handleClick} id="btn-2">2</button>
        <button onClick={handleClick} id="btn-3">3</button>
        <button onClick={handleClick} id="btn-4">4</button>
      </div>
      <div class="imageDisplayWrapper">
        <img
          class="imageToDisplay"
        />
      </div>
    </div>
  )
}


 

export default HomePage