import express from "express";
import { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.route("/create").post(createEmployee);
router.route("/").get(getEmployees);
router.route("/:id").get(getEmployeeById).put(updateEmployee).delete(deleteEmployee);

export default router;
