"use server";
import { Resend } from "resend";
import { ContactEmail } from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <info@contact.itsanjaal.com>",
      to: ["info@itsanjaal.com"],
      subject: formData.subject || `Inquiry from ${formData.name}`,
      react: ContactEmail({ ...formData }),
    });

    if (error) {
      console.error("Resend Error Detail:", error); // Check your terminal/server logs!
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("System Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}
