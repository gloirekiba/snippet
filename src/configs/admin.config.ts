import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

AdminJS.registerAdapter({ Database, Resource });

const adminConfig = new AdminJS({
  databases: [],
  rootPath: "/admin",
});

export default adminConfig;
