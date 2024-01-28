import express from "express";
import cors from "cors";
import helmet from "helmet"; // protects connection
import path from "path";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

function sendHomePage(req, res) {
    res.sendFile(path.resolve() + "/index.html");
}

function sendPage2(req, res) {
    res.sendFile(path.resolve() + "/index2.html");
}
app.route("/").get(sendHomePage); // get something have to give something

app.route("/page2").get(sendPage2);

const HOSTNAME = "localhost"; 

const PORT = 3002; // 3000s convention for development, opens the connection

function running() {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`); // backtick for blue calls
}

app.listen(PORT, HOSTNAME, running);

