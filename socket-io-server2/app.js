//this is server side
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server);
const shared_history = []
// let interval;




// socket.emit("ferret", "tobi", (data) => {
//     console.log(data); // data will be "woot"
//   });
  
//   // server:
//   //  io.on("connection", (socket) => {
//   //    socket.on("ferret", (name, fn) => {
//   //      fn("woot");
//   //    });
//   //  });

// io.on('connection', function (socket) {
//     socket.on('chat', function (data) {
//       var op = false;
//       if( data.id == '1234' ){
//          op = 'yes';
//       }else{
//          op = 'no';
//       } 
//       socket.emit('result', { hello: op });
//     });
//   });


io.on("connection", (socket) => {
  console.log("New client connected");

     socket.on("send_history", (received, fn) => {
        shared_history.unshift(received);
        if(shared_history.length>=10){
            shared_history.pop();
        }
       fn(shared_history);
       
       console.log("server side received data is", received);
       console.log("shared_history  is", shared_history);
     });


//   if (interval) {
//     // console.log("interval is", interval)
//     clearInterval(interval);
//   }

//   interval = setInterval(() => getApiAndEmit(socket), 1000);
// //   console.log("second interval is", interval)



  socket.on("disconnect", () => {
    console.log("Client disconnected");
    
  });
});

const getApiAndEmit = socket => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client

  socket.emit("FromAPI", response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));