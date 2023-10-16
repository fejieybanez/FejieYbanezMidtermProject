
      document.getElementById("loginButton").addEventListener("click", function () {
        try {
          validation();
          alert("Login successful!");
          // Redirect to a new page upon successful login
          window.location.href = "dashboard.html"; 
        } catch (error) {
          alert(error);
        } finally {
          passwordInput.value = "";
        }
      });

      function validation() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Regular expressions for email and password validation
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (!email.match(emailPattern)) {
          throw "Invalid email address!";
        }

        if (!password.match(passwordPattern)) {
          throw "Invalid password! Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.";
        }
      }