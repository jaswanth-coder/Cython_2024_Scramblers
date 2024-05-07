// // // const express = require("express");
// // // const app = express();
// // // const bodyParser = require('body-parser');
// // // app.use(bodyParser.urlencoded({extended:true}));

// // // app.get("/",function(req,res1){
// // //    res1.send("hello Saketh Mallojjala")
// // // });



// // // app.listen(process.env.PORT||3000,function(){
// // //    console.log("my second server started ");
// // // });


// // const express = require('express');
// // const bodyParser = require('body-parser');

// // const app = express();

// // app.use(bodyParser.json());

// // app.post('/sendData', (req, res) => {
  
// // //   const { id, value } = req.body;
// // const {domain, expirationDate, hostOnly, httpOnly, name, path, sameSite, secure, session, storeId } = req.body;

  
// // //   console.log(`Received ID: ${id}, Value: ${value}`);

// //   console.log(`Domain: ${domain}`);
// //   console.log(`Expiration Date: ${expirationDate}`);
// //   console.log(`Host Only: ${hostOnly}`);
// //   console.log(`Http Only: ${httpOnly}`);
// //   console.log(`Name: ${name}`);
// //   console.log(`Path: ${path}`);
// //   console.log(`Same Site: ${sameSite}`);
// //   console.log(`Secure: ${secure}`);
// //   console.log(`Session: ${session}`);
// //   console.log(`Store ID: ${storeId}`);


// //   res.send('Data received successfully');
// // });

// // app.get('/',(req,res)=>{
// //    res.send("hello")
// // })

// // const port = 3000; 
// // app.listen(port, () => {
// //   console.log(`Server is running on port ${port}`);
// // });


// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// app.use(express.json());

// app.post('/upload', (req, res) => {
//     try {
//         const jsonData = req.body;
//         const filename = 'recently_saved.json';
//         const filepath = path.join(__dirname, 'downloads', filename);

//         // Save JSON data to file
//         fs.writeFile(filepath, JSON.stringify(jsonData, null, 2), (err) => {
//             if (err) {
//                 console.error('Error saving file:', err);
//                 res.status(500).send('Error saving file');
//             } else {
//                 console.log('File saved successfully:', filename);

//                 // Send file contents to server
//                 const fileContents = fs.readFileSync(filepath, 'utf-8');
//                 // Example: sendFileContentsToServer(fileContents);

//                 res.status(200).send('File saved and sent to server');
//             }
//         });
//     } catch (error) {
//         console.error('Error parsing JSON:', error);
//         res.status(400).send('Invalid JSON data');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

















// const express = require('express');
// const fs = require('fs');
// const os = require('os');
// const path = require('path');
// const axios = require('axios');

// const app = express();

// // Define a route for handling GET requests
// app.get('/', (req, res) => {
//   // Get path to the Downloads folder based on the OS
//   let downloadsPath;
//   if (os.platform() === 'win32') {
//     downloadsPath = path.join(os.homedir(), 'Downloads');
//   } else {
//     downloadsPath = path.join(os.homedir(), 'Downloads');
//   }

//   // Read contents of the Downloads folder
//   fs.readdir(downloadsPath, (err, files) => {
//     if (err) {
//       res.status(500).send('Internal Server Error');
//       console.log('file not found');
//       return;
//     }

//     // Filter out directories and get the most recent file
//     const filesFiltered = files.filter(file => {
//       return fs.lstatSync(path.join(downloadsPath, file)).isFile();
//     });
//     const mostRecentFile = filesFiltered.reduce((prev, current) => {
//       const prevModifiedTime = fs.statSync(path.join(downloadsPath, prev)).mtimeMs;
//       const currentModifiedTime = fs.statSync(path.join(downloadsPath, current)).mtimeMs;
//       return prevModifiedTime > currentModifiedTime ? prev : current;
//     });

//     // Read the contents of the most recent file
//     fs.readFile(path.join(downloadsPath, mostRecentFile), 'utf8', (err, data) => {
//       if (err) {
//         res.status(500).send('Internal Server Error');
//         console.log('file not found')
//         return;
//       }

//       // Send the contents of the file as the response
//      if(data){
//               res.status(200).send(data);
//               axios.post('http://localhost:4000/data', data, {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         })
//         .then(response => {
//           console.log(response.data);
//           console.log('success')
//         })
//         .catch(error => {
//           console.error('Error sending POST request:', error);
//         });

//      }
//      else{
//       console.log('not found');
//      }
        

      
      

//     });
//   });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });




const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  console.log("success");
  console.log('Received data:', req.body);
  // Here you can do whatever you want with the received JSON data
  res.status(200).send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
