import React, { useState } from "react";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import Footer from "./components/Footer";

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldData) => {
      return [...oldData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldData) => oldData.filter((currData, index) => {
      return index !== id;
    }))
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {addItem.map((value, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={value.title}
            content={value.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default App;
