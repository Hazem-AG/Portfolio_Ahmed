// src/sections/Footer.tsx

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090909] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-block group"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white">
            A
            <span className="text-[#D4AF37] group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,.8)] transition-all">
              H.
            </span>
          </h2>
        </button>

        {/* Subtitle */}
        <p className="text-gray-400 mt-5 mb-10 max-w-md mx-auto text-lg">
          Senior Performance Media Buyer & Social Media Specialist
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mb-16">
          <a
            href="https://www.facebook.com/share/1EPZ9fH7oA/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300"
          >
            <Facebook />
          </a>

          <a
            href="https://www.instagram.com/ahmedhusseinmb?igsh=MTlnOHJ5aDZuenJwMQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300"
          >
            <Instagram />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmedhussein77?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#121212] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300"
          >
            <Linkedin />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} Hazem Emara. All Rights Reserved.
          </span>

          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
              onClick={(e) => e.preventDefault()}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;