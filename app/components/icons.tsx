type IconProps = {
  className?: string;
};

/** Logo chính thức của X, lưới 24x24. */
export function XLogo({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
  );
}


/** Logo Google: giữ nguyên 4 màu thương hiệu, KHÔNG dùng currentColor. */
export function GoogleIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.55 5.55 0 0 1-2.4 3.64v3.03h3.86c2.26-2.09 3.56-5.17 3.56-8.91z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.03c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.13A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.26a7.2 7.2 0 0 1 0-4.52V6.61H1.29a12 12 0 0 0 0 10.78l3.98-3.13z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.7 0 3.99 2.47 1.29 6.61l3.98 3.13C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M17.05 12.53c-.02-2.4 1.96-3.55 2.05-3.61-1.12-1.64-2.86-1.86-3.48-1.89-1.48-.15-2.89.87-3.64.87-.75 0-1.91-.85-3.14-.83-1.61.02-3.1.94-3.93 2.38-1.68 2.91-.43 7.21 1.2 9.57.8 1.15 1.75 2.45 3 2.4 1.21-.05 1.66-.78 3.12-.78 1.46 0 1.87.78 3.14.75 1.3-.02 2.12-1.17 2.91-2.33.92-1.33 1.3-2.62 1.32-2.69-.03-.01-2.53-.97-2.55-3.84zM14.68 4.9c.66-.81 1.11-1.93.99-3.05-.95.04-2.11.64-2.8 1.44-.61.71-1.15 1.85-1.01 2.94 1.07.08 2.16-.54 2.82-1.33z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a.98.98 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.1.35.02.74-.25 1.01l-2.2 2.2z" />
    </svg>
  );
}