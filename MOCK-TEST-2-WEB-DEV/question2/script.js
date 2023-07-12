const inputBox = document.getElementById('inputBox');
const submitButton = document.getElementById('submitButton');
const resultList = document.getElementById('resultList');

submitButton.addEventListener('click', function() {
  const inputValue = inputBox.value.trim();

  if (inputValue !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = inputValue;
    resultList.appendChild(listItem);
    inputBox.value = '';
  }
});

inputBox.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    submitButton.click();
    event.preventDefault();
  }
});
