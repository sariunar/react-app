import React, { useState } from "react";
import "./form.css";
import { isValidValue } from "../../shared/helpers/validator";
import { Input } from "../../shared/input/input";
import { sendFormToEmail } from "../../server/sendFormToEmail";

export const Form = () => {
    const [formState, setFormState] = useState({
        name: { value: "" },
        email: { value: "" },
        subject: { value: "" }
    });

    const [formErrorState, setFormErrorState] = useState({
        name: { error: false },
        email: { error: false },
        subject: { error: false }
    });

    //formState само состояние, setFormState функция кот устанавливает состояние? в useState передается первоначальное значение

    const handleChange = (data) => {
        const { name, value } = data;

        setFormState({ ...formState, [name]: { value: value } }) // Обновляем состояние, ...formState старое состояние, [name]: { value: value передаем знач} добавляем новое значение
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // чтобы не срабатывал по умалчанию, останавливаем его
        let error = 0;
        let updatedFormErrorState = {} //будущее состояние ошибок

        for (const [key, value] of Object.entries(formState)) {
            //console.log(key, value.value); //key входит name email subject   value { value: "" }
            if (!isValidValue({ name: key, value: value.value })) //деструктуризация
            {
                updatedFormErrorState[key] = { error: true }
                error++;
            } else {
                updatedFormErrorState[key] = { error: false }
            }
        }
        setFormErrorState(updatedFormErrorState);

        //console.log(error > 0 ? "ERROR" : "SUCCESS");

        error < 1 ? sendFormToEmail(formState) : console.log('Ошибка валидации');
    };

    return (
        <form onSubmit={handleSubmit} className="formContact">
            <h2 className="formContact__title">Leave us your info</h2>
            <div>
                <Input
                    name="name"
                    label="Your Full Name ( Required)"
                    value={formState.name.value}
                    error={formErrorState.name.error}
                    onChange={handleChange}
                />
                <Input
                    name="email"
                    label="Your Email ( Required)"
                    value={formState.email.value}
                    error={formErrorState.email.error}
                    onChange={handleChange}
                />
                <Input
                    name="subject"
                    label="Subject"
                    value={formState.subject.value}
                    error={formErrorState.subject.error}
                    onChange={handleChange}
                />

                <label className="input__label">Your Message</label>
                <textarea name="" className="formContact__textarea"></textarea>
                <button type="submit" className="formContact__button">send message</button>
            </div>

        </form>
    );
};