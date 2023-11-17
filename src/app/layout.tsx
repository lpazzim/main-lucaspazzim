import { Metadata } from "next";
import StyledJsxRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Lucas Pazzim",
  description: "Lucas Pazzim - Frontend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
