// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);
  const message = `Hi there,\r\n Greetings from COMETLABS.\r\n Thanks for subscribing our newsletter.\r\n`;
  const data = {
    to: `${body}`,
    name: 'COMET NewsLetter',
    from: `newsletter@cometlabs.in`,
    subject: 'Hi from COMETLABS☄️. Thanks for subscribing our newsletter.🤗',
    message: message,
    html: message.replace(/\r\n/g , '<br>')
  }
  await mail.send(data);
  res.status(200).json({ status: 'OK' });
}
