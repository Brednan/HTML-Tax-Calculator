
const account = {
    username: 'Brendan',
    password: 'Illumina3',
}

function Login(username, password){
    if(account.username == username && account.password == password){
        location.href = "./index.html"
    }
}