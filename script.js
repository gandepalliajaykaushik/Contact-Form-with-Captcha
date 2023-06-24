function generateRandomCaptcha() {
    var captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var captchaLength = 6;
    var captcha = '';
  
    for (var i = 0; i < captchaLength; i++) {
      var randomIndex = Math.floor(Math.random() * captchaChars.length);
      captcha += captchaChars.charAt(randomIndex);
    }
  
    return captcha;
  }
  
  function refreshCaptcha() {
    var captchaImage = document.getElementById('captchaImage');
    var captchaText = generateRandomCaptcha();
    captchaImage.innerHTML = captchaText;
  }
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Validate CAPTCHA
    var captchaInput = document.getElementById('captchaInput').value;
    var captchaText = document.getElementById('captchaImage').innerHTML;
    if (captchaInput.toLowerCase() !== captchaText.toLowerCase()) {
      alert('Invalid CAPTCHA!');
      return;
    }
  
    // Submit the form
    var formData = new FormData(this);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    // Display success message
    alert('Form submitted successfully!');
    this.reset();
    refreshCaptcha();
  });
  
  // Generate initial CAPTCHA on page load
  refreshCaptcha();
  