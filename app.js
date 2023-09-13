const loginData = {
    email:'', 
    password:''
};

const signUpData = 
{
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    address:"",
    uploadImage:"",
    phone:"",
    liveImage:"",
}


function passwordVisibility()
{
    const password  = document.getElementById("password");
    const passwordIcon = document.getElementById("passwordIcon");

    if(password.type === 'password')
    {
        password.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    }
    else
    {
        passwordIcon.classList.add('fa-eye');
        passwordIcon.classList.remove('fa-eye-slash');
        password.type = 'password'
    }
}


function loginSubmit(event)
{

   const email= document.getElementById('email');
   const password= document.getElementById("password");
   loginData.email = email.value;
   loginData.password = password.value;

   localStorage.setItem('loginData' , JSON.stringify(loginData));
}

function signUpSubmit(event)
{
    event.preventDefault();
    
    
  
   signUpData.email = document.getElementById('email').value;
   signUpData.firstName = document.getElementById('firstName').value;
   signUpData.lastName= document.getElementById('lastName').value;
   signUpData.phone = document.getElementById('phone').value;
   signUpData.uploadImage = document.getElementById('uploadImage').value;
   signUpData.address= document.getElementById('address').value;
   signUpData.password= document.getElementById('password').value;
  
   localStorage.setItem('signUpData' , JSON.stringify(signUpData));
    
}