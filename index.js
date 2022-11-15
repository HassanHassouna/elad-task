import data from "./data.json" assert { type: "json" }
const app = document.getElementById("app")
const createCard = (data) => {
  const card = document.createElement("div")
  card.classList.add("card")
  card.innerHTML = `
        <h3>Id: ${data.id}</h3>
        <h3>Site Name: ${data.name}</h3>
        <a class="url" href="//${data.url}" target={_blank}>Site Url: ${
    data.name
  }</a>
        ${
          data.subData
            ? `
                    <h3>Subdata</h3>
                    <ul>
                        ${data.subData
                          .map(
                            (subitem) => `
                                    <li class="subcard">
                                        ${createCard(subitem).innerHTML}
                                    </li> 
                                `
                          )
                          .join("")}
                    </ul>
                `
            : ""
        }    
    `
  return card
}

data.forEach((item) => {
  app.appendChild(createCard(item))
})

const subcards = document.querySelectorAll(".subcard")
subcards.forEach((card) => {
  card.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
})
