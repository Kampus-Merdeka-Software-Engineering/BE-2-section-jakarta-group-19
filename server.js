const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors())

// nambah router
const allRouter = require("./routes");

const PORT = process.env.PORT || 3000;

server.use(express.json());
server.use(allRouter);

server.listen(PORT, () => {
  console.log("server running on port", PORT);
});

//server.get("/api",(request, response) => {
   // response.status(200).json({
       // data: {},
       // message: "Succesfully retrieved inda"
    //});
//});





server.listen(PORT, () =>{
    console.log("server running on port", PORT);
})