import express from "express";
import { Teacher } from "../models/teacherModel.js";
const router = express.Router();

// Create a new teacher
router.post("/", async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.clases ||
      !req.body.subject ||
      !req.body.email ||
      !req.body.mobile ||
      !req.body.nic ||
      !req.body.sex
    ) {
      res.status(400).send({ message: "Fill All the details." });
    } else {
      const existTeacher = await Teacher.findOne({ email: req.body.email });
      if (existTeacher) {
        res.status(400).send({
          message: `${existTeacher.email} has registerd. Name: ${existTeacher.name}`,
        });
      } else {
        const newTeacher = {
          name: req.body.name,
          clases: req.body.clases,
          subject: req.body.subject,
          email: req.body.email,
          mobile: req.body.mobile,
          nic: req.body.nic,
          sex: req.body.sex,
        };
        const teacher = await Teacher.create(newTeacher);
        res.status(200).send(teacher);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get teachers
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find({});
    if (!teachers) {
      res.status(404).send({ message: "No data in the DB" });
    } else {
      return res.status(200).send(teachers);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// get teacher by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    if (!teacher) {
      res.status(404).send({ message: "Teacher not found" });
    } else {
      res.status(200).send(teacher);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// update a teacher
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndUpdate(id, req.body);
    if (!teacher) {
      res.status(404).send({ message: "Teacher not found" });
    } else {
      res.status(200).send(`${teacher.name} has updated successfully!`);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

// delete a teacher
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndDelete(id);
    if (!teacher) {
      res.status(404).send({ message: "Teacher not found" });
    } else {
      res.status(200).send({ message: "Teacher deleted!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
