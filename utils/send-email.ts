import { FormData } from "@/app/ui/ContactsForm/ContactsForm";
import { Resend } from 'resend';




export async function sendEmail(userData: FormData) {
    
  const { data, error } = await resend.emails.send({
    from: userData.companyEmail,
    to: ['angel04172002@gmail.com'],
    subject: '',
    html: `<p>${userData.otherInfo}</p>`
  });


  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: 'Имейлът е изпратен успешно!' });

}