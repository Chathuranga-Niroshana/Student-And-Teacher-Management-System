import React, { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
import "../Teacher/Create.css";
import { useNavigate } from "react-router-dom";

function CreateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clases, setClases] = useState("");
  const [DoB, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [sex, setSex] = useState("");

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()

  const saveStudent = () => {
    const data = {
      name,
      email,
      clases,
      DoB,
      mobile,
      sex,
    };
    setLoading(true);
    axios
      .post("http://localhost:8080/students", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Student has created!", { variant: "success" });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An Error has occured!", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Register A New Student</h1>
      </div>
      <div className="createContainer">
        {loading ? <Spinner /> : ""}
        <div className="labels">
          <label>Name</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Email</label>
        </div>
        <div className="inputs">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Class</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={clases}
            onChange={(e) => setClases(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Mobile No</label>
        </div>
        <div className="inputs">
          <input
            type="number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="labels">
          <label>Date of Birth</label>
        </div>
        <div className="inputs">
          <input
            type="date"
            value={DoB}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="inputs">
          <input
            className="sexInput"
            type="radio"
            name="sex"
            id="male"
            checked={sex === "Male"}
            onChange={() => setSex("Male")}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            className="sexInput"
            type="radio"
            name="sex"
            id="female"
            checked={sex === "Female"}
            onChange={() => setSex("Female")}
          />
          <label htmlFor="female">Female</label>
          <br />
        </div>
        <div className="buttonContainer">
          <button onClick={saveStudent}>Create</button>
          <button onClick={() => navigate("/students")}> Go Back</button>
        </div>
      </div>
    </>
  );
}

export default CreateStudent;
