import express from "express";

const app = express();
app.use(express.json());

let instructors = ["Jiho", "Todd"] // this doesn't change

app.post("/instructors", (req, res) => {
    // take an array of new instructors and merge w/ existing
    const newInstructors = req.body.instructors;
    instructors = [...instructors, ...newInstructors];
    res.send(instructors);
});

// now we just need to list some valid requests
app.get("/test", (request, response) => {
    console.log("Test Request Made.");
    response.send("Our API works! 🥳🥳🥳");
});

app.get("/instructors", (req, res) => {
    res.send(instructors);
});

app.get("/secure", (req, res) => {
    // no users allowed here
    res.status(401).send("Not authorized.");
})

app.post("/students", (req, res) => {
    // we need to handle the post request
    const newStudent = req.body
    console.log(newStudent);
    res.send(newStudent);
})

app.listen(3030, () => {
    console.log("Listening on http://localhost:3030...")
});

