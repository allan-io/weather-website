const weatherForm = document.querySelector('#weather-form')
const inputValue = document.querySelector('#weather-form input')
const locationOutput = document.querySelector('#location-output')
const forecastOutput = document.querySelector('#forecast-output')
const iconOutput = document.querySelector('#icon-output') 


const getWeather = async (event) => {
    event.preventDefault()

    const deleteIcon = document.getElementById('icon')
    deleteIcon && deleteIcon.remove() //if deleteIcon exists delete it
    forecastOutput.textContent = ''
    locationOutput.textContent = 'Loading...'

    const res = await fetch(`/weather?address=${inputValue.value}`)
    const data = await res.json()
    if (data.error) return locationOutput.innerHTML = data.error

    locationOutput.textContent = data.location
    forecastOutput.textContent = data.forecast

    const weatherIcon = document.createElement('img')
    weatherIcon.src = data.icon
    weatherIcon.id = 'icon'
    iconOutput.appendChild(weatherIcon)

    inputValue.value = ''
}

module.exports = {
    weatherForm,
    getWeather
}