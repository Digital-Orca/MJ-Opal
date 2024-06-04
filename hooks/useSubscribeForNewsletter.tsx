import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function useSubscribeForNewsletters() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const getSubscribed = ({ email }: { email: string }) => {
    return `
    <p>This Client Wanna Subscribe to Your Newsletter</p>
    <div style="background-color: #8FBEDC; color: #fff; padding: 12px">
    <p style="margin: 12px 0;">Email: ${email}</p>
    </div>
    `;
  };

  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const subscribed = getSubscribed({
      email: email,
    });

    if (!email) {
      toast.error("Please Enter Your Email");
    } else if (email && !regex.test(email)) {
      toast.error("Please Enter a Valid Email");
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
      } else {
        toast.success("Something Went Wrong Please Retry Again !");
        setIsLoading(false);
      }
    }
  };

  return { sendMail, isLoading, email, setEmail };
}
