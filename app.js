
 const DigimonArray= [];


fetch("https://digimon-api.herokuapp.com/api/digimon")
.then((dataResponse) => dataResponse.json())
.then( (data)=> {

// console.log(data)
Createcard(data)



} );

class DigimonCreator {
  
    constructor(Name , Level , Image) {
        this.Name = digimonName;
        this.Level = digimonlevel;
        this.Image = digimonimage;
    }

}




function Createcard(data) {
    

    for (i=0 ; i<=19;i++){
        DigimonArray.push(data[i])
    }

    console.log(DigimonArray)

    DigimonArray.map((key) =>{
        let Card = document.createElement("div");

    document.getElementById("CardsContainer").appendChild(Card);
    let Img = document.createElement("img");
    Img.src = key.img;
    Card.appendChild(Img);
  
  
    let cardName = document.createElement("h4");
    cardName.textContent = "Name:" + key.name;
    Card.appendChild(cardName);
    
  
    let Lev = document.createElement("h5");
    Lev.textContent = "Level:" + key.level;
    Card.appendChild(Lev);


    key.element=Card;
  Card.classList.add("CardsStyle")
    // Card.style.display = "inline-block";
    // Card.style.background ="rgb(72, 15, 118)" ;
    // Card.style.color = "white";
    // Card.style.borderRadius = "20px";
    // Card.style.textAlign = "center";
    // Img.style.borderRadius = "50%";
    // Img.style.margin = "1rem";
    // Card.style.margin = "1rem";
    // Card.style.padding = "1.5rem";
    // cardName.style.fontStyle = "italic";
    // Card.style.boxShadow = "0 0 15px 5px rgba(255, 255, 255, 1)";
    // Card.style.opacity = "90%";
    Card.style.transition = "transform .5s ease-in";
    let navbar= document.getElementById("NavBar");
    navbar.style.marginBottom = "2rem"
    navbar.style.boxShadow = "0 0 15px 5px blue"
    navbar.style.zIndex = "10"
    navbar.style.position = "fixed"
    navbar.style.width = "100%"

    Card.style.marginTop = "6rem"


  
    Card.addEventListener("mouseenter", () => {
      Card.style.opacity = "100%";
      Card.style.boxShadow = "0 0 15px 10px rgba(255, 255, 255, 1)";
      Card.style.transform = "scale3d(1.2, 1.2,1.2)";
      Card.style.zIndex = "3";
    });
    Card.addEventListener("mouseleave", () => {
      Card.style.opacity = "95%";
      Card.style.boxShadow = "0 0 15px 5px rgba(255, 255, 255, 1)";

      Card.style.transform = "scale3d(1,1,1)";
    });







 
})
  


let searchInput= document.getElementById("srchInput");
  
searchInput.addEventListener("input" , event=>{
    const searched =event.target.value.toLowerCase();
  console.log(searched)
  DigimonArray.forEach(Digimon =>{
    console.log(Digimon.element)
const visible = Digimon.name.toLowerCase().includes(searched) || Digimon.level.toLowerCase().includes(searched)
Digimon.element.classList.toggle("hide",!visible)
})

})
  
    // localStorage.setItem("Employees", JSON.stringify(DigimonArray));
  
    // saveToLocal()
  
  
  
  

  }
  


