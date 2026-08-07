//1.Write a function that logs the current file path and directory.(0.5 Grade)
// • Output Example: {File: “/home/user/project/index.js”, Dir: “/home/user/project”} 


// function findThePath() {
//     {
//       console.log(
//         {
//         File: __filename,
//          Dir: __dirname
//         }
//     );
        
//     }   
// }
// findThePath();


//2. Write a function that takes a file path and returns its file name.(0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf "


// const path = require('path');

// function filename(){
//     return path.basename('C:\\Users\\Yahya\\Desktop\\Node\\app.js');
// }

// console.log(filename());




// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example:{ dir:"/folder", name:"app", ext:".js"}
// • Output Example: “/folder/app.js”




// const path = require('path');

// function buildPath(){
//    const file = {
//         dir: "/folder",
//         name: "app",
//         ext: ".js"
//    }
//    return path.join(file.dir, file.name + file.ext);
// }
// console.log(buildPath());


// 4. Write a function that returns the file extension from a given file path.(0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”


// const path = require("path");

// function getFileExtension(filePath){
//     return path.extname(filePath);
// }
// console.log(getFileExtension("/docs/readme.md"));


// 5. Write a function that parses a given path and returns its name and ext.(0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example:{Name: “main”, Ext:“.js”}

// const path = require("path");

// function parsesPath(filePath){
//     const parsedPath = path.parse(filePath);
//     return{
//         name : parsedPath.name,
//         ext : parsedPath.ext
//     }
// }
// console.log(parsesPath("/home/app/main.js"));

// 6. Write a function that checks whether a given path is absolute.(0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true


// path = require("path");

// function CheckTHeWether(filePath){
// const isAbsolute = path.isAbsolute(filePath);
// return path.isAbsolute(filePath);
// }
// console.log(CheckTHeWether("/home/user/file.txt"));



// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js

// const path = require("path");

// function joinSegments(...segments){
    // const joinedPath = path.join(...segments)
    // return joinedPath;
// }
// console.log(joinSegments("src","components", "App.js"));


// 8. Write a function that resolves a relative path to an absolute one.(0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js

// const path = require("path");

// function resolveRelativePath(relativePath){
//     return path.resolve(relativePath);
// }
// console.log(resolveRelativePath("./index.js"));

// 9. Write a function that joins two paths.(0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt

// const path = require("path");

// function joinTwoPaths(path1, path2){
//     return path.join(path1, path2);
// }
// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));


// 10. Write a function that deletes a file asynchronously.(0.5 Grade)
// • Input Example: /path/to/file.txt
// • Output Example: The file.txt is deleted.

// const fs = require("fs");

// function deleteFileAsync(filePath){
//     fs.unlink(filePath, (err)=>{
//         if(err){
//             console.log(`Error deleting file: ${err}`);
//         } else {
//             console.log(`File deleted successfully: ${filePath}`);
//         }
        
//     })
// }

// deleteFileAsync("hello.txt");


// 11. Write a function that creates a folder synchronously.(0.5 Grade)
// • Output Example: “Success”

// const fs = require("fs");

// function createFolder(folderPath){
//     fs.mkdirSync(folderPath);
//     console.log("Success");
// }
// createFolder("newFolder");


// 12. Create an event emitter that listens for a "start" event and logs a welcome message.(0.5 Grade)
// • Output Example: Welcome event triggered!

// const { EventEmitter } = require("events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("start",()=>{
//     console.log("Welcome event triggered!");
    
// })
// eventEmitter.emit("start");



// 13. Emit a custom "login" event with a username parameter.(0.5 Grade)
// • Input Example: "Ahmed"
// • Output Example:“User logged in: Ahmed”

// const { EventEmitter} = require("events");

// const eventEmitter = new EventEmitter();

// eventEmitter.on("Login",(username)=>{
//     console.log(`User logged in ${username}`)
// })
// eventEmitter.emit("Login",": Ahmed")



// 14. Read a file synchronously and log its contents.(0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: the file content => “This is a note.”


// const fs = require("fs");

