const workBtn= document.getElementById("workBtn");
const publicationBtn=document.getElementById("publicationBtn");
const submitBtn=document.getElementById("submitBtn");
const emailInput=document.getElementById("emailInput");
const nameInput=document.getElementById("nameof")
const errorMsg=document.getElementById("errorMsg");
const form=document.querySelector("form");

emailjs.init("sjFFRcrmgh8Qk-qg-"); // remmber to load emailjs script before script.js file

if(workBtn){ //wrap listeners in  if statements pls so that JS doesn't crash. Some pages might not have the button ID, hence null value occurs
    workBtn.addEventListener("click", ()=>
        {window.location.href="./work.html"});
}



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email=emailInput.value.trim();
    const nameof=nameInput.value.trim();

    errorMsg.innerText="";

    if(nameof==="" && email===""){
        errorMsg.classList.remove("text-green-600");
        errorMsg.classList.add("text-red-600");
        errorMsg.innerText="Please enter both email and name";
        return;
    }
    if(nameof===""){
        errorMsg.classList.remove("text-green-600");
        errorMsg.classList.add("text-red-600");
        errorMsg.innerText="Please Enter Your Name";
        return;
    }
    if(email===""){
        errorMsg.classList.remove("text-green-600");
        errorMsg.classList.add("text-red-600");
        errorMsg.innerText="Please Enter an Email Address";
        return;

    }
   
    if(!email.includes("@")){
        errorMsg.classList.remove("text-green-600");
        errorMsg.classList.add("text-red-600");
        errorMsg.innerText="Please enter a valid email address";
        return;
    }

    emailjs.sendForm( // aynchronous stuff
        "service_lmoxcxr",
        "template_7a7hytt",
        form
    ).then( // promise
        function () {
            errorMsg.classList.remove("text-red-600");
            errorMsg.classList.add("text-green-600");
            errorMsg.innerText = "Message sent successfully!";
            form.reset();
        },
        function (error) {
            errorMsg.classList.add("text-red-600");
            errorMsg.innerText = "Failed to send message.";
            console.log(error);
        }
    );
});



// Additional notes: In a normal function used as an event handler, this is automatically set by the browser to the element that triggered the event (the form).
// Arrow functions do not get this automatic binding, so this does not refer to the form and the code breaks.