import { Suspense } from "react";
import { Providers } from "./Providers";
import "../styles/globals.css";
import "../styles/text-editor.css";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-ui/styles/dark/attributes.css";
import "@liveblocks/react-tiptap/styles.css";

export const metadata = {
  title: "EditX",
   icons: {
    icon: "/icons/editx.png", // Path to favicon in the public directory
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="/src/app/icons/editx.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/src/app/icons/editx.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </head>
      <body>
        <Providers>
          <Suspense>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
