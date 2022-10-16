import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

import userResource from "../ressources/user.resource";

AdminJS.registerAdapter({ Database, Resource });

const adminConfig = new AdminJS({
  resources: [userResource],
  rootPath: "/admin",
});

export default adminConfig;
