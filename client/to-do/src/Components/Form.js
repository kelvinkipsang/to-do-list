import React, { useState } from "react";
import { CREATE_TASK_MUTATION } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";

function Form() {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  const [createTask, { error }] = useMutation(CREATE_TASK_MUTATION);

  const addTask = () => {
    createTask({
      variables: {
        title: title,
        about: about,
        
      },
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="About"
        onChange={(e) => {
          setAbout(e.target.value);
        }}
      />
      
      <button onClick={addTask}>Create Task</button>
    </div>
  );
}

export default Form;
