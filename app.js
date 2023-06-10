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
        location.replace('https://www.amazon.in/s?k=-amazon&hvadid=72499124504037&hvbmt=be&hvdev=c&hvqmt=e&tag=msndeskstdin-21&ref=pd_sl_5fksc5jb1x_e')
    }
    )
    .catch(err=>{
     alert("invalid password/user not found")
    })
}