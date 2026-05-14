import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ycharters.com"),
  title: "YCharters — Luxury Yacht Charters",
  description:
    "Discover the world's finest yacht charter experiences. Explore destinations, browse fleets, and book your dream voyage.",
  openGraph: {
    title: "YCharters — Luxury Yacht Charters",
    description:
      "Discover the world's finest yacht charter experiences. Explore destinations, browse fleets, and book your dream voyage.",
    url: "https://ycharters.com",
    siteName: "YCharters",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YCharters — Luxury Yacht Charters",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YCharters — Luxury Yacht Charters",
    description:
      "Discover the world's finest yacht charter experiences. Explore destinations, browse fleets, and book your dream voyage.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
