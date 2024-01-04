import { config } from "dotenv";
config();
import { app } from "./app.js";
import connectDB from "./db/index.js";
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Port running at ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
