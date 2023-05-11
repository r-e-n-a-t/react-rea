import React from 'react'
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

  return (
    <div>
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
          <h1>Заявка</h1>
          <div >
            <div className='input-group mb-3'>
              <input  {...register("lastName",{
                                    maxLength:{value:50, message: "Поле фамилия слишком длинное" },
                                    required:{value:true, message: "Поле фамилия не может быть пустым" },
                                    pattern: {value:/^[А-Яа-я]+$/i, message: "Некорректный ввод" }})}
                      type="text"
                      className='form-control'
                      placeholder='Фамилия'/>
            </div>
                      {errors?.lastName?.type && <p className='text-danger'>{errors.lastName.message}</p>}
            <div className='input-group mb-3'>
              <input  {...register("firstName",{
                                    maxLength:{value:50, message: "Поле имя слишком длинное" },
                                    required:{value:true, message: "Поле имя не может быть пустым" },
                                    pattern: {value:/^[А-Яа-я]+$/i, message: "Некорректный ввод" }})}
                      type="text"
                      className='form-control'
                      placeholder='Имя'/>
            </div>
                      {errors?.firstName?.type && <p className='text-danger'>{errors.firstName.message}</p>}
            <div className='input-group mb-3'>
              <input  {...register("patronymic",{
                                    maxLength:{value:50, message: "Поле отчество слишком длинное" },
                                    pattern: {value:/^[А-Яа-я]+$/i, message: "Некорректный ввод" }})}
                      
                      type="text"
                      className='form-control'
                      placeholder='Отчество'/>
            </div>
                      {errors?.patronymic?.type && <p className='text-danger'>{errors.patronymic.message}</p>}
            <div className='input-group mb-3'>
              <input  {...register("email",{
                                    maxLength:{value:50, message: "Поле email слишком длинное" },
                                    required:{value:true, message: "Поле email не может быть пустым" },
                                    pattern: {value:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/, message: "Некорректный ввод" }})}
                      type="text"
                      className='form-control'
                      placeholder='Email'/>
            </div>
                      {errors?.email?.type && <p className='text-danger'>{errors.email.message}</p>}
          </div>
        <input className='btn btn-outline-primary' type="submit" />
      </form>
    </div>
  );
}

export default Form