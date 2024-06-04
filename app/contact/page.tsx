import Structure from "./Structure/Structure";

export const metadata = {
  title: "MJ Opal - Contact Page",
  description: `Get in touch with us through our contact page. Find our phone number (+961 81 66 77 45), email address (Info@mjopal.com), and physical address, or use the form to send us a message directly. We're here to assist you with any inquiries or support you need.`,
};

export default function Contact() {
  return (
    <main className="flex items-center justify-center pt-[180px] max-[1024px]:flex-col-reverse max-[1024px]:pt-[80px] max-[530px]:pt-[0px]">
      <Structure />
    </main>
  );
}
