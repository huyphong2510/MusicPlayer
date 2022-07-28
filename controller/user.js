const $ = document.querySelectorAll.bind(document);


const username = $('username')
const password = $('password')
const noti = $('#notification')



const user = {
    userInfo : [
        {
            userName : 'huyphong2510',
            password : '123456'
        },
        {
            userName : 'testaccount1',
            password : '123456'
        },
        {
            userName : 'testaccount2',
            password : '123456'
        }
        
    ]
}

function loginHandler() {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    

    for (let i = 0; i < user.userInfo.length; i++) {
        if (username == user.userInfo[i].userName
            && password == user.userInfo[i].password) {
            console.log('success')
            encodedString = window.btoa(password)
            // window.open('http://127.0.0.1:5500/MusicPlayer/view/menu.html');
            window.location.href = "http://127.0.0.1:5500/MusicPlayer/view/menu.html";
            localStorage.setItem('username', username)
            localStorage.setItem('password', encodedString)
            
            // $('#notification').innerHTML = 'ok'
        }
        if (!username == user.userInfo[i].userName || username == '') {
            document.getElementById('notification').innerHTML = 'Wrong username or password'
        }
        if (username == user.userInfo[i].userName
            && password != user.userInfo[i].password) {
                document.getElementById('notification').innerHTML = 'Wrong username or password'
        }
        else{
            document.getElementById('notification').innerHTML = 'Wrong username or password'
        }
       
     }
  }