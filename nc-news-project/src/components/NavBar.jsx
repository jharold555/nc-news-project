import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../api";
import { IoMdHome } from "react-icons/io";

const NavBar = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then((response) => {
      setTopics(response.data.topics);
    });
  }, []);
  return (
    <div className="nav-bar">
      <span>
        <Link to={"/"}>
          <IoMdHome size="2rem" />
          <h3
            style={{
              color: "black",
              fontWeight: "bolder",
              display: "inline-flex",
            }}
          >
            Home
          </h3>
        </Link>
      </span>

      {topics.map((topic) => {
        const topicName =
          topic.slug.substring(0, 1).toUpperCase() + topic.slug.substring(1);
        return (
          <span key={topic.slug}>
            <Link to={`/articles/topics/${topicName}`}>
              <h3>{topicName}</h3>
            </Link>
          </span>
        );
      })}
    </div>
  );
};

export default NavBar;
