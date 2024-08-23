function SelectSorting({ options, value, onChange }) {
  return (
    <select
      value={value}
      className="h-12 rounded-md border-2 border-fontPrimary bg-primaryColor p-2 text-xl"
      onChange={onChange}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default SelectSorting;
