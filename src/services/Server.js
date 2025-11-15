const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

app.post("/update-likes", (req, res) => {
  const data = JSON.parse(fs.readFileSync("../data/blog.json", "utf8"));

  data.count = data.count + 1;

  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

  res.json({ success: true, newCount: data.count });
});

app.listen(5000, () => console.log("Server running on port 5000"));
