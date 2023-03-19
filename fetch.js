console.log('Dad Jokes Starter');
 const URL="https://api.chucknorris.io/jokes/random?category=dev"


const btn= document.querySelector(".btn")
const content= document.querySelector(".content")
const img= document.querySelector(".container img")

btn.addEventListener("click",()=>{
  fetch(URL).then(data=>data.json()).then(response=>displayData(response)).catch(err=>console.log(err))
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
  