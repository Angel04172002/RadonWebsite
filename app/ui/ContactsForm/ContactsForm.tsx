'use client'

import './ContactsForm.css';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '../../../utils/send-email';


export type FormData = {
    firstName: string;
    lastName: string;
    companyName: string;
    companyEmail: string;
    phoneNumber: string;
    otherInfo: string;
};


export default function ContactsForm() {

    const { register, handleSubmit } = useForm<FormData>();


    async function onSubmit(data: FormData) {

        try {
            const response = await fetch('http://localhost:3000/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();



            if (response.ok) {
                alert(result.message);
            } else {
                alert(result.message);
                console.error(result);
                alert('Error: ' + (result.message || 'Failed to send email'));
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('An error occurred while sending the email');
        }
    }


    return (


        <div className="form-container">

            <h1 className="contacts-title text-center">Свържете се с нас</h1>


            <form className="contacts-form" method="post" onSubmit={handleSubmit(onSubmit)}>

                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="firstNameInput">
                            Име
                        </label>
                        <input
                            className="form-control"
                            aria-required="true"
                            id="firstNameInput"
                            {...register('firstName', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="lastNameInput">
                            Фамилия
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="lastNameInput"
                            {...register('lastName', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="companyName">
                            Име на компания
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="companyName"
                            {...register('companyName', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="companyEmail">
                            Имейл на компания
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="companyEmail"
                            {...register('companyEmail', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="phoneNumber">
                            Телефон
                        </label>
                        <input

                            className="form-control"
                            aria-required="true"
                            id="phoneNumber"
                            {...register('phoneNumber', { required: true })}
                        />

                    </div>
                </div>


                <div className="row mb-3 justify-content-center">
                    <div className="col-sm-10 col-md-12">
                        <label className="text-label" htmlFor="otherInfo">
                            Искате ли да споделите друга информация за вашия проект или да зададете въпроси?
                        </label>
                        <textarea

                            className="form-control"
                            aria-required="true"
                            id="otherInfo"
                            {...register('otherInfo', { required: true })}

                        />

                    </div>
                </div>



                <div className="row mb-3 justify-content-center">
                    <div className="col-md-8">

                        <button
                            type="submit"
                            className="w-100 btn submit-btn btn-primary"
                        >
                            Изпрати
                        </button>

                    </div>
                </div>

            </form>

        </div>


    );
}

