export function Stats({ items }) {
  const totalPackedIteams = items.filter((item) => item.packed).length;
  const percentage = (totalPackedIteams / items.length).toFixed(2) * 100;
  return (
    <footer className="stats">
      {items.length > 0 ? (
        <em>
          {items.length === totalPackedIteams
            ? `You got everything! Ready to go ✈️`
            : `You have ${items.length} items on your list, and you already packed 
          ${totalPackedIteams} item (${percentage}%)💼`}
        </em>
      ) : (
        <em>Start to pack your Stuff 🚀</em>
      )}
    </footer>
  );
}
