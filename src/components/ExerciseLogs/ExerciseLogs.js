import React, { useState, useEffect } from "react";
import { A } from "hookrouter";
import "./ExerciseLogs-styles.scss";

const ExerciseLogs = () => {
  // const [apiURI, setApiUri] = useState("http://localhost:4000");

  const [apiURI, setApiUri] = useState(
    "https://stefanbobrowski.com/api/exercise-logs"
  );

  const [exerciseLogs, setExerciseLogs] = useState([]);
  const [createLog, setCreateLog] = useState({});
  const [editLog, setEditLog] = useState({});
  const [editMode, setEditMode] = useState({ edit: false, exID: 0 });

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("Exercise Logs");
    readExerciseLogs();
  }, []);

  // useEffect(() => {}, [errorMessage]);

  // CREATE
  const createExerciseLog = async (e) => {
    e.preventDefault();
    console.log("creating exercise...");
    try {
      const response = await fetch(`${apiURI}/create`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createLog),
      });
      const res = await response.json();
      console.log(res);
      setErrorMessage(res);
      readExerciseLogs();
    } catch (err) {
      console.log(err);
      setErrorMessage(res);
    }
  };

  // READ
  const readExerciseLogs = async () => {
    console.log("Reading Exercise Logs...");
    try {
      const response = await fetch(`${apiURI}/`, {
        method: "GET",
      });
      const res = await response.json();
      console.log(res);
      setExerciseLogs(res);
    } catch (err) {
      console.log(err);
    }
  };

  // UPDATE
  const updateExerciseLog = async (id) => {
    console.log(editLog);
    try {
      const response = await fetch(`${apiURI}/update/` + id, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editLog),
      });
      const res = await response.json();
      console.log(res);
      setEditMode({ edit: false });
      readExerciseLogs();
    } catch (err) {
      console.log(err);
    }
  };

  // DELETE
  const deleteExerciseLog = async (id) => {
    let confirm = window.confirm("Really delete this log?");
    if (confirm) {
      try {
        const response = await fetch(`${apiURI}/` + id, {
          method: "DELETE",
        });
        const res = await response.json();
        console.log(res);
        readExerciseLogs();
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEdit = (id) => {
    if (editMode.edit && editMode.exID == id) {
      setEditMode({ edit: false });
    } else {
      let newEdit = { edit: true, exID: id };
      setEditMode(newEdit);
    }
  };

  return (
    <div className="project-page exercise-logs-project">
      <h1>Exercise Logs</h1>
      <p>
        Create, Read, Update, and Delete your own <i>Exercise Logs</i> in this
        full stack MERN application.
      </p>
      <section className="exercise-logs-container">
        <div className="create-log-container">
          <h4>Create exercise log</h4>
          <form className="create-exercise-log" onSubmit={createExerciseLog}>
            <div>
              <label>Exercise Name:</label>
              <input
                onChange={(e) =>
                  setCreateLog({ ...createLog, exerciseName: e.target.value })
                }
                required
              ></input>
            </div>
            <div>
              <label>Description:</label>
              <textarea
                onChange={(e) =>
                  setCreateLog({ ...createLog, description: e.target.value })
                }
              ></textarea>
            </div>
            <div>
              <label>Duration:</label>
              <input
                onChange={(e) =>
                  setCreateLog({ ...createLog, duration: e.target.value })
                }
              ></input>
            </div>
            <button>Create Exercise Log</button>
            <p style={{ color: "red" }}>{errorMessage}</p>
          </form>
        </div>

        <div className="exercise-logs">
          <h4>Exercise logs:</h4>
          {exerciseLogs.map((ex, i) => (
            <div className="exercise-log" key={i} index={i}>
              {editMode.edit && editMode.exID == ex._id ? (
                <div className="edit-mode">
                  <form className="edit-exercise-log">
                    <header>
                      <h4>
                        <input
                          defaultValue={ex.exerciseName}
                          onChange={(e) =>
                            setEditLog({
                              ...editLog,
                              exerciseName: e.target.value,
                            })
                          }
                        ></input>
                      </h4>

                      <div className="controls">
                        <span
                          title="Save changes"
                          onClick={() => {
                            updateExerciseLog(ex._id);
                          }}
                        >
                          ✔️
                        </span>
                        <span
                          title="Cancel"
                          onClick={() => {
                            setEditMode({ edit: false });
                          }}
                        >
                          🗙
                        </span>
                      </div>
                    </header>

                    <div className="log-row">
                      <label>Description:</label>
                      <textarea
                        defaultValue={ex.description}
                        onChange={(e) =>
                          setEditLog({
                            ...editLog,
                            description: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <div className="log-row">
                      <label>Duration:</label>
                      <input
                        defaultValue={ex.duration}
                        onChange={(e) =>
                          setEditLog({
                            ...editLog,
                            duration: parseInt(e.target.value),
                          })
                        }
                      ></input>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="normal-view">
                  <header>
                    <h4>{ex.exerciseName}</h4>
                    <div className="controls">
                      <span
                        className="edit-log-button"
                        title="Edit"
                        onClick={() => {
                          setEditLog(ex);
                          handleEdit(ex._id);
                        }}
                      >
                        ✏️
                      </span>
                      <span
                        className="delete-log-button"
                        onClick={() => deleteExerciseLog(ex._id)}
                        title="Delete"
                      >
                        ❌
                      </span>
                    </div>
                  </header>
                  {/* <div className="log-row">
                      <label>Exercise: </label> <p>{ex.exerciseName}</p>
                    </div> */}
                  <div className="log-row">
                    <label>Description: </label> <p>{ex.description}</p>
                  </div>
                  <div className="log-row">
                    <label>Duration: </label> <p>{ex.duration} minutes</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExerciseLogs;
