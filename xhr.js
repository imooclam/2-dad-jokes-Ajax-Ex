
const btn= document.querySelector(".btn")
const content= document.querySelector(".content")

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