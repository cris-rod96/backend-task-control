import express from "express";
import cors from "cors";
import morgan from "morgan";

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

export default server;
