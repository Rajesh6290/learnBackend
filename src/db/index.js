import mongoose from "mongoose";
import { config } from "dotenv";
config();

const connectDB = async () => {
  try {
    const res = await mongoose.connect(
      `${process.env.DB_URI}/${process.env.DB_NAME}`
    );
    console.log(`mongodb connect at ${process.env.PORT}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default connectDB;