// function readFile(filePath) {
//     const data = fs.readFileSync(filePath , "utf-8");
//     console.log(data);
// }

// readFile('./notes.txt')


//15. Write asynchronously to a file.(0.5 Grade)
// • Input: path: "./async.txt", content: "Async save"


// const fs = require("fs")

// function writeFile(path , content) {
//     fs.writeFile(path,content,(err)=>{
//         if(err)
//              {
//                 console.log("ther is err here");
//              }
//              else{
//              console.log("File saved successfully");
//              }
//     })
// }
// writeFile("./async.txt" , "Async save");


// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true

// const fs = require("fs")

// function checkFolder(check) {
//     return fs.existsSync(check)
// }
// console.log(checkFolder("./notes.txt"));



// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: {Platform: “win32”, Arch: “x64”}

// const os = require("os");
// const { arch } = require("process");
// function getSystemInfo(params) {
//     return{
//         platform: os.platform(),
//         arch: os.arch(),
//     }
    
// }
// console.log(getSystemInfo());


// 18. Use a readable stream to read a file in chunks and log each chunk. (0.5 Grade)
// • Input Example: "./big.txt"
// • Output Example: log each chunk

// const fs = require("fs")

// const stream = fs.createReadStream("./big.txt")

// stream.on("data", (chunk)=>{
//     console.log(chunk);  
// });
// console.log("log each chunk");


// 19. Use readable and writable streams to copy content from one file to another. (0.5 Grade)
// • Input Example: "./source.txt", "./dest.txt"
// • Output Example: File copied using streams



// const fs = require("fs");

// const readStream = fs.createReadStream("./source.txt");

// const writeStream = fs.createWriteStream("./dest.txt");

// readStream.pipe(writeStream);

// console.log("File copied using streams");



// 20. Create a pipeline that reads a file, compresses it, and writes it to another file. (0.5 Grade)
// • Input Example: "./data.txt", "./data.txt.gz"

// const fs = require("fs");
// const zlib = require("zlib");

// const read = fs.createReadStream("./data.txt");

// const gzip = zlib.createGzip();

// const write = fs.createWriteStream("./data.txt.gz");

// read.pipe(gzip).pipe(write);




/////



// Part2: Simple CRUD Operations Using HTTP (5 Grades)
// • For all the following APIs, you must use the fs module to read and write data from a JSON file (e.g., users.json).
// • Do not store or manage data using arrays

// 1)Create an API that adds a new user to your users stored in a JSON file (1 Grade)
// (ensure that the email of the new user doesn’t exist before)
// URL: POST /user






// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "POST" && req.url === "/user") {
//         let body = "";

//         req.on("data", (chunk) => {
//             body += chunk;
//         });

//         req.on("end", () => {
//             if (!body) {
//                 res.writeHead(400, { "Content-Type": "application/json" });
//                 return res.end(JSON.stringify({ error: "No data provided" }));
//             }

//             const newUser = JSON.parse(body);

            
//             fs.readFile("users.json", "utf8", (err, data) => {
//                 let users = [];
                
//                 if (!err && data) {
//                     users = JSON.parse(data);
//                 }

                
//                 const emailExists = users.some(user => user.email === newUser.email);
//                 if (emailExists) {
//                     res.writeHead(409, { "Content-Type": "application/json" });
//                     return res.end(JSON.stringify({ error: "Email already exists" }));
//                 }

            
//                 users.push(newUser);

            
//                 fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
//                     if (err) {
//                         res.writeHead(500, { "Content-Type": "application/json" });
//                         return res.end(JSON.stringify({ error: "Failed to save user" }));
//                     }

//                     res.writeHead(201, { "Content-Type": "application/json" });
//                     res.end(JSON.stringify({
//                         message: "User created successfully!",
//                         data: newUser
//                     }));
//                 });
//             });
//         });
//     } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ error: "Route not found" }));
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });






