async function ResetPassword() {
    const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/reset_password';

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmationPassword = document.getElementById('confpassword').value;

    let user = {

        'password': password,
        'confirmationPassword': confirmationPassword,
        'email': email
    };

    try {
        const response = await fetch(url, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        console.log(response);

        let result = await response.json();
        console.log(result);
        if (response.ok) {
            window.location.href = ('http://localhost:63342/ProjectGH/Project/src/page/messanger/index.html?_ijt=h7dj36qis62mn4qurdgv2v6914');
        }

    }
    catch (error) {
        console.log(error)
    }
}
document.getElementById('reset-form').addEventListener('submit', function (event) {
    event.preventDefault();
   ResetPassword();
});