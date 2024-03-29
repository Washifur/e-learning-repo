import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { getAllCourses } from "../controllers/course.controller";
const orderRouter = express.Router();

orderRouter.post("/create-order", isAuthenticated, createOrder);
orderRouter.post("/get-orders", isAuthenticated, authorizeRoles("admin"), getAllOrders);

export default orderRouter;