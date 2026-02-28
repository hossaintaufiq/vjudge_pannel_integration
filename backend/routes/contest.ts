import { Router } from "express";
import { fetchRanklist } from "../services/vjudge.service";

const router = Router();

router.get("/rank/:constId", async (req, res) => {
    const { contestId } = req.params;
    const data = await fetchRanklist(contestId);
    if (!data) {
       return res.status(500).json({ error: "Failed to fetch ranklist" });
       res.json(data);
    } 
    } ); 

    export default router;