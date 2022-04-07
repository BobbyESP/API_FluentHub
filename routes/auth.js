import jsonwebtoken from "jsonwebtoken";
import express from "express";
import bcrypt from "bcrypt";

var validToken;

const Router = express.Router();

