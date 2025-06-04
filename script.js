// let menu = document.querySelector("#menu-btn");
// let navbar = document.querySelector(".header .navbar");
// menu.onclick = () =>{
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active')
// }
// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active')
// }
const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const email = document.getElementById('email').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const date = document.getElementById('date').value;

      let hasError = false;

      if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        hasError = true;
      }

      if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        hasError = true;
      }

      if (email === '' || !email.includes('@')) {
        document.getElementById('emailError').textContent = 'Valid email is required.';
        hasError = true;
      }

      if (!/^\d{10}$/.test(contact)) {
        document.getElementById('contactError').textContent = 'Enter a 10-digit contact number.';
        hasError = true;
      }

      if (date === '') {
        document.getElementById('dateError').textContent = 'Appointment date is required.';
        hasError = true;
      }

      if (!hasError) {
        alert('Appointment booked successfully!');
        form.reset();
      }
    });