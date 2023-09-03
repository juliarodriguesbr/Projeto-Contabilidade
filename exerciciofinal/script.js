const email = document.getElementById('email')
const message = document.getElementById('mensagem')
const name = document.getElementById('nome')

const SendMessage = () => {
  if (!email.value || !message.value || !name.value)
    return alert('Todos campos são obrigatórios. Por favor preencha-os.')
  if (!email.value.includes('@')) return alert('O email está incorreto!')

  alert(
    `a mensagem "${message.value}" foi enviada para ${name.value}, cujo email: ${email.value}, foi enviado com sucesso!`
  )
}
