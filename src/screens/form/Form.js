import React, { useState } from 'react';
import './form.css'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, handleSubmit] = useForm('xvondbeq');
  if (state.succeeded) {
      return <p className='thankYouMessage'>Thank you for your message!</p>;
  }

  return (
    <div>
        <h1 className='form__title'>Contact Me</h1>
    <form onSubmit={handleSubmit} className='form__wrapper'>
        <div>
      <input
        placeholder='Name'
        type="text"
        id="name"
        name="name"
        className='form__name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
        <div>
      <input
        placeholder='Email'
        type="email"
        id="email"
        name="email"
        className='form__email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
        <div>
      <textarea
        placeholder='Message'
        id="message"
        name="message"
        className='form__message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
        </div>
      <button type="submit" disabled={state.submitting} className='submit__button'>Submit</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    </div>
  );
};

export default Form;