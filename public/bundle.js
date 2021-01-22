(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {weatherForm, getWeather} = require('./get-weather')
const {btn, modal, span, btnClick, closeModalX, closeModalOutside} = require('./login-modal')



document.addEventListener('DOMContentLoaded', () => {
    weatherForm.addEventListener('submit', getWeather)
    btn.addEventListener('click', btnClick)
    span.addEventListener('click', closeModalX)
    window.addEventListener('click', closeModalOutside)
})
},{"./get-weather":2,"./login-modal":3}],2:[function(require,module,exports){
const weatherForm = document.querySelector('form')
const inputValue = document.querySelector('input')
const locationOutput = document.querySelector('#location-output')
const forecastOutput = document.querySelector('#forecast-output')
const iconOutput = document.querySelector('#icon-output') 


const getWeather = (event) => {
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
}

module.exports = {
    weatherForm,
    getWeather
}
},{}],3:[function(require,module,exports){
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    // btn.onclick = function () {
    //     modal.style.display = "block";
    // }

    const btnClick = () => {
        modal.style.display = "block"
    }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }
    const closeModalX = () => {
        modal.style.display = "none"
    }
 
    // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function (event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
    const closeModalOutside = (event) => {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }


module.exports = {
    btn,
    modal,
    span,
    btnClick,
    closeModalX,
    closeModalOutside
}


},{}]},{},[1]);
