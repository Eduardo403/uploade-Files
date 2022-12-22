import express, { json } from "express";
import fileUpload from "express-fileupload";
const app = express();
app.use(json());
app.use(fileUpload());
app.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "server on home" });
  } catch (error) {}
});
app.post("/upload", (req, res) => {
  console.log(req.files);
});
app.listen(4000);

console.log("Express server listening on port");
