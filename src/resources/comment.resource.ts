import Comment from "../models/comment.model";

const commentResource = {
  resource: Comment,
  options: {
    properties: {
      snippet: {
        type: "reference",
        reference: "Snippet",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      owner: {
        type: "reference",
        reference: "User",
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      content: {
        type: "textarea",
        props: { rows: 5 },
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
      replies: {
        type: "reference",
        reference: "Comment",
        isArray: true,
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
      likes: {
        type: "reference",
        reference: "User",
        isArray: true,
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      dislikes: {
        type: "reference",
        reference: "User",
        isArray: true,
        isVisible: { list: true, filter: true, show: true, edit: false },
      },
      syntax: {
        type: "reference",
        reference: "Syntax",
        isVisible: { list: true, filter: true, show: true, edit: true },
      },
    },
  },
};

export default commentResource;
