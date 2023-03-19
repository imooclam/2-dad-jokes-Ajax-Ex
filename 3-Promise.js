console.log('Dad Jokes Starter');
 const URL="https://api.chucknorris.io/jokes/random?category=dev"


const btn= document.querySelector(".btn")
const content= document.querySelector(".content")
const img= document.querySelector(".container img")

btn.addEventListener("click",()=>{
  getData(URL).then(res=>displayData(res)).catch(err=>console.log(err))
})


 function getData(url){
   return new Promise((resolve, reject) => {
     const xhr= new XMLHttpRequest;
     console.log(xhr);

     xhr.open("GET",url)
     xhr.onreadystatechange=()=>{

      if(xhr.readyState!==4)return
      if(xhr.status===200&&xhr.status<=299){

        resolve(xhr.responseText)

      }else{
        reject({
          status:xhr.status,
          readyState:xhr.readyState,
          Text:xhr.statusText

        })
      }
     }
     
     
     
     xhr.send()
   })

 }
 function displayData(data){

  const {value:joke}= JSON.parse(data)
        // console.log(resp);
        content.textContent=joke
        img.classList.add("shake-img")
        const randomShake= Math.random()*1500
        setTimeout(() => {
        img.classList.remove("shake-img")
          
        }, randomShake);

 }