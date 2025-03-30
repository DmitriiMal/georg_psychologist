// layout/Footer.jsx

function Footer() {
  return (
    <>
      <footer id='contact' className='pt-1'>
        <div className='container'>
          <h2 className='scroll-animation fade-in-left'>Kontakt</h2>
          <div className='bottom-line scroll-animation fade-in-left'></div>
          <p className='scroll-animation fade-in-up'>Ich freue mich darauf Sie in einem Erstgespräch kennenzulernen, zu schauen ob wir gemeinsam arbeiten können und der Grundpfeiler Sympathie gegeben ist. Schreiben Sie mir gerne eine E-Mail oder rufen Sie mich persönlich an und hinterlassen mir eine Sprachnachricht- ich rufe Sie folgend ehestmöglich zurück.</p>
          <form className='box' id='my-form' action='https://formspree.io/f/mvoeyoly' method='POST'>
            <div className='input__wrapper name-input scroll-animation up'>
              <input type='text' name='name' id='name' className='input__field' placeholder='Your Name' required />
              <label htmlFor='name' className='input__label'>
                Name
              </label>
            </div>

            <div className='input__wrapper email-input scroll-animation up'>
              <input type='email' name='email' id='email' className='input__field' placeholder='Email' required />
              <label htmlFor='email' className='input__label'>
                Email
              </label>
            </div>

            <div className='input__wrapper message-input scroll-animation up'>
              <textarea name='message' id='message' className='input__field' placeholder='Nachricht' required></textarea>
              <label htmlFor='message' className='input__label'>
                Nachricht
              </label>
            </div>

            <div className='submit-input scroll-animation up'>
              <input id='my-form-button' type='submit' className='input__submit' value='Senden' />
              <p id='my-form-status'></p>
            </div>
          </form>
        </div>
        <div id='copyright'>
          <p>&copy; {new Date().getFullYear()} Wildhaber</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
