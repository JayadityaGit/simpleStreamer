import { Router } from "express";
import {  getStreamsMovie, getStreamsTV, getStuff } from "../Controller/appController";


export const router = Router()


router.post("/details", getStuff)

router.post("/streamMovie", getStreamsMovie)


router.post("/streamTV", getStreamsTV)