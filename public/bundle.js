(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {weatherForm, getWeather} = require('./get-weather')
const {btn, span, btnClick, closeModalX, closeModalOutside} = require('./login-modal')
const {modalForm, login} = require('./login')


document.addEventListener('DOMContentLoaded', () => {

    weatherForm.addEventListener('submit', getWeather)
    btn.addEventListener('click', btnClick)
    span.addEventListener('click', closeModalX)
    window.addEventListener('click', closeModalOutside)
    modalForm.addEventListener('submit', login)
    
})
},{"./get-weather":2,"./login":4,"./login-modal":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

const btnClick = () => {
    modal.style.display = "block"
}

const closeModalX = () => {
    modal.style.display = "none"
}

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


},{}],4:[function(require,module,exports){
const modalForm = document.querySelector('.modal-form')
const [fname, lname, email, password] = Array.from(document.querySelectorAll('.modal-form input'))


const login = async (event) => {
    console.log(fname.value)
    event.preventDefault()

    const res = await fetch(`/users/sign-up?fname=${fname.value}?lname=${lname.value}?email=${email.value}?password=${password.value}`)
    const data = await res.json()
    console.log(data)
}

module.exports = {
    modalForm,
    login
}
},{}]},{},[1]);
