import admin from "../configs/admin.config";
import AdminJSExpress from "@adminjs/express";

const adminRouter = AdminJSExpress.buildRouter(admin);

export default adminRouter;
