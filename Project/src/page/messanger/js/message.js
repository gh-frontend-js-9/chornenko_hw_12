async function getAllUserId(userThread) {


    let userId;
    let  id;
    userThread.forEach(function (elem) {
        userId = elem.user._id;
        if (userId !== me) {
            id = userId;
        } else {
            (id !== userId);
        }});
    console.log(me);
    const url = 'https://geekhub-frontend-js-9.herokuapp.com/api/users/all';
    try {
        const response = await fetch(url+ userId, {
            method: 'GET',
            headers: {
                'x-access-token': localStorage.token,
            }
        });
        let userInfo = await response.json();
        if (response.status === 200 ){
            let threadUser = document.createElement('li');
            let listMember = document.getElementById('list-user');
            listMember.appendChild(threadUser);
           console.log(userInfo);
        }
        if (response.status === 500 ){
           console.log('Somthing wrong');
        }

    } catch (error) {
        console.error('Error:', error);
    }

}


async function startThread() {
    let message = document.getElementById('textbox');
    console.log(message);
    try {
        const response = await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc', {
            method: 'GET',
            headers: {
                "x-access-token": localStorage.token
            }
        });
        console.log(response);
        let result = response.json();
        console.log(result);

    } catch (e) {

    }
}

document.getElementById("chat-window").addEventListener("submit", function (event) {
    event.preventDefault();
    getAllUserId();
});