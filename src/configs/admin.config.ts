import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

AdminJS.registerAdapter({ Database, Resource });

import User from "../models/user.model";

const adminConfig = new AdminJS({
  resources: [User],
  rootPath: "/admin",
});

export default adminConfig;
