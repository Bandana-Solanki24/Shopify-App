import React from "react";

function FilterSection() {
  const handleInput = () => {};
  return (
    <div>
      <form onSubmit={(e) => e.target.value}>
        <input type="text" name="text" onChange={handleInput} />
      </form>
    </div>
  );
}

export default FilterSection;
