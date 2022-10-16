import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

import userResource from "../resources/user.resource";

AdminJS.registerAdapter({ Database, Resource });

const adminConfig = new AdminJS({
  resources: [userResource],
  rootPath: "/admin",
});

export default adminConfig;
