import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplate.js";
import { createProfileUpdatedEmailTemplate } from "./emailTemplate1.js";
import { createNewMessageEmailTemplate } from "./emailTemplate2.js";


export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: email,
    subject: "Welcome to Chatify!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
};



export const sendProfileUpdatedEmail = async (newUser, clientURL, updatedFields = []) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: newUser.email,
    subject: "Profile Updated",
    html: createProfileUpdatedEmailTemplate(newUser, clientURL, updatedFields),
  });

  if (error) {
    console.error("Error sending profile updated email:", error);
    throw new Error("Failed to send profile updated email");
  }

  console.log("Profile Updated Email sent successfully", data);
};



export const createNewMessageEmail = async (sender1, receiver, message, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: receiver.email,
    subject: message.text && message.text.trim().length > 0 ? sender1.fullName+" sent you a message" : sender1.fullName+" sent you a photo",
    html: createNewMessageEmailTemplate({ sender: sender1, receiver, message, clientURL }),
  });
  
  if (error) {
    console.error("Error sending new message email:", error);
    throw new Error("Failed to send profile updated email");
  }

  console.log("New message email sent successfully", data);

};