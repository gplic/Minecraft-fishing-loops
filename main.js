// Functionize Minecraft Fishing Start Code


// Variables
let img = document.getElementById("result-img");
let steveImgE1 = document.getElementById("character-img1");
let alexImgE1 = document.getElementById("character-img2");
let villagerImgE1 = document.getElementById("character-img3");
let fishInventory = document.getElementById("fishInv");
let codOut = document.getElementById("num-cod");
let salmonOut = document.getElementById("num-salmon");
let tropicOut = document.getElementById("num-tropical");
let pufferOut = document.getElementById("num-puffer");



// Global Variables
let fishInv = "";
let character = "steve";
let numCod = 0;
let numSalmon = 0;
let numTropic = 0;
let numPuffer = 0;

// Event Listeners
document.getElementById("fish-btn").addEventListener("click", fishOnce);
document.getElementById("fish-btn5").addEventListener("click", fish5);
document.getElementById("fish-btn-200C").addEventListener("click", fish200C);
document.getElementById("fishSort").addEventListener("click", sortFish);
steveImgE1.addEventListener("click", selectSteve);
alexImgE1.addEventListener("click", selectAlex);
villagerImgE1.addEventListener("click", selectVillager);

// Functions

// Character Select
steveImgE1.style.border = "2px solid red";
function selectSteve() {
  steveImgE1.style.border = "2px solid red";
  alexImgE1.style.border = "2px solid gray";
  villagerImgE1.style.border = "2px solid gray";
  character = "steve";
}
function selectAlex() {
  steveImgE1.style.border = "2px solid gray";
  alexImgE1.style.border = "2px solid red";
  villagerImgE1.style.border = "2px solid gray";
  character = "alex";
}
function selectVillager() {
  steveImgE1.style.border = "2px solid gray";
  alexImgE1.style.border = "2px solid gray";
  villagerImgE1.style.border = "2px solid red";
  character = "villager";
}

function sortFish () {
  fishInv = "";
  for (i = 0; i < numCod; i++) {
    fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
  }
  console.log(`cod: ${i}`);
  for (i = 0; i < numSalmon; i++) {
    fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
  }
  console.log(`salmon: ${i}`);
  for (i = 0; i < numTropic; i++) {
    fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
  }
  console.log(`tropic: ${i}`);
  for (i = 0; i < numPuffer; i++) {
    fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
  }
  console.log(`puffer: ${i}`);
  fishInventory.innerHTML = fishInv;
}

function fishOnce() {  
  // Determine Character Selected

  if (character === `steve`) {
    // Steve Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.7) {
      numCod += 1;
      img.src = "img/Raw-Cod.png";
      fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
    } else if (randNum < 0.9) {
      numSalmon += 1;
      img.src = "img/Raw-Salmon.png";
      fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
    } else if (randNum < 0.95) {
      numTropic += 1;
      img.src = "img/Tropical-Fish.png";
      fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
    } else {
      numPuffer += 1;
      img.src = "img/Pufferfish.png";
      fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
    }
  } else if (character === `alex`) {
    // Alex Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.1) {
      numCod += 1;
      img.src = "img/Raw-Cod.png";
      fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
    } else if (randNum < 0.2) {
      numSalmon += 1;
      img.src = "img/Raw-Salmon.png";
      fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
    } else if (randNum < 0.5) {
      numTropic += 1;
      img.src = "img/Tropical-Fish.png";
      fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
    } else {
      numPuffer += 1;
      img.src = "img/Pufferfish.png";
      fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
    }
  } else if (character === `villager`) {
    // villager Fish Simulator
    let randNum = Math.random();

    if (randNum < 0.25) {
      numCod += 1;
      img.src = "img/Raw-Cod.png";
      fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
    } else if (randNum < 0.5) {
      numSalmon += 1;
      img.src = "img/Raw-Salmon.png";
      fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
    } else if (randNum < 0.75) {
      numTropic += 1;
      img.src = "img/Tropical-Fish.png";
      fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
    } else {
      numPuffer += 1;
      img.src = "img/Pufferfish.png";
      fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
    }
  }
  codOut.innerHTML = numCod;
  salmonOut.innerHTML = numSalmon;
  tropicOut.innerHTML = numTropic;
  pufferOut.innerHTML = numPuffer;
  fishInventory.innerHTML = fishInv;
}

