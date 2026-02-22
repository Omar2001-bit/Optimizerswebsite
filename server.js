import express from 'express';
import cors from 'cors';

import { Resend } from "resend";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  console.log('--- Received booking form submission ---');
  console.log(JSON.stringify(req.body, null, 2));
  console.log('-----------------------------------------');

  const validatedData = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Optimizers <onboarding@resend.dev>',
      to: ['team@optimizers.agency'],
      subject: `New Optimizers Client Data Submission from ${validatedData.firstName}`,
      html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #263328; border-bottom: 2px solid #6ae499; padding-bottom: 10px;">
                New Contact Form Submission
              </h2>
              <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">First Name</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${validatedData.firstName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${validatedData.email}</td>
                </tr>
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Website</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${validatedData.website}</td>
                </tr>
                <tr>
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Conversion Volume</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${validatedData.monthlyConversions}</td>
                </tr>
                <tr style="background-color: #f5f5f5;">
                  <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">Primary Objective</td>
                  <td style="padding: 12px; border: 1px solid #ddd;">${validatedData.challenge}</td>
                </tr>
              </table>
              <p style="color: #666; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">
                This submission was received from the Optimizers booking form.
              </p>
            </div>
          `.trim(),
    });

    if (error) {
      console.error("❌ Resend Error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }

    console.log("✅ Email sent successfully!", data);

    res.status(200).json({
      success: true,
      message: 'Strategy session inquiry received successfully!',
      data: data
    });

  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
