import axios from "axios";

export default class ServiceAPI{

    static async NormalDestribution(){

        let result = await axios.get("https://localhost:7117/api/NormalDestribution");

        return result;
    }
}