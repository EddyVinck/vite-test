export const fillSubraceOptions = (event: Event) => {
  console.log("change!");
  const characterSubrace = document.getElementById("subrace");
  const characterRace = document.getElementById("race") as HTMLSelectElement;
  const raceValue = characterRace.options[characterRace.selectedIndex].text;
  const subraceItem = document.getElementById("subrace_item");

  if (raceValue === "Azaer") {
    characterSubrace.innerHTML =
      "<option value=''>Select your subrace</option><option value='human'>Human</option><option value='nudar'>Nudar</option>";

    subraceItem.style.display = "block";
  } else {
    // subraceItem.style.display = "none";
    characterSubrace.innerHTML = "<option value=''></option>";
  }
};
