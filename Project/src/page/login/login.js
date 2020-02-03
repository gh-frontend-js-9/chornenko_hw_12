async function LoginUser() {

    const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/login';
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = {
        'email': email,
        'password': password
    };

    console.log(user);

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });
        console.log(response);

        let result = await response.json();
        console.log(result);
        if (response.ok) {
            console.log(response.headers.get('X-Auth-Token'));
            localStorage.setItem('token', response.headers.get('X-Auth-Token'));
            window.location.href = ('http://localhost:63342/ProjectGH/Project/src/page/graph/index.html?_ijt=h4q4p9f4pdsiqegvsninf0esm');

        } else alert("Login or password is incorrect, try again");

}
catch (e) {
    alert('Try again')
}
}

document.getElementById('login-form').addEventListener('submit', function (event) {
 event.preventDefault();
    LoginUser();
});