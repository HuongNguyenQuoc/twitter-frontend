import { XLogo, GoogleIcon, AppleIcon, PhoneIcon } from "./components/icons";
import { Button } from "./components/button";

const FOOTER_LINKS = [
  "About",
  "Download the X app",
  "Grok",
  "Help Center",
  "Terms of Service",
  "Privacy Policy",
  "Cookie Policy",
  "Accessibility",
  "Ads info",
  "Blog",
  "Careers",
  "Brand Resources",
];

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="mx-auto flex w-full max-w-325 flex-1 flex-col items-center justify-center gap-10 px-8 py-10 lg:flex-row lg:gap-16">
        <section className="order-last flex w-full flex-1 flex-col items-start lg:order-first">
          <h1 className="mb-11 max-w-100 text-[50px] font-semibold leading-[0.9] tracking-[-0.02em] text-foreground lg:text-[64px]">
            Happening now.
          </h1>

          <div className="flex w-full max-w-75 flex-col gap-3">
            <Button>
              <PhoneIcon className="h-4.5 w-4.5" />
              Continue with phone
            </Button>

            <Button variant="outline">
              <GoogleIcon className="h-4.5 w-4.5" />
              Continue with Google
            </Button>

            <Button variant="outline">
              <AppleIcon className="h-4.5 w-4.5" />
                Continue with Apple
            </Button>

            <div className="flex items-center gap-1 py-1 text-[15px] text-foreground">
              <span className="h-px flex-1 bg-line" />
              <span className="px-1">or</span>
              <span className="h-px flex-1 bg-line" />
            </div>

            {/* Bước 6 sẽ điền ô nhập và nút Next vào đây */}

          </div>
        </section>

        <section className="order-first flex flex-1 items-center justify-center lg:order-last">
          <XLogo className="h-32 w-32 text-foreground lg:h-95 lg:w-95" />
          <span className="sr-only">X</span>
        </section>
      </main>

      <footer className="w-full px-4 py-3">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[13px] text-muted">
          {FOOTER_LINKS.map((label) => (
            <li key={label}>
              <a href="#" className="hover:underline">
                {label}
              </a>
            </li>
          ))}
          <li>© 2026 X Corp.</li>
        </ul>
      </footer>
    </div>
  );
}
