import Category from "../models/category.model";

const categoryResource = {
  resource: Category,
  options: {
    properties: {
      name: {
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

export default categoryResource;
