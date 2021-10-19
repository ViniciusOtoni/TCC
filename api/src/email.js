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





async function enviarEmail(para, cod) {
  

  const response = await sender.sendMail({

    
    from: '"Game Bud" <contatogamebud@gmail.com>',
    to: para, 
    subject: "Recuperação de senha",
    html: `<main>  
            <h2> <b> Olá </b> ${para} o seu pedido de alteração na senha foi bem sucedido! </h2> 
            <h1> Segue o código para podermos confirmar a alteração: </>
            ${cod} 
        </main>` 
    
    
  }) 
  return response;
}





export default enviarEmail;