// 2)Create an API that updates an existing user's name, age, or email by their ID. The user ID should be retrieved
// from the URL (1 Grade)
// Note: Remember to update the corresponding values in the JSON file
// o URL: PATCH /user/id

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "PATCH" && req.url.startsWith("/user/")) {
//         const id = parseInt(req.url.split("/")[2]);
//         let body = "";

//         req.on("data", (chunk) => {
//             body += chunk;
//         });

//         req.on("end", () => {
//             const updatedData = JSON.parse(body);

//             fs.readFile("users.json", "utf8", (err, data) => {
//                 let users = JSON.parse(data);
//                 const user = users.find(user => user.id === id);

//                 if (!user) {
//                     res.writeHead(404, { "Content-Type": "application/json" });
//                     res.end(JSON.stringify({
//                         message: "User ID not found."
//                     }));
//                 } else {
//                     if (updatedData.name) user.name = updatedData.name;
//                     if (updatedData.age) user.age = updatedData.age;
//                     if (updatedData.email) user.email = updatedData.email;

//                     fs.writeFile("users.json", JSON.stringify(users, null, 2), () => {
//                         const updatedField = Object.keys(updatedData)[0];
//                         res.writeHead(200, { "Content-Type": "application/json" });
//                         res.end(JSON.stringify({
//                             message: `User ${updatedField} updated successfully.`
//                         }));
//                     });
//                 }
//             });
//         });
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });



// 3)Create an API that deletes a User by ID. The user id should be retrieved from the URL (1 Grade)
// Note: Remember to delete the user from the file
// o URL: DELETE /user/id


// const http = require("http");
// const fs = require("fs");






// const server = http.createServer((req, res) => {
//     if (req.method === "DELETE" && req.url.startsWith("/user/")) {
//         const id = parseInt(req.url.split("/")[2]);

//         fs.readFile("users.json", "utf8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "application/json" });
//                 return res.end(JSON.stringify({ error: "Failed to read file" }));
//             }

//             let users = data ? JSON.parse(data) : [];
//             const index = users.findIndex(u => u.id === id);

//             if (index === -1) {
//                 res.writeHead(404, { "Content-Type": "application/json" });
//                 return res.end(JSON.stringify({ message: "User ID not found." }));
//             }

//             users.splice(index, 1);

//             fs.writeFile("users.json", JSON.stringify(users, null, 2), (err) => {
//                 if (err) {
//                     res.writeHead(500, { "Content-Type": "application/json" });
//                     return res.end(JSON.stringify({ error: "Failed to delete user" }));
//                 }
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({ message: "User deleted successfully." }));
//             });
//         });
//     } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Route not found." }));
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });






// 4)Create an API that gets all users from the JSON file. (1 Grade)
// o URL: GET /user
// input

// output

// [ { "id": 1, "name": "User 1", "age": 27, "email": "user@email.com" } ]







// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "GET" && req.url === "/user") {
//         fs.readFile("users.json", "utf8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "application/json" });
//                 return res.end(JSON.stringify({ error: "Failed to read file" }));
//             }

//             const users = data ? JSON.parse(data) : [];
//             res.writeHead(200, { "Content-Type": "application/json" });
//             res.end(JSON.stringify(users));
//         });
//     } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Route not found." }));
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });






// 5)Create an API that gets User by ID. (1 Grade)
// o URL: GET /user/:id

// Output:
// input
// output
// /user/1
// {"id": 1, "name": "User 1", "age": 27, "email": "user@email.com" }
// /user/99
// { "message": "User not found." }





// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.method === "GET" && req.url.startsWith("/user/")) {
//         const id = parseInt(req.url.split("/")[2]);

//         fs.readFile("users.json", "utf8", (err, data) => {
//             if (err) {
//                 res.writeHead(500, { "Content-Type": "application/json" });
//                 return res.end(JSON.stringify({ error: "Failed to read file" }));
//             }

//             const users = data ? JSON.parse(data) : [];
//             const user = users.find(u => u.id === id);

//             if (user) {
//                 res.writeHead(200, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify(user));
//             } else {
//                 res.writeHead(404, { "Content-Type": "application/json" });
//                 res.end(JSON.stringify({ message: "User not found." }));
//             }
//         });
//     } else {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         res.end(JSON.stringify({ message: "Route not found." }));
//     }
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });