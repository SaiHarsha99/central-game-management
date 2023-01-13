import React from 'react';


export function User() {
    const [results, setResults] = React.useState(0);

    const handleSearch = (event) => {
    };

  return (
    <div>
      <div className="search-input">
        <label>Add User</label>
        <input onChange={handleSearch} type="text" placeholder="Name"/>
      </div>

    </div>
  );
}