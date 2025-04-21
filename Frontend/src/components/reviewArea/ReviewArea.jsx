import React, { useState } from "react";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import './reviewArea.css'
const ReviewArea = ({ review, loading }) => {
  return (
    <>
      {loading ? (
        <div className="loading">{review}</div> // Optional: Add a spinner or text
      ) : (
        <div>
          <Markdown rehypePlugins={rehypeHighlight}>{review}</Markdown>
        </div>
      )}
    </>
  );
};

export default ReviewArea;
