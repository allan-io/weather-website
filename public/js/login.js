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