console.log("scripts.js is loaded!");
document.getElementById("start-rsa").addEventListener("click", function () {
    console.log("Redirecting to RSA tool...");
    window.location.href = "rsa-tool.html";
  });
  
  
  
  document.getElementById("start-elgamal").addEventListener("click", function() {
    console.log("Redirecting to EL GAMAL tool...");
    window.location.href = "elgamal.html";
  });
  