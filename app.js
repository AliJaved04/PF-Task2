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

navigator.mediaDevices
.getUserMedia({ video: true })
.then(function (stream) {
    const camera = document.getElementById("camera");
    camera.srcObject = stream;
})
.catch(function (error) {
    console.error("Error accessing the camera: " + error);
});


function signUpSubmit(event)
{
    event.preventDefault();
   signUpData.email = document.getElementById('email').value;
   signUpData.firstName = document.getElementById('firstName').value;
   signUpData.lastName= document.getElementById('lastName').value;
   signUpData.phone = document.getElementById('phone').value;
   signUpData.uploadImage = document.getElementById('uploadImage').value;
   signUpData.liveImage = document.getElementById('capturedImage').src;
   signUpData.address= document.getElementById('address').value;
   signUpData.password= document.getElementById('password').value;
  
   localStorage.setItem('signUpData' , JSON.stringify(signUpData));
    
}
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            const camera = document.getElementById("camera");
            camera.srcObject = stream;
        })
        .catch(function (error) {
            console.error("Error accessing the camera: " + error);
        });

   function captureImage(event) {
    event.preventDefault();
        const camera = document.getElementById("camera");
        const capturedImageElement = document.getElementById("capturedImage");
        const canvas = document.createElement("canvas");
        canvas.width = camera.videoWidth;
        canvas.height = camera.videoHeight;
        const context = canvas.getContext("2d");
        context.drawImage(camera, 0, 0, canvas.width, canvas.height);

        const imageDataURL = canvas.toDataURL("image/png");
        console.log(imageDataURL)
        capturedImageElement.src = imageDataURL;
        document.getElementById("imageSection").style.display = "none";
        document.getElementById("uploadSection").style.display = "none";
        document.getElementById("message").style.display = "block";
    };