import React, { useState } from "react";
import { useSnackbar } from "notistack";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";
import "./Create.css";
import { useNavigate } from "react-router-dom";

function CreateTeacher() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [clases, setClases] = useState("");
  const [nic, setNic] = useState("");
  const [sex, setSex] = useState("");

  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const saveTeacher = () => {
    const data = {
      name,
      email,
      mobile,
      subject,
      clases,
      nic,
      sex,
    };
    setLoading(true);
    axios
      .post("http://localhost:8000/teachers", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Teacher has Created", { variant: "success" });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occured!", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <h1>Register New Teacher</h1>
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
          <label>Subject</label>
        </div>
        <div className="inputs">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
          <label>NIC</label>
        </div>
        <div className="inputs">
          <input
            type="number"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
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
          <button onClick={saveTeacher}>Create</button>
          <button onClick={() => navigate("/teachers")}> Go Back</button>
        </div>
      </div>
    </>
  );
}

export default CreateTeacher;
