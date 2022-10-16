import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

import categoryResource from "../resources/category.resource";
import folderResource from "../resources/folder.resource";
import snippetResource from "../resources/snippet.resource";
import userResource from "../resources/user.resource";

AdminJS.registerAdapter({ Database, Resource });

const admin = new AdminJS({
  resources: [categoryResource, folderResource, snippetResource, userResource],
  rootPath: "/admin",
});

export default admin;
