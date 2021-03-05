import React from "react";

const List = (props) => {
  const { repos } = props;
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  return (
    <ul>
      <h2 className="list-head">A few great selections</h2>
      {repos.map((repo) => {
        return (
          <li key={repo.id} className="list">
            <span className="repo-text">{repo.id} </span>
            <span className="repo-text">{repo.store_name} </span>
            <span className="repo-text">{repo.location} </span>
            {/* <span className="repo-description">{repo.created_at}</span> */}
          </li>
        );
      })}
    </ul>
  );
};
export default List;
