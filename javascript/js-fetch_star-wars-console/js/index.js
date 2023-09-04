console.clear();
import { renderElement } from "./utils.js";

const url = "https://swapi.dev/api/people";

async function fetchData() {
    try {
        const response = await fetch(url)
        console.log(response);

        const jsonObj = await response.json();
        console.log('jsonObj',jsonObj);
        
        if (!response.ok) {
            console.log('bad request!');
        } else {
            console.log('fetch works!');
            //bonus :
            console.log(jsonObj.results[2].eye_color)
            return jsonObj;
        } 
    } catch (error) {
        console.log(error.message)
    }
}

fetchData();
