import express, { Router, Request, Response } from "express";

import { createUser } from "../controllers/user.controller";

const router: Router = express.Router();

router.post("/create", createUser);

export default router;
