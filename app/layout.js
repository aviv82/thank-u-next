import "../app/ui/styles/global.css";
import { TGND } from "../app/ui/styles/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${TGND.className}`}>{children}</body>
    </html>
  );
}
