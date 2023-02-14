import express from "express";
const router = express.Router();

import authRoutes from "./auth-routes";
import adminRoutes from "./admin-routes";
import categoriesRoutes from "./categories-routes";
import commentsRoutes from "./comments-routes";
import profileRoutes from "./profile-routes";
import storiesRoutes from "./stories-routes";
import videosRoutes from "./videos-routes";

router.use("/auth", authRoutes);
router.use("/api", adminRoutes);
router.use("/api", categoriesRoutes);
router.use("/api", commentsRoutes);
router.use("/api", profileRoutes);
router.use("/api", storiesRoutes);
router.use("/api", videosRoutes);

export default router;