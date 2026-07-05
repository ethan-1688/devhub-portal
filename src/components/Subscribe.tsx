export function Subscribe() {
  return (
    <section className="container-page py-20" id="subscribe">
      <div className="overflow-hidden rounded-card bg-gradient-to-br from-ink via-slate-900 to-black p-8 text-white shadow-soft sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              Subscribe
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Get platform updates in your inbox
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              Follow product releases, API changes, and practical developer guides.
            </p>
          </div>

          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              aria-label="Email address"
              className="min-h-14 flex-1 rounded-full border border-white/10 bg-white px-5 text-ink outline-none ring-cyanGlow/30 transition placeholder:text-slate-400 focus:ring-4"
              placeholder="you@example.com"
              type="email"
            />
            <button
              className="min-h-14 rounded-full bg-white px-7 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-cyan-100"
              type="button"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
