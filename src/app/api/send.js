
// api/send.js
import sendMail from '../../sendMail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, subject, message } = req.body;

    try {
      const result = await sendMail({ email, subject, message });
      if (result.success) {
        return res.status(200).json({ message: 'Email sent successfully' });
      } else {
        return res.status(500).json({ error: 'Failed to send email' });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
