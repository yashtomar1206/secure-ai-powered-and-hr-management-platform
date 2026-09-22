export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold">
              HR
            </div>

            <div>
              <h1 className="text-lg font-semibold">
                Secure HR
              </h1>
              <p className="text-xs text-slate-400">
                Employee Experience Platform
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="rounded-lg px-4 py-2 text-sm text-slate-300 hover:text-white">
              About
            </button>

            <button className="rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto flex min-h-[calc(100vh-81px)] max-w-7xl items-center px-6 py-20">
        <div className="grid w-full gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
              🔐 Secure AI-Powered HR Platform
            </div>

            <h2 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Smarter HR.
              <span className="block text-blue-500">
                Better Employee Experience.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
              An AI-powered employee and HR management platform that
              helps employees get answers, raise requests, book HR
              meetings, and access company policies securely.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">
                Get Started
              </button>

              <button className="rounded-xl border border-white/10 px-6 py-3 font-medium transition hover:bg-white/5">
                Explore Platform
              </button>
            </div>

            {/* Features */}
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4">
              <Feature
                title="AI HR Assistant"
                description="Get instant answers to HR questions."
              />

              <Feature
                title="Secure RAG"
                description="Ask questions from company policies."
              />

              <Feature
                title="HR Cases"
                description="Raise and track employee requests."
              />

              <Feature
                title="Appointments"
                description="Schedule meetings with HR."
              />
            </div>
          </div>

          {/* Right - AI Assistant Preview */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              
              {/* Chat Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600">
                    AI
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      AI HR Assistant
                    </h3>

                    <p className="text-xs text-green-400">
                      ● Online
                    </p>
                  </div>
                </div>

                <div className="rounded-lg bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Secure
                </div>
              </div>

              {/* Chat */}
              <div className="space-y-5 py-6">
                
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-blue-600 p-4 text-sm">
                  How many casual leaves do I have?
                </div>

                <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 p-4 text-sm text-slate-300">
                  According to your current leave balance, you have
                  <span className="font-semibold text-white">
                    {" "}8 casual leaves
                  </span>{" "}
                  remaining.
                </div>

                <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs text-slate-500">
                    Source
                  </p>

                  <p className="mt-1 text-sm text-slate-300">
                    Employee Leave Policy — Section 3.2
                  </p>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-2">
                <div className="flex-1 px-3 text-sm text-slate-500">
                  Ask your HR question...
                </div>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium">
                  Ask
                </button>
              </div>
            </div>

            {/* Security Badge */}
            <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 shadow-xl">
              <p className="text-xs text-slate-500">
                Security
              </p>

              <p className="mt-1 text-sm font-medium">
                RBAC + Audit Logs
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


function Feature({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <h3 className="font-medium">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-400">
        {description}
      </p>
    </div>
  );
}