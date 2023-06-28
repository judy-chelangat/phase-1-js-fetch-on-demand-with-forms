
// making sure the JavaScript we write executes when the DOM is fully loaded
const init = () => {
  const inputForm =document.querySelector("form")
  const input = document.getElementById("searchByID")
// const details =document.getElementById("movieDetails")

  inputForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(e.target.children[1].value)
     console.log(input.value)

    //making a fetch request to the local server
    fetch(`http://localhost:3000/movies/${input.value}`)
    .then(resp => resp.json())
    .then(data => {
      const title = document.querySelector('section#movieDetails h4');
    const summary = document.querySelector('section#movieDetails p');
    title.textContent=data.title
    summary.textContent = data.summary
    })
  })
}

document.addEventListener('DOMContentLoaded', init);