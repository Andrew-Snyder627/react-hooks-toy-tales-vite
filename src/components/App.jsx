import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  // State for form (hidden or shown) and toy array from fetch
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  // Fetch all toys when the component mounts
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, []);

  // Toggle the display of toy form when the button is clicked
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  // Adds a new toy to the state when its successfully created
  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  // Removes a toy from the state after it has been deleted from backend
  function handleDeleteToy(id) {
    const updatedToys = toys.filter((toy) => toy.id !== id);
    setToys(updatedToys);
  }

  // Updates toys likes after a successful PATCH request
  function handleLikeToy(updatedToy) {
    const updatedToys = toys.map((toy) =>
      toy.id === updatedToy.id ? updatedToy : toy
    );
    setToys(updatedToys);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer
        toys={toys}
        onDelete={handleDeleteToy}
        onLike={handleLikeToy}
      />
    </>
  );
}

export default App;
