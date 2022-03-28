const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8,9,10];
const selectedIndex = null;

imageIndexes.forEach((i) => {
    if(i <= 3){
    const image = document.createElement('img');
    //image.classList.add("img-fluid", "img-thumbnail")
    image.src = `/ArtGallery/Art${i}.jpg`;
    image.alt = 'ein bild';
    image.classList.add('galleryImg');

    image.addEventListener('click',() =>{
        //popup stuff
        popup.style.transform = `translateY(0)`;
        selectedImage.src = `/ArtGallery/Art${i}.jpg`;
        selectedImage.alt = 'ein bild'; 
    });
 
    gallery.appendChild(image);
}});

popup.addEventListener('click',() =>{
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
});




