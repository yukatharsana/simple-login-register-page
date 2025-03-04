document.addEventListener("DOMContentLoaded",()=>{
    const container = document.getElementById("container");
    const signUpLink = document.getElementById("signUpLink");
    const signInLink = document.getElementById("signInLink");
  
    // Switch to Sign Up
    signUpLink.addEventListener("click", (e) => {
      e.preventDefault();
      container.classList.add("right-panel-active");
    });
  
    // Switch to Sign In
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

  
})