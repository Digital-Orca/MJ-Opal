import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function useContactUs() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // Email Regex
  const phoneRegex = /^[0-9]{10,15}$/; // Adjust the regex based on your phone number validation requirements

  const getSubscribed = ({
    email,
    name,
    phone,
    message,
  }: {
    email: string;
    name: string;
    phone: string;
    message: string;
  }) => {
    return `
      <p>This Client Wannna Subscribe to Your Newsletter</p>
      <div style="background-color: #8FBEDC; color: #fff; padding: 12px">
        <p style="margin: 12px 0;">Name: ${name}</p>
        <p style="margin: 12px 0;">Email: ${email}</p>
        <p style="margin: 12px 0;">Phone: ${phone}</p>
        <p style="margin: 12px 0;">Message: ${message}</p>
      </div>
    `;
  };

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const subscribed = getSubscribed({
      email,
      name,
      message,
      phone,
    });

    if (!email) {
      toast.error("Please Enter Your Email");
    } else if (email && !regex.test(email)) {
      toast.error("Please Enter a Valid Email");
      setIsLoading(false);
    } else if (!phone) {
      toast.error("Please Enter Your Phone Number");
    } else if (phone && !phoneRegex.test(phone)) {
      toast.error("Please Enter a Valid Phone Number");
      setIsLoading(false);
    } else {
      const res = await fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
          to: "dev.elbehery@gmail.com",
          subject: "Subscription Request",
          message: subscribed,
        }),
      });

      const data = await res.json();

      if (data?.success) {
        toast.success("Thank You for Subscribing 🎉");
        setIsLoading(false);
        setEmail("");
        window.scrollTo({
          top: 0,
        });
        window.location.href = "/";
      } else {
        toast.success("Something Went Wrong Please Retry Again !");
        setIsLoading(false);
      }
    }
  };

  return {
    sendMail,
    isLoading,
    email,
    setEmail,
    message,
    setMessage,
    name,
    setName,
    phone,
    setPhone,
  };
}
