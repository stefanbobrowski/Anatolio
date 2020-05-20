import React, { useState, useEffect } from "react";
import "./SignUp-styles.scss";

const SignUp = () => {
  // const [apiURI, setApiUri] = useState("http://localhost:4000/api/sign-up");
  const [apiURI, setApiUri] = useState(
    "https://stefanbobrowski.com/api/sign-up"
  );

  const [signUpList, setSignUpList] = useState([]);
  const [newSignUp, setNewSignUp] = useState({});

  useEffect(() => {
    console.log("Sign up!");
    readNames();
  }, []);

  const readNames = async () => {
    try {
      const response = await fetch(`${apiURI}/`, {
        method: "GET",
      });
      const res = await response.json();
      console.log("Signed by:", res);
      setSignUpList(res);
    } catch (err) {
      console.log(err);
    }
  };

  const createSignUp = async (e) => {
    console.log(newSignUp);
    console.log(JSON.stringify(newSignUp));

    e.target.value = null;
    try {
      const response = await fetch(`${apiURI}/create`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSignUp),
      });

      const res = await response.json();
      console.log(res);
      readNames();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="project-page sign-up-project">
      <h1>SignUp</h1>
      <p>A full stack MERN application for signing a piece of paper.</p>

      <div className="two-col">
        <section className="sign-up-container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createSignUp(e);
            }}
          >
            <div>
              <p>Sign your name below:</p>
              <label>Name:</label>
              <input
                onChange={(e) => setNewSignUp({ name: e.target.value })}
                maxLength="45"
              ></input>
            </div>

            <button>Submit</button>
          </form>
        </section>

        {/* <div>{newSignUp}</div> */}

        <section className="sign-up-list-container">
          <div className="punch-holes">
            <div></div>
            <div></div>
            <div></div>
          </div>
          {/* <h3>Signed by:</h3> */}
          <ul className="sign-up-list">
            {signUpList.map((s, i) => (
              <li key={i}>{s.name}</li>
            ))}
            <li>
              <p></p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
