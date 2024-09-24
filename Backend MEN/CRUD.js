app.post("/person", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data Saved Suscessfully");
    res.status(200).json(response);
  } catch (error) {
    console.log("error in Saving Person: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/person", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data Fetched");
    res.status(200).json(data);
  } 
  catch (error) {
    console.log("error in Saving Person: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
