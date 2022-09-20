const form = document.querySelector('#add');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const value = e.target.querySelector('#add-input').value;
  const newItem = `
  <li>
    <p>${value}</p>
    <p>
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      <i class="fa fa-times" aria-hidden="true"></i>
    </p>
    <input type="text" class="edit-note">
  </li>
  `;
  document.querySelector('#list').innerHTML += newItem;
  // empty input field
  document.querySelector('#add-input').value = '';
});
