
import "./globals.css";
import Navbar from "@/components/Navbar";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <div className="max-w-3xl mx-auto p-4">

        </div>
        <Navbar></Navbar>
        <div className="mt-8">
        {children}
        </div>
      </body>
    </html>
  );
}
