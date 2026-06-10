import "./reset.css";
import "./globals.css";
import "./main.css";
import { Open_Sans } from "next/font/google";
import { FC } from "react";
import Header from "@/components/header/Header";
import Main from "@/components/main/Main";
import Footer from "@/components/footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const RootLayout: FC<LayoutProps<"/">> = function ({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
