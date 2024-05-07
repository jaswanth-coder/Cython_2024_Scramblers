// const axios = require('axios');


// const SERVER_URL = 'http://localhost:3000';


// axios.get(SERVER_URL)
//   .then(response => {
//     console.log('Response from server:');
//     console.log(response.data);
//   })
//   .catch(error => {
//    //  console.error('Error:', error.message);
//     console.log('file not found')
//   });
const axios = require('axios');
const SERVER_URL = 'http://localhost:3000';
function fetchData() {
  axios.get(SERVER_URL)
    .then(response => {
      console.log('Response from server:');
      console.log(response.data);
    })
    .catch(error => {
      // console.error('Error:', error.message);
      console.log('not');
    });
}


fetchData();


const intervalId = setInterval(fetchData, 10000);


function stopInterval() {
  clearInterval(intervalId);
  console.log('Interval stopped.');
}


process.on('SIGINT', () => {
  stopInterval();
  process.exit();
});
