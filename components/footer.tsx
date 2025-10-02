import Link from 'next/link';

import { BrandMark } from '@/components/brandmark';

import { EXTERNAL_LINKS } from '@/lib/external-links';

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export function Footer() {
  return (
    <>
      <footer className="pt-3 border-t">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="hidden md:block">
              <BrandMark size="md" linkToHome={false} className="mb-2" />
              <p className="text-sm text-muted-foreground">
                Advancing technology for humanity through professional
                development and community engagement.
              </p>
            </div>
            <FooterColumn
              title="About Us"
              links={[
                { href: '/about/history', label: 'History' },
                { href: '/about/branches', label: 'Branches' },
                { href: '/about/officers', label: 'Officers' },
              ]}
            />
            <FooterColumn
              title="Resources"
              links={[
                { href: EXTERNAL_LINKS.IEEE_GLOBAL, label: 'IEEE Global' },
                {
                  href: EXTERNAL_LINKS.IEEE_TAMU_PORTAL,
                  label: 'Member Portal',
                },
                { href: '/faq', label: 'FAQ' },
              ]}
            />
            <FooterColumn
              title="Connect"
              links={[
                {
                  href: EXTERNAL_LINKS.LINKEDIN,
                  label: 'LinkedIn',
                },
                {
                  href: EXTERNAL_LINKS.INSTAGRAM,
                  label: 'Instagram',
                },
                { href: EXTERNAL_LINKS.DISCORD, label: 'Discord' },
              ]}
            />
          </div>
        </div>
      </footer>
      <div className="border-t mt-4 py-4 text-center text-sm text-muted-foreground">
        <p>
          &copy; 2025 IEEE Texas A&M University Student Branch. All rights
          reserved.{' '}
          <a
            href="mailto:webmaster@ieeetamu.org?subject=Website%20Feedback"
            className="text-primary underline"
          >
            Feedback
          </a>
        </p>
      </div>
    </>
  );
}
