import axios from "axios";

export const sendFormToEmail = async (data) => {
    try {
        await axios.post("http://localhost:3002/api/send-email", data);
        console.log("Успешной отправка с клиента");
    } catch (error) {
        console.log("ошибка при отправке с клиента: ", error);
    }
};