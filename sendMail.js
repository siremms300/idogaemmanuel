
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com', // Replace with your Gmail address
    pass: 'your_password', // Replace with your Gmail password
  },
});

const sendMail = async (data) => {
  try {
    await transporter.sendMail({
      from: data.email,
      to: 'siremms300@gmail.com', // Replace with your recipient email address
      subject: data.subject,
      text: data.message,
    });
    console.log('Email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Error sending email' };
  }
}; 

module.exports = sendMail;
