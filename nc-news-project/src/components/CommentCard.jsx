import React, { useEffect } from "react";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { MdDelete } from "react-icons/md";
import { deleteComment } from "../api";
const CommentCard = ({ commentData }) => {
  const { username } = useContext(UserContext);
  const comment_id = commentData.comment_id;
  const [deleted, setDeleted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
      if (deleted) {
      deleteComment(comment_id).then((response) => {
        setHidden(true);
        setDeleted(false);
      });
    }
  }, [deleted]);

  return (
    <>
      <span
        style={{
          display: hidden ? "inline-block" : "none",
          width: "300px",
          border: "solid",
        }}
      >
        <p style={{ textAlign: "center" }}>Comment deleted successfully. Reload by pressing the refresh button below</p>
        <button
          style={{ margin: "20px" }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh
        </button>
      </span>

      <section
        className="comment-card"
        style={{ display: hidden ? "none" : "inline-flex" }}
      >
        <p>{commentData.body}</p>
        <h5>Votes: {commentData.votes}</h5>
        <h4>
          {commentData.author} {commentData.created_at.substring(0, 10)}
        </h4>
        <span
          onClick={() => {
            setWarning(true);
          }}
          style={{
            display: commentData.author === username ? "inline-flex" : "none",
            marginLeft: "20px",
          }}
        >
          <MdDelete fontSize="2rem" color="red" />
          <p style={{ color: "red" }}>Delete</p>
        </span>
        <span style={{ display: warning ? "block" : "none" }}>
          <p>Are you sure you want to delete this comment?</p>
          <button
            onClick={() => {
              setDeleted(true), setWarning(false);
            }}
          >
            Yes
          </button>
          <button
            onClick={() => {
              setWarning(false);
            }}
          >
            No
          </button>
        </span>
      </section>
    </>
  );
};

export default CommentCard;
