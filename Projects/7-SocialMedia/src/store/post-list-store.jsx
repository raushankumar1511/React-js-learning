import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  increaseLikes: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }

  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  if (action.type === "INCREASE_LIKES") {
    newPostList = currPostList.map((post) =>
      post.id === action.payload.postId
        ? { ...post, reactions: post.reactions + 1 }
        : post
    );
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: 0,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const increaseLikes = (postId) => {
    dispatchPostList({
      type: "INCREASE_LIKES",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        increaseLikes: increaseLikes,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Weekend Hike",
    body: "Just completed a hike in the mountains. The view from the top was breathtaking! It's amazing to disconnect from technology and reconnect with nature.",
    reactions: 5,
    userId: "user-3",
    tags: ["hiking", "mountains", "nature"],
  },
  {
    id: "2",
    title: "Cooking a New Recipe",
    body: "Tried a new recipe for pasta today. It turned out to be delicious! Can't wait to cook more and explore different cuisines.",
    reactions: 7,
    userId: "user-4",
    tags: ["cooking", "recipe", "pasta"],
  },
  {
    id: "3",
    title: "Yoga and Meditation",
    body: "Started my day with yoga and meditation. It really helps in keeping the mind calm and focused. A great way to start the day!",
    reactions: 4,
    userId: "user-5",
    tags: ["yoga", "meditation", "mindfulness"],
  },
  {
    id: "4",
    title: "Exploring a New City",
    body: "Visited a new city this weekend. The architecture was stunning, and the food was fantastic. Looking forward to more travel adventures!",
    reactions: 6,
    userId: "user-6",
    tags: ["travel", "city", "exploration"],
  },
  {
    id: "5",
    title: "Book Review: The Alchemist",
    body: "Just finished reading 'The Alchemist'. The story is so inspiring and full of life lessons. Highly recommend it to everyone.",
    reactions: 8,
    userId: "user-1",
    tags: ["book", "The Alchemist", "inspiration"],
  },
  {
    id: "6",
    title: "Tech Conference Experience",
    body: "Attended a tech conference today. Got to learn about the latest trends in AI and machine learning. Networking with like-minded people was a bonus!",
    reactions: 10,
    userId: "user-2",
    tags: ["tech", "AI", "conference"],
  },
];
export default PostListProvider;
