console.log('Dad Jokes Starter');
 const URL="https://api.chucknorris.io/jokes/random?category=dev"


const btn= document.querySelector(".btn")
const content= document.querySelector(".content")
const img= document.querySelector(".container img")

btn.addEventListener("click",async()=>{

  try {
    const response= await fetch(URL)
    const data= await response.json()
    displayData(data)
    
  } catch (error) {
    console.log(error);
  } 
})

  function displayData({value:joke}){

    // const {value:joke}= JSON.parse(data)
          // console.log(resp);
          content.textContent=joke
          img.classList.add("shake-img")
          const randomShake= Math.random()*1500
          setTimeout(() => {
          img.classList.remove("shake-img")
            
          }, randomShake);

  }
  