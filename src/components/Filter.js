export const Filter = ({ filter, setFilter }) => {
  return (
    <div>
      <label>Search</label>
      <input
        style={{ padding: "5px", marginBottom: "10px", width: "60%" }}
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};
