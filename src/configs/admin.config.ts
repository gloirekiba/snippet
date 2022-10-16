import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

import snippetResource from "../resources/snippet.resource";
import userResource from "../resources/user.resource";

AdminJS.registerAdapter({ Database, Resource });

const admin = new AdminJS({
  resources: [userResource, snippetResource],
  rootPath: "/admin",
});

export default admin;
