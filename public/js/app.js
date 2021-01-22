





{
    const weatherForm = document.querySelector('form')
    const inputValue = document.querySelector('input')
    const locationOutput = document.querySelector('#location-output')
    const forecastOutput = document.querySelector('#forecast-output')
    const iconOutput = document.querySelector('#icon-output') 
    

    weatherForm.addEventListener('submit', (event) => {
        event.preventDefault()
        
        const deleteIcon = document.getElementById('icon')
        deleteIcon && deleteIcon.remove()
        forecastOutput.textContent = ''
        locationOutput.textContent = 'Loading...'
        
        fetch(`/weather?address=${inputValue.value}`)
            .then((response) => {
                response.json().then(data => {
                    console.log(data)
                    if (data.error) {
                        return locationOutput.innerHTML = data.error
                    }

                    locationOutput.textContent = data.location
                    forecastOutput.textContent = data.forecast

                    const weatherIcon = document.createElement('img')
                    weatherIcon.src = data.icon
                    weatherIcon.id = 'icon'
                    iconOutput.appendChild(weatherIcon)

                    inputValue.value = ''
                })
            })
    })
}