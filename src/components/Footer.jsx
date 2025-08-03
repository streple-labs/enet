export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <footer className="bg-white border-t border-gray-200 px-8 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick links</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact us</li>
              <li>About us</li>
            </ul>
          </div>

          {/* Products & Solutions */}
          <div>
            <h3 className="font-semibold mb-3">Products & Solutions</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Cybersecurity awareness training</li>
              <li>Bankgrade security infrastructure</li>
              <li>Vulnerability assessment and penetration testing</li>
              <li>Consultancy and compliance support</li> {/* fixed typo */}
              <li>Blockchain security</li>
              <li>Streple</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Who we are</li>
              <li>Join our team</li>
              <li>Partnerships</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Privacy policy</li>
              <li>Terms of service</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
