validateEmail()

function validateEmail() {
    const input = document.getElementById('email')
    const btnFree = document.getElementById('btnFree')
    const invalid = document.querySelector('.invalid')
    btnFree.addEventListener('click', () => {
        if (String(input.value).includes('@') ) {
            invalid.classList.add('hide')
        } else {
            invalid.classList.remove('hide')
        }
    })
}