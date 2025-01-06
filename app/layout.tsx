import type { Metadata } from "next";
import { Poppins } from "next/font/google";
export const metadata: Metadata = {
  title: "Bars İnşaat – Qaz Avadanlıqları və Tikinti Materiallarının Satışı",
  description:
    "Bars İnşaat qaz avadanlıqları, yapışdırıcılar və tikinti materiallarının geniş çeşidini təklif edir. Yüksək keyfiyyətli və etibarlı məhsullarla tikinti layihələrinizi tamamlayın.",
  keywords:
    "qaz avadanlıqları, tikinti materialları, yapışdırıcılar, qaz sistemləri, inşaat materialları, Bars İnşaat",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
