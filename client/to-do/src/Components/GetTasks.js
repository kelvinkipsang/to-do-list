import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_TASKS } from "../GraphQL/Queries";

function GetTasks() {
  const { error, loading, data } = useQuery(LOAD_TASKS);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (data) {
      setTasks(data.getAllTask);
    }
  }, [data]);

  return (
    <div>
      { {" "}
      {tasks.map((val) => {
        return <h1> {val.title}</h1> /* </br> <h3> {val.about}</h3> */ ;
      })} }
    </div>
  );
}

export default GetTasks;
