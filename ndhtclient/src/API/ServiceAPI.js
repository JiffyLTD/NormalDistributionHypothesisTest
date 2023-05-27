import axios from "axios";

export default class ServiceAPI{

    static async NormalDestribution(formData){
        let result = await axios.post("https://localhost:7117/api/NormalDestribution", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });

        return result;
    }
}