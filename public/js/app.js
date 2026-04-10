// //This call is browser related, not node function
// 

const weatherForm = document.querySelector('#weather-form');
const addressInput = document.querySelector('#address-input');
const errorP = document.querySelector('#error-message');
const dataP1 = document.querySelector('#data-message1');
const dataP2 = document.querySelector('#data-message2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = addressInput.value;
    errorP.textContent = '';
    dataP1.textContent = 'Loading...';
    dataP2.textContent = '';

    fetch(`http://localhost:3000/weather?address=${address}`)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    errorP.textContent = data.error;
                    dataP1.textContent = '';
                    return
                }
                dataP1.textContent = data.location;
                dataP2.textContent = data.display;
            });
        });
});
