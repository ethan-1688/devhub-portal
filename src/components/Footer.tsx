import { footerGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-12" id="support">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2fr]">
          <div>
            <a className="text-xl font-black tracking-tight text-ink" href="#">
              DevHub
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
              A clean developer portal MVP for product docs, integrations, and
              platform updates.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-black text-ink">{group.title}</h3>
                <div className="mt-4 grid gap-3">
                  {group.links.map((link) => (
                    <a
                      className="text-sm text-muted transition hover:text-ink"
                      href="#docs"
                      key={link}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © 2026 DevHub. Built as a brand-neutral developer portal demo.
        </div>
      </div>
    </footer>
  );
}
