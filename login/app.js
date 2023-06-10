const email=document.getElementById('email');
const password=document.getElementById('password');
const login=document.getElementById('login');


login.addEventListener('click',onlogin);


function onlogin(e){
    e.preventDefault();
    axios.post('http://localhost:5000/login',{
        email:email.value,
        password:password.value
    })
    .then(()=>{
        alert("User logged in successfully")
        //location.replace('')
    }
    )
    .catch(err=>{
     alert("invalid password/user not found")
    })
}