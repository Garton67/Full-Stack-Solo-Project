
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  return (
    <div className="App">

    </div>
  );
}

const requestUrl =
'https://api.unsplash.com/search/photos?query=london&client_id=-lvgmwUFMDguutg_5ks41KffSPddHwysgkiKqO72FR8';
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

export default App;



