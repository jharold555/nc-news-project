import React from "react";
import { useEffect, useState } from "react";
import { getComments } from "../api";
import CommentCard from "./CommentCard";

const CommentSection = ({ articleID, count }) => {
  const [comments, setComments] = useState([]);
  const [queryLimit, setQueryLimit] = useState(10);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    setPage(1);
  }, [queryLimit]);
  
  useEffect(() => {
    getComments(articleID, queryLimit, page).then((response) => {
      setComments(response.data.comments);
    });
  }, [articleID, queryLimit, page]);
  

  const pageIterationButtons = () => {
    const num = count / queryLimit;
    const pages = Math.ceil(num);

    const pagesArray = [];
    for (let i = pages; i > 0; i--) {
      pagesArray.push(
        <button
          key={i}
          onClick={() => {
            setPage(i);
          }}
          style={{
            borderColor: "white",
            backgroundColor: "white",
            color: "blue",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          {i}
        </button>
      );
    }
    return pagesArray;
  };
  return (
    <section className="comments-section">
      <h1 className="comments-header">Comments</h1>
      <span className="set-limit">
        <label htmlFor="limit">Show per page:</label>
        <button onClick={() => setQueryLimit(5)}> 5</button>
        <button onClick={() => setQueryLimit(10)}>10</button>
        <button onClick={() => setQueryLimit(20)}>20</button>
      </span>
      <span
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          padding: "4%",
        }}
      >
        {pageIterationButtons(count, queryLimit).map((tag) => {
          return tag;
        })}
        <label>Page no.</label>
      </span>

      {comments.map((comment) => {
        return <CommentCard commentData={comment} />;
      })}
    </section>
  );
};

export default CommentSection;
