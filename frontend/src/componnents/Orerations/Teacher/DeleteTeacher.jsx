import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import Spinner from "../../Spinner/Spinner";
import axios from "axios";

function DeleteTeacher() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/teachers/${id}`)
      .then((res) => {
        setName(res.data.name);
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("An error has occured!", { variant: "error" });
        setLoading(false);
        console.log(error);
      });
  }, []);

  const deleteHandle = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:8080/teachers/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Teacher Deleted!", { variant: "success" });
        navigate("/teachers");
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
        <h1>Delete Teacher</h1>
      </div>
      <div className="deleteContener">
        {loading ? <Spinner /> : ""}
        <div>
          <h2>Do you want to delete {name} ? </h2>
        </div>
        <div>
          <button onClick={deleteHandle}>Confirm</button>
          <button onClick={() => navigate("/teachers")}> No</button>
        </div>
      </div>
    </>
  );
}

export default DeleteTeacher;
