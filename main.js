const form =document.getElementById('form');
const inputname=document.getElementById('name');
const inputemail=document.getElementById('email');
const inputpassword=document.getElementById('password');
const submitform=document.getElementById('submit');

submitform.addEventListener('click',onsubmit);


function onsubmit(e){
    e.preventDefault();
    axios.post('http://localhost:5000/todo',{
        name:inputname.value,
        email:inputemail.value,
        password:inputpassword.value
    })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })

}