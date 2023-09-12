export function getAnimal(animal) {
    if (animal === 'cats') {
        return `I totally love ${animal}!`
    } if (animal?.charAt(animal.length-1) === 's') {
        return `I like ${animal}!`
    } {return 'I do not like animals at all!'
    }
}
