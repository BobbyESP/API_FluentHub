import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({limit: "100mb"}));

const authRouter = require("./routes/auth");
const credentialsRouter = require("./routes/credentials");

app.use("/api/v2/credentials", credentialsRouter);
app.use("/api/v2/auth", authRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });