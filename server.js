//khai bảo port và khỏi động server

const app = require("./src/app");

const PORT = 3055;
const server = app.listen(PORT,() => {
    console.log('WSV eCommerce start with port ' + PORT);
});

//phương thức quy trình 
process.on('SIGINT',() => {
    server.close(() => console.log('Exit server Express'))
    
})