import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
    try {
      const response = await fetch (colorApiUrl)
       console.log('response:', response)
   
       const data = await response.json();
       console.log('data:', data)
       const hex = data.hex.value;
       
       const nameColor = data.name.value;
       setColorToGuess(hex, nameColor)
   
    } catch (error) {
       const errorMessage = 'bad request'
       console.log(errorMessage)
    }
  }