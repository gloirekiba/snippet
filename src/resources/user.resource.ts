import User from "../models/user.model";

const userResource = {
  resource: User,
  options: {
    properties: {
      _id: {
        type: "string",
        isVisible: { list: false, filter: true, show: true, edit: false },
      },
      name: {
        description: "The name of the user",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      email: {
        description: "The email of the user",
        isVisible: { list: false, filter: true, show: true, edit: true },
      },
      avatar: {
        description: "The avatar of the user",
        isVisible: { list: false, filter: true, show: true, edit: true },
      },
      website: {
        description: "The website of the user",
        isVisible: { list: false, filter: true, show: true, edit: true },
      },
      password: {
        description: "The password of the user",
        isVisible: { list: false, filter: false, show: true, edit: false },
      },
      snippets: {
        type: "reference",
        reference: "Snippet",
        description: "The snippets of the user",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      createdAt: {
        description: "The creation date of the user",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        description: "The last update date of the user",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      folders: {
        description: "The folders of the user",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
    },
  },
};

export default userResource;
