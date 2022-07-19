let form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;

    if (password !== confirmPassword) {
        Swal.fire({
            title: 'Oops!',
            text: 'The password fields don\'t match each other :(',
            icon: 'error'
          });
    } else {
        Swal.fire({
            title: 'Awesome!',
            text: 'You\'re ready to start receiving the best travel tips!',
            icon: 'success'
        });
    }
});