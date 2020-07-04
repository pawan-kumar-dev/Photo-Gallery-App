import React, { useState ,memo} from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearch] = useState("");
  const updateSearchInput = e => {
    setSearch(e.target.value);
  };
  return (
    <form
      className="search-form"
      onSubmit={e => handleSubmit(e, history, searchEntry)}
    >
      <input
        type="text"
        name="search"
        placeholder="Search Here"
        onChange={updateSearchInput}
        value={searchEntry}
      />
      <button><img className="search" src="search.svg" alt="Search"/></button>
    </form>
  );
};

export default memo(Form);
