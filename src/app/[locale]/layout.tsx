import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import "../globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Vazir = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
})

export const metadata: Metadata = {
  title: "Mahdiyeh Naderi | Merchant",
  description: "",
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en" dir={`${locale == 'fa' || locale == 'ar-AE' ? "rtl": "ltr"}`} className="snap-y snap-mandatory scroll-smooth ">
      <body
        className={`${Vazir.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
