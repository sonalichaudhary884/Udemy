export default function TabButton({ children, onSelect }) {
  console.log("TABBUTTON COMPONENT EXECUTING");

  return (
    <li>
      <button className="active" onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
