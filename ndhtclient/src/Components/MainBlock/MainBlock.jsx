import React from "react";

const MainBlock = ({topic, className}) => {
  return (
      <div className={className}>
        <h1 className="text-center fw-bold">{topic.title}</h1>
        <p className="text-center fs-5">
          {topic.content}
        </p>
      </div>
  );
};

export default MainBlock;
