import { useState } from 'react';
import ShowPassIcon from '../../asserts/images/showPass.png';
import HiddenPassIcon from '../../asserts/images/hiddenPass.png';
import './styles.css';

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validationEmail, setValidationEmail] = useState('')
  const [validationPassword, setValidationPassword] = useState('')
  const [inputType, setInputType] = useState('password')
  const [iconContent, setIconContent] = useState(HiddenPassIcon)

  const handleEmailChange = (event) => {
   setEmail(event.target.value)
  }

  const handleValidationEmail = (event) => {
    if (email.includes('@')){
      setValidationEmail('')
    }
     else if (email===''){
      setValidationEmail('')
    }
    else {
      setValidationEmail('Email inválido')
    }
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleValidationPassword = (event) => {
    if (password.length > 5){
      setValidationPassword('')
    } else if (password===''){
      setValidationPassword('')
    }
    else {
      setValidationPassword('Minimo 6 caracteres')
    }
  }

  const changeInputType = () => {
    if(inputType==='password') {
      setInputType('text')
      setIconContent(ShowPassIcon)
    }
    else {
      setInputType('password')
      setIconContent(HiddenPassIcon)
    }
  }
  const confirm = () => {
    let error = document.getElementById('messageError');

    // verificação para acesso
    if (email === '704@email.com' && password === '704app'){
        (window.location.href = './motorcycles')
    }else if(email ==='' || password === ''){
        error.innerHTML = 'Email ou senha não pode ser vazio'
    }else {
        error.innerHTML = 'Email ou senha incorreta'
    };
  }
  return (
    <div className="styleBody">
        <div className="leftContent"></div>
        <div className="rightContent">
            <h2>Conectar-se</h2>
            <form className='formLogin'>
                <div>
                  <label>
                      <p className='messageError'>
                      {validationEmail}
                      </p>
                      <input 
                        className='inputLogin' 
                        type='email' 
                        placeholder='Digite seu email' 
                        value={email} 
                        onChange={handleEmailChange} 
                        onBlur={handleValidationEmail} />
                  </label>
                </div>
                <div>
                  <label>
                      <p className='messageError'>
                        {validationPassword}
                      </p>
                      <div className='inputPassContainer'>
                        <input 
                          className='inputPass' 
                          type={inputType} 
                          placeholder='Digite sua senha' 
                          value={password} 
                          onChange={handlePasswordChange} 
                          onBlur={handleValidationPassword}/>
                        <img 
                            onClick={changeInputType} 
                            className='iconPass' 
                            src={iconContent} 
                            alt='a' 
                        />
                      </div>
                  </label>
                </div>
                <div onClick={confirm} className="buttonLogin">Login</div>
                <div>
                    <p id='messageError' className='messageError'></p>
                </div>
                <div>
                    <p className='registerButton'>
                      Não possui uma conta? 
                      <a className='registerButtonEffect' href="/login">Cadastre-se</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
  );
}

export default LoginPage;
