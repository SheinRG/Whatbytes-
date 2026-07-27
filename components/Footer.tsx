import Link from "next/link";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46h1.6V4.35A21 21 0 0 0 14.2 4.2c-2.24 0-3.78 1.37-3.78 3.87V10.5H8v3h2.42V21h3.08Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M22 5.9c-.68.3-1.4.5-2.15.6a3.7 3.7 0 0 0 1.63-2.05c-.73.43-1.53.75-2.39.92a3.75 3.75 0 0 0-6.4 3.42A10.6 10.6 0 0 1 5.1 4.9a3.75 3.75 0 0 0 1.16 5 3.7 3.7 0 0 1-1.7-.47v.05a3.75 3.75 0 0 0 3 3.68 3.8 3.8 0 0 1-1.69.06 3.75 3.75 0 0 0 3.5 2.6A7.53 7.53 0 0 1 3 17.4a10.6 10.6 0 0 0 5.76 1.69c6.9 0 10.68-5.72 10.68-10.68l-.01-.49A7.6 7.6 0 0 0 22 5.9Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.16c2.67 0 2.99 0 4.04.06 2.71.12 3.97 1.4 4.1 4.1.05 1.05.06 1.37.06 4.04 0 2.67 0 2.99-.06 4.04-.13 2.7-1.39 3.97-4.1 4.1-1.05.05-1.37.06-4.04.06-2.67 0-2.99 0-4.04-.06-2.72-.12-3.97-1.4-4.1-4.1-.05-1.05-.06-1.37-.06-4.04 0-2.67 0-2.99.06-4.04.13-2.71 1.39-3.97 4.1-4.1 1.05-.05 1.37-.06 4.04-.06ZM12 0C9.28 0 8.94 0 7.87.06 3.9.24.24 3.9.06 7.87 0 8.94 0 9.28 0 12s0 3.06.06 4.13c.18 3.97 3.84 7.63 7.81 7.81C8.94 24 9.28 24 12 24s3.06 0 4.13-.06c3.97-.18 7.63-3.84 7.81-7.81.06-1.07.06-1.41.06-4.13s0-3.06-.06-4.13C23.76 3.9 20.1.24 16.13.06 15.06 0 14.72 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.4-10.4a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto bg-navy text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        <div>
          <h3 className="mb-3 text-sm font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">About Us</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <TwitterIcon />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60 sm:px-6">
        © {new Date().getFullYear()} Whatbytes Shop. All rights reserved.
      </div>
    </footer>
  );
}
