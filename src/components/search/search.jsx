import { useState, useContext } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import GithubContext from "../../contexts/GitHub/githubContext";

import "./search.css"

function Search() {
  const { searchUsers, clearUsers } = useContext(GithubContext);
  const [username, setUsername] = useState("");

  const onChangeHandler = (e) => setUsername(e.target.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim()) {
      searchUsers(username);
      setUsername("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="search-form">
      <div className="search-row">
        <InputText
          type="text"
          value={username}
          onChange={onChangeHandler}
          placeholder="Username"
          className="search-input"
        />
        <Button label="Search" className="search-button" type="submit" />
        <Button label="Clear" className="clear-button" onClick={clearUsers} type="button" />
      </div>
    </form>
  );
}

export default Search;