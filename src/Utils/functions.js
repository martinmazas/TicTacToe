import players from '../data.json'
import axios from 'axios'

export const getRandomNumbers = (requiredElements, elementsNum) => {
    const result = new Set()

    while (result.size < requiredElements - 1) {
        const rand = Math.floor(Math.random() * (elementsNum.length))
        result.add(rand)
    }

    return Array.from(result)
}

export const getPlayer = (playerName, countries, teams) => {
    const findPlayer = axios.get('http://localhost:8080/players/guessPlayer', {
        headers: {
            "Content-type": "application/json",
        }, params: {
            "playerName": playerName,
            "countries": countries,
            "teams": teams
        }
    })
        .then(data => addPhoto(data.data))
        .catch(err => console.log(err))
}


export const addPhoto = (player) => {
    if (player === 'No matches') return alert('NOO')

    // Get the team and country div for the selected player
    const playerDiv = document.getElementsByClassName(`${player.country}-${player.team}`)

    if (playerDiv[0]) {
        // Get the parent of the player's div
        const parentDiv = playerDiv[0].parentNode

        // Create the player image
        const img = document.createElement('img')
        img.src = require(`../images/${player.imgPath}.jpeg`)
        img.alt = `${player.second_name}`
        img.style.width = '80%'
        img.style.height = '80%'
        img.style.margin = 'auto'

        // Add the player image and delete the previous div
        parentDiv.prepend(img)
        parentDiv.removeChild(playerDiv[0])
    }
}
