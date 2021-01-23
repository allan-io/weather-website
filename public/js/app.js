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