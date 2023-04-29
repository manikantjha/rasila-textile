import { IContactForm } from "@/types/contact";

export interface IData extends IContactForm {
  productName: string;
}

export async function sendContactForm(data: IData) {
  return fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to send message!");
    }
    return res.json();
  });
}
