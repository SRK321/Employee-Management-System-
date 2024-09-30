document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  const emailOrCode = document.getElementById('emailOrCode').value;
  const password = document.getElementById('password').value;

  // Simple validation
  if (!emailOrCode || !password) {
      alert('Please fill in all fields');
      return;
  }

  // Check if the emailOrCode is 'admin'
  if (emailOrCode.toLowerCase() === 'admin') {
      window.location.href = './admindashboard.html'; // Redirect to Admin Dashboard
  } else {
      window.location.href = 'empdashboard.html'; // Redirect to Employee Dashboard
  }
});
