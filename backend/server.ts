import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
// import {fetchRanklist} from "./services/vjudge.service";
// import {fatchRanklist} from "./services/vjudge.service"; 
import { fetchRanklist } from "./services/vjudge.service";
import contestRoutes from "./routes/contest";


const app = express() 
app.use(cors()); 
app.use("/api/contest", contestRoutes);

const server = http.createServer(app);
const io=new Server(server,{
    cors:{origin:"*"}
})

const PORT=process.env.PORT || 5000;

app.get("/", (req,res)=> res.send("Nsu Online Judge Backend Server is Running..."))

// websocket connection
io.on("connection", (socket)=>{
    console.log("New client connected: ", socket.id);
    socket.on("disconnect", ()=>{
        console.log("Client disconnected: ", socket.id);
    })
})

// polling from vjudge in every 30 seconds 

const CONTEST_ID="test contest id "; 

const pollVjudge=async()=>{
    const rankData = await fetchRanklist(CONTEST_ID);
    if(rankData){
        io.emit("ranklistUpdate", rankData); //sending live updated to the frontend 
    }
}

setInterval(pollVjudge, 30000); 
pollVjudge(); //initial call and fatchind data

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})