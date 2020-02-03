async function createUser() {
    const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = {
        "name": name,
        "email": email,
        "password": password

    };
    console.log(user);

    try {
        const response = await fetch(url, {

            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response);
        let result = await response.json();
        console.log(result);
        let token =  response.headers.get('X-Auth-Token');
        localStorage.setItem('token', token);
        return window.location.replace('http://localhost:63342/ProjectGH/Project/src/page/login/login.html?_ijt=8bo152qt03qsvg20jpkoc5ippb')
    }
    catch (error) {
        alert('Try again');
    }
}

    document.getElementById("signup-form").addEventListener("submit", function (event) {
            event.preventDefault();
            createUser();

    });



