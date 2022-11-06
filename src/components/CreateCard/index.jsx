import React from 'react';
import { useForm } from 'react-hook-form'
import { BsCheck } from 'react-icons/bs'
import { createStudent } from '../../api/index'
import cls from './CreateCard.module.scss'

const CreateCard = () => {
  const { register, handleSubmit, formState: { isValid } } = useForm()

  const onSubmit = (data) => {
    createStudent(data)
  };

  return (
    <div className={cls.main}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={cls.textField}
          type="text"
          name='firstName'
          placeholder="First name"
          {...register('firstName', {
            required: true,
            minLength: 4,
          })}
        />
        <input
          className={cls.textField}
          type="text"
          name='lastName'
          placeholder="Last Name"
          {...register('lastName', {
            required: true,
            minLength: 4,
          })}
        />
        <input
          className={cls.textField}
          type="text"
          name='url'
          placeholder="Image Url"
          {...register('url', {
            required: true,
          })}
        />
        <input
          className={cls.textField}
          type="number"
          name='age'
          placeholder="Age"
          {...register('age', {
            required: true,
            maxLength: 2,
          })}
        />
        <input
          className={cls.textField}
          type="number"
          name='class'
          placeholder="Class"
          {...register('class', {
            required: true,
            maxLength: 2,
          })}
        />
        <div>
          <select
            className={cls.select}
            {...register('group', {
              required: true,
            })}
          >
            <option value='selected' disabled>Выберите группу</option>
            <option name='a' value="a">A</option>name='a' 
            <option name='b' value="b">B</option>name='a' 
            <option name='c' value="c">C</option>name='a' 
            <option name='d' value="d">D</option>name='a' 
          </select>
        </div>
        {isValid && <p style={{color: 'green', textAlign: 'center'}}>Успешно <BsCheck/></p>}
        <button disabled={!isValid} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateCard;
