import React from "react";

const MainBlock = ({topic}) => {
  return (
      <div className="mt-5">
        <h1 className="text-center fw-bold">{topic.title}</h1>
        <p className="text-center fs-4">
          {topic.content}
        </p>
      </div>
  );
};

export default MainBlock;
