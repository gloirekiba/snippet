import Syntax from "../models/syntax.model";

const syntaxResource = {
  resource: Syntax,
  options: {
    properties: {
      name: {
        type: "string",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      extension: {
        type: "string",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      createdAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
    },
  },
};

export default syntaxResource;
