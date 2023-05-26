const validarLogin = () => {
  const inputEmail = document.querySelector('input[name="email"]');
  const inputSenha = document.querySelector('input[name="password"]');
  const email = inputEmail.value;
  const senha = inputSenha.value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

validarLogin();
