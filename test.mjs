import axios from "axios";

const halbert = async function () {
    try {
        const rep = await axios.get("http://localhost:8080/api/paragliding");
        return rep;
    } catch (error) {
        console.log(error);
    }
};

halbert().then(res => console.log(res))
