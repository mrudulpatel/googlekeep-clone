import React from "react";
import { DeleteOutlineOutlined } from "@mui/icons-material";

const Note = (props) => {
  const deleteNote = () => {
      props.deleteItem(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button className="btn" onClick={deleteNote}>
          <DeleteOutlineOutlined className="deleteIcon" />
        </button>
      </div>
    </>
  );
};

export default Note;
