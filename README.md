# sezzle_oa
#how to run
#Configuratoin Requriements:
-Node version >10.14, >12 or >14
-React components, such as 
-socket.io components, such as <socket.io-client> and <react-router-dom>

1. start the server: move to folder <socekt-io-server2> and run <npm install> to install all necessary configurations, then <node app.js> to start the server
2. move to  folder <calculator>, run <npm install> to install all necessary configurations, and run <Npm start> to start the calculator


Open you web browers and move to the webpage on localhost:3000. Calculator will appear there. Open multiple Calculator page to test its socket function.
Socket.io listens on port 4001

Some Known Issues:

Calcualtor does not update/synchronize immediately. Will only sync after few clicks

If encounter this error:
Error: has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

For OSX users, use <open -na Google\ Chrome --args --disable-web-security --user-data-dir=$HOME/profile-folder-name> to open a google chrome that allows CORS policy