function fish5() {  
  // Determine Character Selected
  for (i = 1; i <= 5; i++) {
    if (character === `steve`) {
      // Steve Fish Simulator
      let randNum = Math.random();

      if (randNum < 0.7) {
        numCod += 1;
        img.src = "img/Raw-Cod.png";
        fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
      } else if (randNum < 0.9) {
        numSalmon += 1;
        img.src = "img/Raw-Salmon.png";
        fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
      } else if (randNum < 0.95) {
        numTropic += 1;
        img.src = "img/Tropical-Fish.png";
        fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
      } else {
        numPuffer += 1;
        img.src = "img/Pufferfish.png";
        fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
      }
    } else if (character === `alex`) {
      // Alex Fish Simulator
      let randNum = Math.random();

      if (randNum < 0.1) {
        numCod += 1;
        img.src = "img/Raw-Cod.png";
        fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
      } else if (randNum < 0.2) {
        numSalmon += 1;
        img.src = "img/Raw-Salmon.png";
        fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
      } else if (randNum < 0.5) {
        numTropic += 1;
        img.src = "img/Tropical-Fish.png";
        fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
      } else {
        numPuffer += 1;
        img.src = "img/Pufferfish.png";
        fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
      }
    } else if (character === `villager`) {
      // villager Fish Simulator
      let randNum = Math.random();

      if (randNum < 0.25) {
        numCod += 1;
        img.src = "img/Raw-Cod.png";
        fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
      } else if (randNum < 0.5) {
        numSalmon += 1;
        img.src = "img/Raw-Salmon.png";
        fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
      } else if (randNum < 0.75) {
        numTropic += 1;
        img.src = "img/Tropical-Fish.png";
        fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
      } else {
        numPuffer += 1;
        img.src = "img/Pufferfish.png";
        fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
      }
    }
  }
  
  codOut.innerHTML = numCod;
  salmonOut.innerHTML = numSalmon;
  tropicOut.innerHTML = numTropic;
  pufferOut.innerHTML = numPuffer;
  fishInventory.innerHTML = fishInv;
}

function fish200C() {  
  let cod200 = numCod + 200;
  let counter = 0;

  while (numCod < cod200) {
    counter++;
    if (character === `steve`) {
      // Steve Fish Simulator
      let randNum = Math.random();

      if (randNum < 0.7) {
        numCod += 1;
        img.src = "img/Raw-Cod.png";
        fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
      } else if (randNum < 0.9) {
        numSalmon += 1;
        img.src = "img/Raw-Salmon.png";
        fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
      } else if (randNum < 0.95) {
        numTropic += 1;
        img.src = "img/Tropical-Fish.png";
        fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
      } else {
        numPuffer += 1;
        img.src = "img/Pufferfish.png";
        fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
      }
    } else if (character === `alex`) {
      // Alex Fish Simulator
      let randNum = Math.random();

      if (randNum < 0.1) {
        numCod += 1;
        img.src = "img/Raw-Cod.png";
        fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
      } else if (randNum < 0.2) {
        numSalmon += 1;
        img.src = "img/Raw-Salmon.png";
        fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
      } else if (randNum < 0.5) {
        numTropic += 1;
        img.src = "img/Tropical-Fish.png";
        fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
      } else {
        numPuffer += 1;
        img.src = "img/Pufferfish.png";
        fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
      }
    } else if (character === `villager`) {
      // villager Fish Simulator
      let randNum = Math.random();

      if (randNum < 0.25) {
        numCod += 1;
        img.src = "img/Raw-Cod.png";
        fishInv += `<img src="img/Raw-Cod.png" width="25px" /> `;
      } else if (randNum < 0.5) {
        numSalmon += 1;
        img.src = "img/Raw-Salmon.png";
        fishInv += `<img src="img/Raw-Salmon.png" width="25px" /> `;
      } else if (randNum < 0.75) {
        numTropic += 1;
        img.src = "img/Tropical-Fish.png";
        fishInv += `<img src="img/Tropical-Fish.png" width="25px" /> `;
      } else {
        numPuffer += 1;
        img.src = "img/Pufferfish.png";
        fishInv += `<img src="img/Pufferfish.png" width="25px" /> `;
      }
    }
  }
  console.log(counter);
  codOut.innerHTML = numCod;
  salmonOut.innerHTML = numSalmon;
  tropicOut.innerHTML = numTropic;
  pufferOut.innerHTML = numPuffer;
  fishInventory.innerHTML = fishInv;
}