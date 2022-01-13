import { fillSubraceOptions } from "./form/adjust";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;
const characterRace = document.getElementById("race") as HTMLSelectElement;

characterRace.addEventListener("change", fillSubraceOptions);

const objectButton = document.getElementById("object_button");
const characterForm = document.getElementById("character_form");

objectButton.addEventListener("click", (event) => {
  const characterFormData = new FormData(characterForm);
  const characterFormDataObject = Object.fromEntries(
    characterFormData.entries()
  );

  console.log({ characterFormDataObject });
});

const character = {
  character_name: "",
  character_race: "azaer",
  character_subrace: "human",
  character_gender: "",
  character_age: "",
  character_region: "",
};

type Character = typeof character;

const characterArray = new Array(3).fill({ ...character });

console.log(characterArray);

function addToList(ul: HTMLUListElement, char: Character) {
  Object.entries(char).forEach(([key, value]) => {
    const li = document.createElement("li");
    li.innerText = `${key}: ${value}`;
    ul.appendChild(li);
  });
}

function arrayToHTML(characters: Character[]) {
  const characterListElement = document.getElementById("character-list")!;
  characterListElement.innerHTML = "";

  characters.forEach((char) => {
    const ul = document.createElement("ul");
    characterListElement.appendChild(ul);
    addToList(ul, char);
  });
}

arrayToHTML(characterArray);

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
