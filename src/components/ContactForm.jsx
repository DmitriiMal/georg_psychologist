import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useRef } from 'react';
import { trackEvent } from '@utilities/analytics';
// For more help visit https://formspr.ee/react-help

function ContactForm() {
  const [state, handleSubmit] = useForm('mwplrnpn');
  const isTrackedRef = useRef(false);

  useEffect(() => {
    if (state.succeeded && !isTrackedRef.current) {
      trackEvent('form_submit', {
        form_name: 'contact_form',
      });
      isTrackedRef.current = true;
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return <h3 className='contact-form__success scroll-animation fade-in-up'>Danke für Ihre Nachricht!</h3>;
  }
  return (
    <form className='box' id='my-form' onSubmit={handleSubmit}>
      <div className='input__wrapper name-input scroll-animation up'>
        <input id='name' type='name' name='name' className='input__field' placeholder='Name' />
        <label htmlFor='name' className='input__label'>
          Name
        </label>
        <ValidationError prefix='Name' field='name' errors={state.errors} />
      </div>

      <div className='input__wrapper email-input scroll-animation up'>
        <input id='email' type='email' name='email' className='input__field' placeholder='Email' />
        <label htmlFor='email' className='input__label'>
          Email
        </label>
        <ValidationError prefix='Email' field='email' errors={state.errors} />
      </div>

      <div className='input__wrapper message-input scroll-animation up'>
        <textarea id='message' name='message' className='input__field' placeholder='Nachricht' />
        <label htmlFor='message' className='input__label'>
          Nachricht
        </label>
        <ValidationError prefix='Message' field='message' errors={state.errors} />
      </div>

      <div className='submit-input scroll-animation up'>
        <button type='submit' disabled={state.submitting} id='my-form-button' className='input__submit'>
          Senden
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
