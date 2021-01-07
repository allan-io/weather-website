{
    const weatherForm = document.querySelector('form')
    const inputValue = document.querySelector('input')
    const locationOutput = document.querySelector('#location-output')
    const forecastOutput = document.querySelector('#forecast-output')   

    weatherForm.addEventListener('submit', (event) => {
        event.preventDefault()

        locationOutput.textContent = 'Loading...'
        forecastOutput.textContent = ''
        
        fetch(`/weather?address=${inputValue.value}`)
            .then((response) => {
                response.json().then(data => {
                    if (data.error) {
                        return locationOutput.innerHTML = data.error
                    }

                    locationOutput.textContent = data.location
                    forecastOutput.textContent = data.forecast

                    inputValue.value = ''
                })
            })
    })
}