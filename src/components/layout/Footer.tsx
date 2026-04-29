/**
 * Footer.tsx
 * Minimal footer — copyright and back to top link.
 * Sits below the contact section inside the dark background.
 */

export default function Footer() {
    /** Smooth scroll back to the top of the page */
    function handleBackToTop(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-[#1a1612] border-t border-[#f7f4ef]/08 px-6 md:px-12 py-6">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <p className="font-mono text-[11px] tracking-wide text-[#f7f4ef]/25">
                    © {new Date().getFullYear()} Shamso Osman
                </p>

                <a
                    href="#"
                    onClick={handleBackToTop}
                    className="font-mono text-[11px] tracking-wide text-[#f7f4ef]/25 hover:text-[#f7f4ef]/60 transition-colors duration-200"
                >
                    Back to top ↑
                </a>
            </div>
        </footer>
    )
}