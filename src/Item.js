export function Item({ itemObj, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        onChange={() => onToggleItems(itemObj.id)}
        type="checkbox"
        value={itemObj.packed}
      ></input>
      <span type="check-box"></span>
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button onClick={() => onDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
