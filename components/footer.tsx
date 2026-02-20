import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-orange-500/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-[#FFB800] font-bold mb-4">FREE FIRE TOURNAMENT</h3>
            <p className="text-gray-400 text-sm">Official Spandan 2K26 Gaming Tournament</p>
          </div>
          <div>
            <h3 className="text-[#FFB800] font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-orange-500 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="https://meu.edu.in/chancellor-brigade/" className="text-gray-400 hover:text-orange-500 text-sm">
                  Chancellor's Brigade
                </Link>
              </li>
              <li>
                <Link href="https://www.mufests.com" className="text-gray-400 hover:text-orange-500 text-sm">
                  Spandan 2K26
                </Link>
              </li>
              <li>
                <Link href="#tournament" className="text-gray-400 hover:text-orange-500 text-sm">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrglzhfklFqdTCZxrfqSLvvLljWRxjkLPGgxXLZWFLqDFbxmHBphLxlXMvDFbWcrqDWZTL" className="text-gray-400 hover:text-orange-500 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFB800] font-bold mb-4">FOLLOW US</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.instagram.com/muspandan2k25/" target="_blank" className="text-gray-400 hover:text-orange-500 text-sm">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/@mandsauruniversityofficial7771" target="_blank" className="text-gray-400 hover:text-orange-500 text-sm">
                  Youtube 
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-orange-500/20 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Free Fire Tournament. All rights reserved.
          </p>
          <p>
            Made with ❤️ by{" "}
            <Link href="https://github.com/iamkavy47" className="text-orange-500 hover:text-orange-400">
              Kavy Porwal
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
