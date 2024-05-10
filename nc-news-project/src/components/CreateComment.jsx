import React, { useEffect, useState } from "react";
import { postComment } from "../api";

const CreateComment = ({ comments, setComments, articleID }) => {
  const [commentBody, setCommentBody] = useState("");
  const [placeholder, setPlaceholder] = useState(true);
  const [valid, setValid] = useState(true);
  const [hasSubmit, setHasSubmit] = useState(false);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  useEffect(() => {
    if (valid && hasSubmit) {
      postComment(articleID, { username: "tickle122", body: commentBody }).then(
        (response) => {
          setHasSubmit(false);
          setComments([response.data, ...comments]);
          setCommentBody("");
          setSuccessfulSubmit(true);
        }
      );
    } else if (!valid && hasSubmit) {
      setHasSubmit(false);
    }
  }, [hasSubmit, articleID, commentBody]);
  const handleSubmit = (e) => {
    e.preventDefault();
    checkValid();
    setHasSubmit(true);
  };

  const checkValid = () => {
    if (commentBody === "") {
      setValid(false);
      setPlaceholder(true);
    } else {
      setValid(true);
    }
  };
  const handleChange = (e) => {
    setCommentBody(e.target.value);
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        name="comment"
        value={commentBody}
        placeholder={placeholder ? "Enter your comment here..." : ""}
        onChange={handleChange}
        onBlur={() => {
          setPlaceholder(true);
        }}
        onFocus={() => {
          setPlaceholder(false), setSuccessfulSubmit(false);
        }}
      />
      <button type="submit" disabled={hasSubmit}>
        Submit Comment
      </button>
      <p
        style={{
          display: valid ? "none" : "block",
          color: "red",
          fontSize: "0.5rem",
          fontStyle: "italic",
        }}
      >
        Comment cannot be empty!
      </p>
      <p style={{ display: successfulSubmit ? "block" : "none" }}>
        Comment posted successfully!
      </p>
    </form>
  );
};

export default CreateComment;
