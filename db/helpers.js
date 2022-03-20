import mongoose from "mongoose";
export function connectToDb() {
  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const connectToDb = process.env.CONNECTION_STRING
    ? process.env.CONNECTION_STRING
    : "mongodb://127.0.0.1:27017/findADoc";
  return mongoose.connect(connectToDb, opts);
  //   return mongoose.connect("mongodb://127.0.0.1:27017/findADoc", opts);
}

export function disconnectDb() {
  if (mongoose.connection !== 0) {
    return mongoose.disconnect();
  }
}
export async function dropDatabase() {
  mongoose.connection.db.dropDatabase();
}
