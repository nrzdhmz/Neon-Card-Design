// Select all follow buttons
var followButtons = document.querySelectorAll('.follow-btn');

followButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var box = button.closest('.box');
    
    box.classList.toggle('followed');
    
    if (button.textContent === 'Follow') {
      button.textContent = 'Unfollow';
    } else {
      button.textContent = 'Follow';
    }
  });
});
