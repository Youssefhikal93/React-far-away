import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { Stats } from "./Stats";
import { PackingList } from "./PackingList";

function App() {
  const [items, setItems] = useState([]);

  function handelAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handelToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handelClearList() {
    const confirmed = window.confirm("All the list will be deleted ?");
    confirmed && setItems(items.filter(() => false));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItems={handelToggleItem}
        onClearList={handelClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
