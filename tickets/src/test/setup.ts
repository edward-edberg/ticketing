import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import request from "supertest";
import { app } from "../app";
import jwt from "jsonwebtoken";

declare global {
  var signin: () => string[];
}

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdfjkl;";

  mongo = new MongoMemoryServer();
  await mongo.start();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongo.stop();
  await mongoose.connection.close();
});

global.signin = () => {
  // Build a JWT payload
  const payload = {
    // id: "628768e1e776587fc29e266c",
    id: new mongoose.Types.ObjectId().toHexString(),
    email: "go@go.com",
  };
  // Create JWT
  const token = jwt.sign(payload, process.env.JWT_KEY!);

  // build session
  const session = { jwt: token };
  // Turn that session into JSON
  const sessionJSON = JSON.stringify(session);
  // Take JSON and encode it as bse64
  const base64 = Buffer.from(sessionJSON).toString("base64");

  return [`session=${base64}`];
};
