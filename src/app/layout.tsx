import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notosansjp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-notosansjp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "にわとり計算機",
  description: "あなたの価値はにわとり何羽分か計算します",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notosansjp.variable}>
      <body className="bg-slate-900 h-dvh ">
        <main className="min-h-full max-w-xl w-full mx-auto bg-white flex flex-col items-center justify-center px-4 overflow-auto">
          {children}

          <footer className="flex flex-col items-center py-3 gap-2 mt-auto">
            <Link href="/" className="underline text-blue-800">
              トップ
            </Link>
            <a
              href="https://www.instagram.com/caio.aikawa"
              className="underline text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              作者
            </a>
            <small>
              ※
              これはジョーク作品です。ニワトリはあなたの価値はありませんし、あなたもニワトリの価値はありません。自信もって生きて!
            </small>
          </footer>
        </main>
      </body>
    </html>
  );
}
