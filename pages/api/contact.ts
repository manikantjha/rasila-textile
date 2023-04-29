// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { mailOptions, transporter } from "@/config/nodemailer";
import { IData } from "@/services/api";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const CONTACT_MESSAGE_FIELDS: any = {
  name: "Name",
  email: "Email",
  phone: "Phone No.",
  message: "Message",
  productName: "Product Name",
};

function generateEmailContent(data: IData) {
  const stringData = Object.entries(data).reduce((str, [key, value]) => {
    return (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${value}\n\n`);
  }, "");

  const htmlData = Object.entries(data).reduce((str, [key, value]) => {
    return (str += `<h2>${CONTACT_MESSAGE_FIELDS[key]}:</h2> \n<p>${value}</p>\n\n`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mail</title>
    </head>
    <body>${htmlData}</body>
    </html>
    `,
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.phone || !data.message) {
      res.status(400).json({ message: "Bad Request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.name,
      });
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }

  res.status(400).json({ message: "Bad Request" });
}
