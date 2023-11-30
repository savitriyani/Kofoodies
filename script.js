let left = document.getElementsByClassName('bi bi-arrow-left-circle-fill')[0];
let right = document.getElementsByClassName('bi bi-arrow-right-circle-fill')[0];
let cards = document.getElementsByClassName('cards')[0];

left.addEventListener('click', () =>{
    cards.scrollLeft -= 140;
})
right.addEventListener('click', () =>{
    cards.scrollLeft += 140;
})

let poster = document.getElementById('poster')
let title = document.getElementById('title')
let price_cont = document.getElementById('price_cont')
let description = document.getElementById('description');

let cardDescriptions = document.querySelectorAll('.card-description');

// Hide all card descriptions
cardDescriptions.forEach(desc => {
    desc.style.display = 'none';
});

Array.from(document.getElementsByClassName('card')).forEach((ele, i)=>{
    // console.log(ele)
    ele.addEventListener('click', () => {
        poster.src = ele.getElementsByTagName('img')[0].src;
        title.innerText = ele.getElementsByTagName('h5')[0].innerText
        price_cont.innerText = ele.getElementsByTagName('h4')[0].innerText
        
        

        // Find the card description for the clicked card
        let cardDescription = ele.querySelector('.card-description');

        // Set the description text
        description.innerText = cardDescription.innerText
})
})
