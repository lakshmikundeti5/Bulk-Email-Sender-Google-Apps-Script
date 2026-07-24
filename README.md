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

---

## 🛠️ Technologies Used

- Google Apps Script
- JavaScript
- Gmail Service
- Google Drive

---

## 📂 Project Structure

```
Bulk-Email-Sender-Google-Apps-Script
│
├── Code.gs
├── README.md
└── LICENSE
```

---

## 🚀 Getting Started

### Step 1
Upload your PDF (resume, brochure, portfolio, etc.) to Google Drive.

### Step 2
Copy the Google Drive File ID.

Example:

https://drive.google.com/file/d/FILE_ID/view

Replace:

```javascript
YOUR_GOOGLE_DRIVE_FILE_ID
```

inside **Code.gs**.

---

### Step 3

Update the recipients list.

```javascript
const contacts = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Sarah Smith", email: "sarah@example.com" }
];
```

---

### Step 4

Customize the email subject.

```javascript
const subject = "Your Email Subject";
```

---

### Step 5

Customize the email body according to your needs.

---

### Step 6

Run the script.

The first time you run it, Google will ask you to authorize Gmail and Google Drive permissions.

---

## 📧 Sample Email

```text
Hi John,

I hope you're doing well.

I am reaching out regarding an opportunity related to [Job Title].

Please find my resume attached for your review.

Thank you for your time and consideration.

Best regards,

Your Name
```

---

## 📌 Notes

- Replace all placeholder values before running the script.
- Use this project only for legitimate and authorized email communication.
- Follow applicable email and anti-spam laws.
- Avoid sending large numbers of emails in a short period to stay within Gmail's sending limits.

---

## 🤝 Contributing

Contributions are welcome!

Feel free to fork this repository, submit issues, or create pull requests to improve the project.

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you found this project useful, consider giving it a star.
