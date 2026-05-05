import { siteContent } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1a1a] px-6 py-8 md:px-12 lg:px-24">
      <div className="max-content flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-[#444]">
          &copy; {year} {siteContent.footer.copy}
        </p>
        <p className="text-xs text-[#2e2e2e]">Built with Next.js + Tailwind</p>
      </div>
    </footer>
  );
}
