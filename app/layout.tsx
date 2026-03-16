import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "KnotArkive",
  description: "Knowledge • Goals • Experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="light">
      <body>
        <header className="border-b p-4">
          <nav className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/knowledge">Knowledge</Link>
            <Link href="/roadmap">Roadmap</Link>
            <Link href="/search">Search</Link>
          </nav>
        </header>

        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}