import React, { useEffect } from "react";
import { SlLike, SlDislike } from "react-icons/sl";
import { useState } from "react";
import { patchArticleVotes } from "../api";

const ArticleVoteButton = ({ articleID, articleVotes, setArticleVotes }) => {
  const [reqObj, setReqObj] = useState({});
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      patchArticleVotes(articleID, reqObj);
    }
  }, [reqObj, clicked]);
  return (
    <span >
    <h2 style={{display:'inline', fontSize:'2rem', color: articleVotes > 0 ? 'green' : 'red'}}>{articleVotes}</h2>
    
      <button id='vote' style={{display:'inline', height: '30px'}}
        disabled={clicked}
        onClick={() => {
          setClicked(true);
          setReqObj({ inc_votes: 1 });
          setArticleVotes(articleVotes + 1);
        }}
      >
        <SlLike style={{ width: '25px', height: '25px', opacity: clicked ? 0.5 : 1}}/>
      </button>
      <label>+1</label>
      <button style={{height: '30px'}}
        disabled={clicked}
        onClick={() => {
          setClicked(true);
          setReqObj({ inc_votes: -1 });
          setArticleVotes(articleVotes - 1);
        }}
      >
        <SlDislike style={{ width: '25px', height: '25px', opacity: clicked ? 0.5 : 1}}/>
      </button>
      <label>-1</label>
    </span>
  );
};

export default ArticleVoteButton;
