export function createNewMessageEmailTemplate({
  sender,
  receiver,
  message,
  clientURL,
}) {
  

  let previewText = "Sent you a message";

  if (message?.text && message.text.trim().length > 0) {
    previewText =
      message.text.length > 60
        ? message.text.slice(0, 60) + "..."
        : message.text;
  } else if (message?.image) {
    previewText = "📷 Sent you a photo";
  }


  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Message</title>
  </head>

  <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:'Segoe UI',Tahoma,Verdana,sans-serif;">
    <div style="max-width:600px;margin:0 auto;padding:20px;">

      <!-- Header -->
      <div style="background:linear-gradient(to right,#36D1DC,#5B86E5);padding:28px;text-align:center;border-radius:14px 14px 0 0;">
        <img src="${
          sender.profilePic || "https://i.imgur.com/6VBx3io.png"
        }"
          alt="Sender Profile"
          style="width:72px;height:72px;border-radius:50%;background:#fff;padding:4px;margin-bottom:14px;"
        />
        <h1 style="margin:0;color:#fff;font-size:26px;font-weight:500;">
          New Message Received
        </h1>
      </div>

      <!-- Body -->
      <div style="background:#ffffff;padding:34px;border-radius:0 0 14px 14px;box-shadow:0 6px 18px rgba(0,0,0,0.06);">

        <p style="font-size:18px;color:#5B86E5;margin-top:0;">
          <strong>Hello ${receiver.fullName},</strong>
        </p>

        <p style="font-size:15px;color:#444;">
          <strong>${sender.fullName}</strong> has sent you a new message.
        </p>

        <!-- Message Preview -->
        <div style="background:#f8f9fa;padding:20px;border-radius:10px;margin:22px 0;border-left:4px solid #36D1DC;">
          <p style="margin:0;font-size:15px;color:#333;">
            ${previewText}
          </p>
        </div>

        <p style="font-size:14px;color:#555;margin-bottom:28px;">
          Open Chatify to view the full message and reply.
        </p>

        <!-- CTA -->
        <div style="text-align:center;">
          <a href="${clientURL}"
            style="background:linear-gradient(to right,#36D1DC,#5B86E5);
                   color:#fff;
                   text-decoration:none;
                   padding:12px 32px;
                   border-radius:50px;
                   font-weight:500;
                   display:inline-block;">
            Open Chat
          </a>
        </div>

        <p style="margin-top:30px;font-size:13px;color:#666;">
          If you don’t recognize this activity, please secure your account.
        </p>

        <p style="margin-top:22px;font-size:14px;color:#444;">
          Best regards,<br />
          <strong>The Chatify Team</strong>
        </p>
      </div>

      <!-- Footer -->
      <div style="text-align:center;padding:18px;color:#999;font-size:12px;">
        <p>© 2025 Chatify. All rights reserved.</p>
      </div>

    </div>
  </body>
  </html>
  `;
}
