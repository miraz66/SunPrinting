import { FloatingWhatsApp } from "react-floating-whatsapp";

import Logo from "../assets/SunPrintingLogo.png";

export default function WhatsAppWidget() {
  return (
    <div>
      {" "}
      <FloatingWhatsApp
        avatar={Logo}
        accountName="Sun Printing Press"
        phoneNumber="+8801917666676"
      />
    </div>
  );
}
