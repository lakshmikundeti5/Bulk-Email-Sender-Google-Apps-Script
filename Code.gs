/*
=========================================================
 Bulk Email Sender using Google Apps Script
=========================================================

DESCRIPTION
-----------
This script sends personalized HTML emails with a PDF
attachment to multiple recipients.

HOW TO USE
----------
1. Upload your PDF (Resume, Brochure, etc.) to Google Drive.
2. Copy the Google Drive File ID.
3. Replace YOUR_GOOGLE_DRIVE_FILE_ID below.
4. Update the recipient list.
5. Customize the email subject and email body.
6. Click Run.

=========================================================
*/

function sendPersonalizedEmailsWithAttachment() {

  // =====================================================
  // STEP 1: Add Recipients
  // =====================================================
  // Replace these sample contacts with your own.

  const contacts = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Sarah Smith", email: "sarah@example.com" },
    { name: "Michael Brown", email: "michael@example.com" }
  ];


  // =====================================================
  // STEP 2: Email Subject
  // =====================================================

  const subject =
    "Application for Software Engineer Position";


  // =====================================================
  // STEP 3: Attach PDF from Google Drive
  // =====================================================
  // Example Google Drive URL:
  //
  // https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQr/view
  //
  // File ID:
  // 1AbCdEfGhIjKlMnOpQr
  //
  // Replace YOUR_GOOGLE_DRIVE_FILE_ID with your own.

  const file = DriveApp.getFileById(
    "YOUR_GOOGLE_DRIVE_FILE_ID"
  );


  // =====================================================
  // STEP 4: Send Emails
  // =====================================================

  contacts.forEach(contact => {

    const htmlBody = `

<div style="font-family:Arial; font-size:14px; line-height:1.6;">

<p>Hi ${contact.name},</p>

<p>
I hope you're doing well.
</p>

<p>
I am reaching out regarding opportunities related to
<strong>[Job Title]</strong>.
</p>

<p>
I have <strong>[X Years]</strong> of experience in
<strong>[Industry]</strong>.
</p>

<p>
My skills include:
</p>

<ul>
<li>Skill 1</li>
<li>Skill 2</li>
<li>Skill 3</li>
<li>Skill 4</li>
<li>Skill 5</li>
</ul>

<p>
Please find my resume attached.

Thank you for your time and consideration.

I look forward to hearing from you.
</p>

<br>

<p>

Best Regards,

</p>

<strong>Your Name</strong><br>

Your Job Title<br>

Email:
<a href="mailto:your@email.com">
your@email.com
</a><br>

LinkedIn:
<a href="https://linkedin.com/in/yourprofile">
linkedin.com/in/yourprofile
</a>

</div>

`;

    try {

      GmailApp.sendEmail(

        contact.email,

        subject,

        "",

        {

          htmlBody: htmlBody,

          attachments: [
            file.getAs(MimeType.PDF)
          ],

          name: "Your Name"

        }

      );

      Logger.log("✅ Email sent to: " + contact.email);

    }

    catch(error){

      Logger.log(
        "❌ Failed to send email to "
        + contact.email
        + " | "
        + error.message
      );

    }

    // Wait 2 seconds before sending the next email
    Utilities.sleep(2000);

  });

  Logger.log("--------------------------------");
  Logger.log("Bulk Email Process Completed");
  Logger.log("--------------------------------");

}
