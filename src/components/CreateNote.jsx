import React, { useState } from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setNote((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const dontExpandIt = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={dontExpandIt}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              placeholder="Title"
              autoComplete="off"
              value={note.title}
              onChange={inputChange}
            />
          ) : null}
          <textarea
            rows=""
            value={note.content}
            name="content"
            onChange={inputChange}
            cols=""
            placeholder="Write a Note...."
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button onClick={addEvent}>
              <Add className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
};

export default CreateNote;
