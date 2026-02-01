document.getElementById("timestamp").value = new Date().toISOString();

// OPEN MODALS
document.querySelectorAll('[data-modal]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const modal = document.getElementById(link.dataset.modal);
    if (modal) modal.showModal();
  });
});

// CLOSE MODALS
document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = button.closest('dialog');
    if (dialog) dialog.close();
  });
});

const info = new URLSearchParams(window.location.search);
console.log(info);

document.querySelector('#results').innerHTML = `
<P>Appointment for ${info.get('name')} ${info.get('lname')}</p>
<P>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the ${myInfo.get('location')} Temple</p>
<p> Your Phone: ${myInfo.get('phone')}
<p> Your Email: ${myInfo.get('email')}
`