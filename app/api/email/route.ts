import { Resend } from 'resend';


const resend = new Resend('re_iZoiHMBK_DAArfjbaoeYGxF32LXVUWfzn');


export async function POST(request : Request, response : Response) {

  const { firstName, lastName, companyName, companyEmail, phoneNumber, otherInfo } = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'angel04172002@gmail.com',
    to: ['angel04172002@gmail.com'],
    subject: '',
    html: `<p>${otherInfo}</p>`
  });


  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: 'Имейлът е изпратен успешно!' });

}