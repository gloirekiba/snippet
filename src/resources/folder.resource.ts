import Folder from "../models/folder.model";

const folderResource = {
  resource: Folder,
  options: {
    properties: {
      name: {
        type: "string",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      owner: {
        type: "reference",
        reference: "User",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      createdAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      snippets: {
        type: "reference",
        reference: "Snippet",
        // type: "array",
        // items: { type: "reference", reference: "Snippet" },
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
    },
  },
};

export default folderResource;
