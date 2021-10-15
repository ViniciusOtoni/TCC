import nodemailer from 'nodemailer'

const sender = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: 'contatogamebud@gmail.com', 
    pass: 'gamebud123',
  },
});


async function enviarEmail(para, assunto, mensagem) {
  const response = await sender.sendMail({
    from: '"Game Bud" <contatogamebud@gmail.com>',
    to: para, 
    subject: assunto,
    html: mensagem
  })
  return response;
}




export default enviarEmail;