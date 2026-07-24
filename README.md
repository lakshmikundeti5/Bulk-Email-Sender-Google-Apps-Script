# 📧 Bulk Email Sender using Google Apps Script

Automate personalized HTML emails with PDF attachments using **Google Apps Script** and **Gmail**.

This project helps you send personalized emails to multiple recipients without manually composing each email.

---

## ✨ Features

- 📧 Send personalized emails
- 📎 Attach PDF files automatically
- 👤 Personalize each email with the recipient's name
- ⚡ Beginner-friendly and easy to customize
- 📝 HTML email support
- 🚀 Built with Google Apps Script
- ⏰ Schedule emails to run automatically using Google Apps Script Triggers

---

## 🛠️ Technologies Used

- Google Apps Script
- JavaScript (the code i gave)
- Gmail Service
- Google Drive

---

## 📂 Project Structure

```text
Bulk-Email-Sender-Google-Apps-Script
│
├── Code.gs
├── README.md
└── LICENSE
```

---

# 🚀 Getting Started

## Step 1 – Open Google Apps Script

Go to:

https://script.google.com

Sign in with your Google account.

---

## Step 2 – Create a New Project

- Click **New Project**
- Delete the default `Code.gs`

---

## Step 3 – Copy the Script

Copy the entire **Code.gs** file from this repository.

Paste it into your Apps Script project.

---

## Step 4 – Upload Your PDF

Upload your resume, brochure, portfolio, or any PDF to **Google Drive**.

Open the file and copy its **File ID**.

Example:

```text
https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQr/view
```

File ID:

```text
1AbCdEfGhIjKlMnOpQr
```

Replace:

```javascript
YOUR_GOOGLE_DRIVE_FILE_ID
```

inside **Code.gs**.

---

## Step 5 – Update the Recipients

Replace the sample contacts with your own.

```javascript
const contacts = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Sarah Smith", email: "sarah@example.com" }
];
```

---

## Step 6 – Customize the Email Subject

```javascript
const subject = "Your Email Subject";
```

---

## Step 7 – Customize the Email Body

Modify the HTML email template according to your needs.

You can customize:

- Greeting
- Skills
- Experience
- Closing Message
- Contact Information
- Signature

---

## Step 8 – Save the Project

Click **Save** or press:

```text
Ctrl + S
```

Give your project a name.

Example:

```text
Bulk Email Sender
```

---

## Step 9 – Run the Script

From the Apps Script editor:

Select the function:

```text
sendPersonalizedEmailsWithAttachment
```

Click the **▶ Run** button.

The first time you run the script, Google will ask you to authorize the project.

Grant the required permissions.

---

# ⏰ Automate Email Sending with Triggers

You can configure the script to run automatically.

## Create a Trigger

1. Open your Apps Script project.
2. Click the **Triggers (⏰)** icon on the left panel.
3. Click **+ Add Trigger**.

Configure the trigger using the following settings:

| Setting | Value |
|----------|-------|
| Function | `sendPersonalizedEmailsWithAttachment` |
| Deployment | Head |
| Event Source | Time-driven |
| Type | Week timer |
| Day | Monday |
| Time | 10:00 AM – 11:00 AM |

Click **Save**.

Your script will now run automatically every Monday at approximately **10:00 AM**.

> **Note:** You can choose a different schedule (daily, monthly, or another day/time) based on your requirements.

---

# 📧 Sample Email

```text
Hi John,

I hope you're doing well.

I am reaching out regarding opportunities related to [Job Title].

I have [X Years] of experience in [Industry/Domain] with expertise in:

• Skill 1
• Skill 2
• Skill 3
• Skill 4
• Skill 5

Please find my resume attached for your review.

Thank you for your time and consideration.

I look forward to hearing from you.

Best Regards,

Your Name
Your Job Title
your.email@example.com
https://linkedin.com/in/yourprofile
```

---

## 📌 Notes

- Replace all placeholder values before running the script.
- Upload your own PDF to Google Drive and use its File ID.
- Update the recipients list with valid email addresses.
- Test the script with a few recipients before sending to a larger list.
- Use this project only for legitimate and authorized email communication.
- Follow applicable email and anti-spam laws.
- Gmail has daily sending limits depending on your account type.

---

## 🤝 Contributing

Contributions are welcome!

If you'd like to improve this project:

- Fork the repository
- Create a new branch
- Make your changes
- Submit a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you found this project useful:

⭐ Star this repository

🍴 Fork it

💡 Share it with others

Happy Coding! 🚀
