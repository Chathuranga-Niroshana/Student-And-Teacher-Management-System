import express from "express";
import { Student } from "../models/studentModel.js";

const router = express.Router();

// new student
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.clases ||
      !req.body.DoB ||
      !req.body.email ||
      !req.body.mobile ||
      !req.body.sex
    ) {
      res.status(400).send({ message: "Fill all the details" });
    } else {
      const existStuden = await Student.findOne({ email: req.body.email });
      if (existStuden) {
        res.status(400).send({
          message: `${existStuden.email} has registerd. Name: ${existStuden.name}`,
        });
      }

      const newStudent = {
        name: req.body.name,
        clases: req.body.clases,
        DoB: req.body.DoB,
        email: req.body.email,
        mobile: req.body.mobile,
        sex: req.body.sex,
      };
      const student = await Student.create(newStudent);
      res.status(200).send(student);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// view students details
router.get("/", async (req, res) => {
  try {
    console.log("Received a request to get students");
    const students = await Student.find({});
    return res.status(200).send(students);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get one student by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) {
      res.status(404).send({ message: "Student not found!" });
    } else {
      res.status(200).send(student);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// update by id
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!student) {
      res.status(404).send({ message: "Student not found" });
    } else {
      res.status(200).send({
        message: `${student.name} has Updated.`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// delete
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndDelete(id);

    if (!student) {
      res.status(404).send({ message: "Student not found" });
    } else {
      res.status(200).send({ message: "Student has deleted." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
