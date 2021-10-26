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





async function enviarEmail(para, cod, nm) {
  

  const response = await sender.sendMail({

    
    from: '"Game Bud" <contatogamebud@gmail.com>',
    to: para, 
    subject: "Recuperação de senha",
    html: `<main>  
            <h2> Olá  <b> ${nm} </b> o seu pedido de alteração na senha foi bem sucedido! </h2> 
            <h1> Segue o código para podermos confirmar a alteração: </h1>
            ${cod} 
        </main>` 
    
    
  }) 
  return response;
}





export default enviarEmail;