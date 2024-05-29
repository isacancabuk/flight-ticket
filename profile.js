const login = document.getElementById('login')
const username = localStorage.getItem('username');
if(username){
    login.innerHTML = username
    login.href = "profile.html"
}

logoutHandler = () => {
    alert("Please Log out!")
}

