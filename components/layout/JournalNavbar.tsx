"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  journalId: string;
}

export default function JournalNavbar({ journalId }: NavbarProps) {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: `/journals/${journalId}` },
    { label: "Current Issue", href: `/journals/${journalId}/current-issue` },
    { label: "Archive", href: `/journals/${journalId}/archive` },
    { label: "Submission", href: `/journals/${journalId}/submission` },
    { label: "Editorial Board", href: `/journals/${journalId}/editorial` },
    { label: "Author Guidelines", href: `/journals/${journalId}/author-guidelines` },
    { label: "Contact", href: `/journals/${journalId}/contact` },
  ];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex gap-6 overflow-x-auto whitespace-nowrap py-4 text-sm font-medium scrollbar-hide">

          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-300 ${
                  isActive
                    ? "text-[#0A1F44] font-semibold"
                    : "text-gray-600 hover:text-[#F4A623]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-[#F4A623] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

        </div>

      </div>
    </nav>
  );
}