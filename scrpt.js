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