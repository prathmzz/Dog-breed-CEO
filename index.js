import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        const imageUrl = response.data.message;
        const parts = imageUrl.split('/');
        const breedInfo = parts[parts.length - 2];
        res.render("index", {
            image: imageUrl,
            breedName: breedInfo
        });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.send("Error fetching image");
    }
});

app.get("/random", async (req, res) => {
    try {
        const response = await axios.get("https://dog.ceo/api/breeds/image/random");
        const imageUrl = response.data.message;
        const parts = imageUrl.split('/');
        const breedInfo = parts[parts.length - 2];
        res.render("index", {
            image: imageUrl,
            breedName: breedInfo
        });
    } catch (error) {
        console.error("Error fetching image:", error);
        res.send("Error fetching image");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
