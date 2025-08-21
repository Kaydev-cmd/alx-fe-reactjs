import React from "react";
import { useQuery, QueryClient } from "@tanstack/react-query";

const PostsComponent = () => {
  const queryClient = new QueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  // console.log("Data fetched: ", data);

  const handleRefetch = () => {
    queryClient.invalidateQueries(["posts"]);
    // console.log("Refetching data...", data);
  };

  return (
    <>
      <h1 className="mb-8">Posts</h1>
      <div className="text-white">
        {data.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-2 border p-4 mb-4 rounded-lg"
          >
            <h1 className="text-end">{post.userId}</h1>
            <p className="font-bold text-lg">Post ID: {post.id}</p>
            <h2 className="text-xl font-semibold">Post Title: {post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
      <button onClick={handleRefetch}>Refetch</button>
    </>
  );
};

export default PostsComponent;
