
// const API_URL = "https://api.genderize.io?name=peter";


// let elForm = document.querySelector("[data-form]");
// let elInput = document.querySelector("[data-input]");
// let elP = document.querySelector("[data-p]")
// let elButton = document.querySelector("[data-button]")

// elForm.addEventListener("sumbit", (evt) => {
//     evt.preventDefault();

//     let formData = new FormData(elForm);
//     let name = formData.get("input-name");


//     nameSubmit(name)
   
// })


//  async function nameSubmit(name) {

//     let res = await fetch(`${API_URL}`);
//     let searchResult = await res.json();

//     if (searchResult.Error){
//         alert(searchResult.Error)
//         return
//       }

      
// }







let elButton = document.querySelector("[data-button]")
let API_URL = "https://dog.ceo/api/breeds/image/random";
let elImg = document.querySelector("[data-img]")



elButton.addEventListener("click", () => {
     renderUrl()
})


 async function renderUrl(){
    let res = await fetch(`${API_URL}`);
    let rand = await res.json();

    elImg.src = rand.message

}






