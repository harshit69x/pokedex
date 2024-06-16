import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchValue);  // Ensure onSubmit is called as a function with searchValue
    setSearchValue('');     // Optionally clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search</label>
      <input
        id="search"
        type="search"
        pattern=".*\S.*"
        required
        value={searchValue}
        onChange={handleChange}
        placeholder="Enter Pokemon name"
      />
      <button type="submit">Search</button> {/* Add a submit button for form */}
      <span className="caret"></span>
    </form>
  );
};

export default SearchForm;
