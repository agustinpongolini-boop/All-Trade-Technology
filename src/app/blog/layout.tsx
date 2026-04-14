import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog | All Trade Technology",
    template: "%s | All Trade Technology",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
