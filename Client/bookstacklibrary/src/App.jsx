import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch("http://localhost:8800/admin/bookList")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
    <div className="App">
      {items &&
        items.map((item) => {
          return (
            <div key={Math.random()}>
              {item.id}:
              {item.title}
            </div>
          )
        })}
    </div>
  );
}

export default App;
