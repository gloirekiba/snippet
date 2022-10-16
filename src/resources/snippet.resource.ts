import Snippet from "../models/snippet.model";

const snippetResource = {
  resource: Snippet,
  options: {
    properties: {
      title: {
        type: "string",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      owner: {
        type: "reference",
        reference: "User",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      content: {
        type: "textarea",
        props: { rows: 10 },
        isVisible: { list: false, filter: false, show: true, edit: true },
      },
      hits: {
        type: "number",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      syntax: {
        type: "reference",
        reference: "Syntax",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      category: {
        type: "reference",
        reference: "Category",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      tags: {
        type: "array",
        items: { type: "string" },
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      password: {
        type: "string",
        isVisible: { list: false, filter: false, show: false, edit: true },
      },
      createdAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      updatedAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      expiresAt: {
        type: "datetime",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      exposure: {
        type: "string",
        isVisible: { list: true, filter: true, show: true, edit: true },
        availableValues: [
          { value: "public", label: "Public" },
          { value: "private", label: "Private" },
          { value: "unlisted", label: "Unlisted" },
        ],
      },
      folder: {
        type: "reference",
        reference: "Folder",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      burnAfterReading: {
        type: "boolean",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
    },
  },
};

export default snippetResource;
