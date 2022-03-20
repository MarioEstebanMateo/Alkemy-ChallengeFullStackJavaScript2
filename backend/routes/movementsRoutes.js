import express from "express";
const router = express.Router();
import {
  saveMovement,
  getMovements,
  getMovement,
  editMovement,
  deleteMovement,
  getBalance,
} from "../controllers/movementsController.js";

router.get("/", (req, res) => {
  res.send("Api made by Mario Esteban Mateo for Alkemy Challenge");
});

// Add movement on DB
router.post("/add", saveMovement);

// Get movements from DB
router.get("/movements", getMovements);

// Get a single movement by id
router.get("/movement/:id", getMovement);

// Edit movement on DB
router.put("/update/:id", editMovement);

// Delete movement on DB
router.delete("/delete/:id", deleteMovement);

// Get Balance
router.get("/balance", getBalance);

export default router;
