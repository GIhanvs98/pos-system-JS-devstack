//hide tab
document.getElementById('customerContext').style.display='block';
document.getElementById('productContext').style.display='none';
document.getElementById('orderContext').style.display='none';

//manage tabs
document.getElementById('customerTab').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('customerContext').style.display = 'block';
    document.getElementById('productContext').style.display = 'none';
    document.getElementById('orderContext').style.display = 'none';
    this.classList.add('active');
    document.getElementById('productTab').classList.remove('active');
    document.getElementById('orderTab').classList.remove('active');
});

document.getElementById('orderTab').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('customerContext').style.display='none';
    document.getElementById('productContext').style.display='none';
    document.getElementById('orderContext').style.display='block';
    this.classList.add('active');
    document.getElementById('productTab').classList.remove('active');
    document.getElementById('customerTab').classList.remove('active');


    
});
document.getElementById('productTab').addEventListener('click',function(event){
    event.preventDefault();
    document.getElementById('customerContext').style.display='none';
    document.getElementById('productContext').style.display='block';
    document.getElementById('orderContext').style.display='none';
    this.classList.add('active');
    document.getElementById('orderTab').classList.remove('active');
    document.getElementById('customerTab').classList.remove('active');

});



//register  with email and pssword
document.getElementById('signupButton').addEventListener('click',function(){
    document.getElementById('successRegisterAlert').style.display='none';
    document.getElementById('errorRegisterAlert').style.display='none';


})
function register() {
    let email=document.getElementById('registerUsername').value;
    let password=document.getElementById('registerPassword').value;
 
    if (!email || !password) {
        alert('please enter password and username');
        return;
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userCredintials)=>{
        console.log(userCredintials);
        
    }).catch((error)=>{
        
    })
}




