import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import { routing } from "@/i18n/routing";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "From A/Z — Custom-coded websites for venues & hospitality · Edinburgh",
  description:
    "An independent studio building fast, custom-coded websites for venues, hospitality, and ambitious local brands. Launched in 5 days. Based in Edinburgh.",
  metadataBase: new URL("https://from-az.com"),
  openGraph: {
    title: "From A/Z — Custom-coded websites for venues & hospitality",
    description:
      "An independent studio building fast, custom-coded websites for venues, hospitality, and ambitious local brands. Launched in 5 days. Based in Edinburgh.",
    url: "https://from-az.com",
    siteName: "From A/Z",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "From A/Z — Custom-coded websites",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "From A/Z — Custom-coded websites for venues & hospitality",
    description:
      "An independent studio building fast, custom-coded websites. Launched in 5 days.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "From A/Z",
  url: "https://from-az.com",
  email: "info@from-az.com",
  description:
    "An independent studio building fast, custom-coded websites for venues, hospitality, and ambitious local brands.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Edinburgh",
    addressCountry: "GB",
  },
  sameAs: ["https://instagram.com/akramzahwi"],
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "sl")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Plausible analytics — replace domain when live */}
        <Script
          defer
          data-domain="from-az.com"
          src="https://plausible.io/js/script.tagged-events.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
