import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Spinner/Spinner";

function UpdateStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clases, setClases] = useState("");
  const [DoB, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  const [sex, setSex] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((res) => {
        setName(res.data.name);
        setClases(res.data.clases);
        setDob(res.data.DoB);
        setEmail(res.data.email);
        setMobile(res.data.mobile);
        setSex(res.data.sex);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("An error has occured!", { variant: "error" });
        setLoading(false);
      });
  }, []);

  const updateHandle = () => {
    const data = {
      name,
      email,
      clases,
      DoB,
      mobile,
      sex,
      loading,
    };
    setLoading(true);
    axios
      .put(`http://localhost:8080/students/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Student Updated!", { variant: "success" });
        navigate("/students");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred. Check the console log");
        console.log(error);
      });
  };

  return (
    <>
      <h1>Update Student</h1>
      {loading ? <Spinner /> : ""}
      <div className="updateContainer">
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
          <button onClick={updateHandle}>Update</button>
          <button onClick={() => navigate("/students")}> No</button>
        </div>
      </div>
    </>
  );
}

export default UpdateStudent;
