console.log('Dad Jokes Starter');
 const URL="https://api.chucknorris.io/jokes/random?category=dev"


const btn= document.querySelector(".btn")
const content= document.querySelector(".content")
const img= document.querySelector(".container img")

btn.addEventListener("click",()=>{
  getData(URL)
})

 function getData(url) {
  const xhr=new XMLHttpRequest
   xhr.open("GET",url)
  xhr.onreadystatechange=()=>{
    if(xhr.readyState!==4)return
    if(xhr.status===200&&xhr.status<=299){

      const {value:joke}= JSON.parse(xhr.responseText)
      // console.log(resp);
      content.textContent=joke
      img.classList.add("shake-img")
      const randomShake= Math.random()*1000
      setTimeout(() => {
      img.classList.remove("shake-img")
        
      }, randomShake);
    }else{
      console.log({
        status:xhr.status,
        readyState:xhr.readyState,
        Text:xhr.statusText
      });
    }

  }
  xhr.send()
 }