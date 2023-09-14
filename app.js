const loginData = {
    email: '',
    password: ''
};

const signUpData =
{
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    Image: "",
    phone: "",

}

let mediaStream = "";

function passwordVisibility() {
    const password = document.getElementById("password");
    const passwordIcon = document.getElementById("passwordIcon");

    if (password.type === 'password') {
        password.type = 'text';
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
    }
    else {
        passwordIcon.classList.add('fa-eye');
        passwordIcon.classList.remove('fa-eye-slash');
        password.type = 'password'
    }
}


function loginSubmit(event) {

    event.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById("password");
    loginData.email = email.value;
    loginData.password = password.value;
    if (email.value.length < 1 || password.value.length < 1) {
        document.getElementById("validateMsg").style.display = "block";
    }
    else {
        document.getElementById("validateMsg").style.display = "none";
        localStorage.setItem('loginData', JSON.stringify(loginData));
        document.getElementById("form").reset()

    }


}


function closeCameraStream() {
    if (mediaStream) {
        mediaStream.getTracks().forEach(function (track) {
            track.stop();
        })
    }
}

function signUpSubmit(event) {
    event.preventDefault();
    signUpData.email = document.getElementById('email').value;
    signUpData.firstName = document.getElementById('firstName').value;
    signUpData.lastName = document.getElementById('lastName').value;
    signUpData.phone = document.getElementById('phone').value;
    signUpData.Image = document.getElementById('Image').value;
    if (document.getElementById('Image').value < 1) {
        signUpData.Image = document.getElementById('Image').src;
    }
    signUpData.address = document.getElementById('address').value;
    signUpData.password = document.getElementById('password').value;

    if (signUpData.firstName.length < 1 || signUpData.lastName.length < 1 || signUpData.email.length < 1 || signUpData.phone.length < 1
        || signUpData.Image.length < 1 || signUpData.address.length < 1 || signUpData.password.length < 1) {
        document.getElementById("validateMsg").style.display = "block";
    }
    else {
        document.getElementById("validateMsg").style.display = "none";
        localStorage.setItem('signUpData', JSON.stringify(signUpData));
        document.getElementById("form").reset()
    }




}

function uploadHandler(e) {
    e.preventDefault();
    document.getElementById("imageSection").style.display = "none";

    document.getElementById("uploadSection").style.display = "block";
}

function captureHandler(e) {
    e.preventDefault()
    document.getElementById("imageSection").style.display = "block";
    document.getElementById("uploadSection").style.display = "none";
    navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
            const camera = document.getElementById("camera");
            camera.srcObject = stream;
            mediaStream = stream;
        })
        .catch(function (error) {
            console.error("Error accessing the camera: " + error);
        });

}





function captureImage(event) {
    event.preventDefault();
    const camera = document.getElementById("camera");
    const capturedImageElement = document.getElementById("Image");
    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 300;
    const context = canvas.getContext("2d");
    context.drawImage(camera, 0, 0, canvas.width, canvas.height);

    const imageDataURL = canvas.toDataURL("image/png");
    capturedImageElement.src = imageDataURL;
    closeCameraStream()
    document.getElementById("imageSection").style.display = "none";
    document.getElementById("uploadSection").style.display = "none";
};