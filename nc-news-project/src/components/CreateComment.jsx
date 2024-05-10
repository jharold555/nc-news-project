import React, { useEffect, useState, useContext } from "react";
import { postComment } from "../api";
import { UserContext } from "./UserContext";

const CreateComment = ({ comments, setComments, articleID }) => {
  const [commentBody, setCommentBody] = useState("");
  const [placeholder, setPlaceholder] = useState(true);
  const [valid, setValid] = useState(true);
  const [hasSubmit, setHasSubmit] = useState(false);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [isError, setIsError] = useState(false);
  const {username} = useContext(UserContext)
  
  useEffect(() => {
    if (valid && hasSubmit) {
      postComment(articleID, { username: username, body: commentBody }).then(
        (response) => {
          setHasSubmit(false);
          setComments([response.data, ...comments]);
          setCommentBody("");
          setSuccessfulSubmit(true);
        }
      ).catch((error) => {
        setCommentBody("");
        setHasSubmit(false);
        setSuccessfulSubmit(false)
        setIsError(true)
      });
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
      <p style={{ display: isError ? "block" : "none" }}>Username not found. Login to post comment</p>
    </form>
  );
};

export default CreateComment;
