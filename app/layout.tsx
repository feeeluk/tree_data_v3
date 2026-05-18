import { getEnvTitle } from "@/lib/env";
import "./reset.css";
import "./global.css";

const title = getEnvTitle();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>
          {title}
        </title>
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}
