const express = require("express"); //запуск сервера
const nodemailer = require("nodemailer"); // отправка запроса на email
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors()); // Добавьте это промежуточное ПО перед определением маршрутов

app.post("/api/send-email", (req, res) => {
  const { name, email, subject } = req.body;

  // Создание транспортера для отправки писем
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "", // Ваша почта Gmail
      pass: "", // Пароль от почты Gmail
    },
  });

  // Настройки письма
  const mailOptions = {
    from: email.value, // Отправитель
    to: "student@mail.com", // Получатель
    subject: subject.value, // Тема письма
    text: `Имя: ${name.value}\nEmail: ${email.value}\nСообщение: 123`, // Текст письма
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Ошибка отправки письма.");
    } else {
      console.log("Письмо успешно отправлено: " + info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(3002, () => {
  console.log("Сервер запущен на порту 3002.");
});