function HomePage() {
  return(
      <div>
          <h1></h1>
      </div>
  )
}


<div class="adiv">
<div class="fetchImagesWrapper">
  <button class="getImagesButton">
    Get A Random Image
  </button>
  <button id="btn-1">1</button>
  <button id="btn-2">2</button>
  <button id="btn-3">3</button>
  <button id="btn-4">4</button>
</div>
<div class="imageDisplayWrapper">
  <img
    class="imageToDisplay"
  />
</div>
</div>







export default HomePage


/*
Random Cabin
*/
const requestUrl ='https://api.unsplash.com/search/photos?query=cabin&client_id=-lvgmwUFMDguutg_5ks41KffSPddHwysgkiKqO72FR8';
const getImagesButton = document.querySelector('.getImagesButton');
const imageToDisplay = document.querySelector('.imageToDisplay');

getImagesButton.addEventListener('click', async () => {
let randomImage = await getNewImage();
imageToDisplay.src = randomImage;
});

async function getNewImage() {
let randomNumber = Math.floor(Math.random() * 10);
return fetch(requestUrl)
.then((response) => response.json())
.then((data) => {
  let allImages = data.results[randomNumber];
  return allImages.urls.regular;
});
}
/*
Change Background img
*/

let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');
btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1615800580133-1e8dff436965?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')";
});
btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603204043962-f1562f2ea562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80')";
});
btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1544143779-6afcefd7ac46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')";
});
btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1624469681156-4114efeb85a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80')";
  });