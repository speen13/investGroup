import React from 'react';
import './FormControll.css'
import {Formik} from 'formik'
import * as Yup from 'yup'
import Button from "../button/Button.jsx";

const FormControll = () => {




  const validationsShema = Yup.object().shape({
    firstName: Yup.string().typeError('Повинно бути строкою').matches(/([а-яА-яa-zA-z])/,
      {message: 'Повинні бути тільки букви'}
    ).required('обовʼязкове поле'),
    lastName: Yup.string().typeError('Повинно бути строкою').matches(/([а-яА-яa-zA-z])/,
      {message: 'Повинні бути тільки букви'}).required('обовʼязкове поле'),
    email: Yup.string().email('Введіть коректний email').required('обовʼязкове поле'),
    tel: Yup.string()
      .typeError('Повинно бути строкою').matches(/^(?=.*)(?=.*\d)/,
        {message: 'Пароль має містити латинські літери та цифри'}
      )
      .min(11, 'Номер телефону має бути не менш ніж 11 символів')
      .max(11, 'Максимальна кількість 12 символів').required('обовʼязкове поле'),

  })

  return (
    <div className={'cont_form'}>
      <h3>Почніть зараз</h3>

      <Formik  initialValues={{
        firstName:'',
        lastName:'',
        email:'',
        tel:'',

      }}
               validateOnBlur
               validationSchema={validationsShema}

               onSubmit={(values) => console.log(values)}





      >

        {({values, errors,
            touched, handleChange,
            handleBlur, isValid, handleSubmit,
            dirty
          }) => (
          <div className={'form_container'}>

            {touched.firstName && errors.firstName && <p style={{color: 'red'}}>{errors.firstName}</p>}
              <input
                id={'firstName'}

                placeholder={'Ваше імʼя'}
                type="text"
                name={'firstName'}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}

              />




            {touched.lastName && errors.lastName && <p style={{color: 'red'}}>{errors.lastName}</p>}
              <input
                id={'lastName'}

                placeholder={'Ваше прізвище'}
                type="text"
                name={'lastName'}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}

              />










            {touched.tel && errors.tel && <p style={{color: 'red'}}>{errors.tel}</p>}
              <input
                id={'tel'}

                placeholder={'+3 (_)_ -_ -_'}
                type={'text'}
                name={'tel'}
                value={values.tel}
                onChange={handleChange}
                onBlur={handleBlur}

              />




            {touched.email && errors.email && <p style={{color: 'red'}}>{errors.email}</p>}

            <input
              id={'email'}

              placeholder={'email'}
              type="text"
              name={'email'}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}

            />




            <button
              className={'custom_form_button'}
              onClick={handleSubmit}
              type={'submit'}
              disabled={!isValid && !dirty}
            >Відправити</button>

          </div>
        )}

      </Formik>
    </div>

  );
};

export default FormControll;
