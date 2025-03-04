document.addEventListener("DOMContentLoaded",()=>{
    const container = document.getElementById("container");
    const signUpLink = document.getElementById("signUpLink");
    const signInLink = document.getElementById("signInLink");
  
    // Switch Sign Up
    signUpLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("right-panel-active");
    });
  
    // Switch  Sign In
    signInLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.remove("right-panel-active");
    })
    const signInForm = document.getElementById("signInForm");
  const signUpForm = document.getElementById("signUpForm");
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    // Basic validation
    if (email && password) {
      alert(`Sign In Attempt:\nEmail: ${email}`);
      // Here you would typically send data to backend
    } else {
      alert("Please fill in all fields");
    }
  });

  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = signUpForm.querySelector('input[type="text"]').value;
    const phone = signUpForm.querySelector('input[type="tel"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    // Basic validation
    if (name && phone && email && password) {
      alert(`Sign Up Attempt:\nName: ${name}\nEmail: ${email}`);
      // Here you would typically send data to backend
    } else {
      alert("Please fill in all fields");
    }
  });
  const forgotPasswordLinks = document.querySelectorAll(".forgot-password");
  forgotPasswordLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Forgot Password - Functionality to be implemented");
    });
  });

})