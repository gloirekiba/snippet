import AdminJSExpress from "@adminjs/express";

import admin from "../configs/admin.config";

const adminRouter = AdminJSExpress.buildRouter(admin);

export default adminRouter;
