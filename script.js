console.log('Script working!')

const petButton = document.querySelector("button")
console.log(petButton)

let count = 0
    
petButton.addEventListener('click', (e) =>{
    count += 1
    if (count <= 4) {
      cardcontent.innerHTML=`<h3>You pet the corgi ${count} times. She's thriving!</h3>`
      cardimage.innerHTML = `<img src="corgihappy.jpg"/>`
    } else if (count == 5) {
      cardcontent.innerHTML = `<h3> I think that's enough. You pet the corgi ${count} times. You can stop now.</h3>`
      cardimage.innerHTML = `<img src="corgiafraid.jpg"/>`
    } else if (count > 5) { 
      cardcontent.innerHTML = `<h3>I said no more pets!</h3>`
      cardimage.innerHTML = `<img src="corgiaangry.jpg"/>`
    }
    
})