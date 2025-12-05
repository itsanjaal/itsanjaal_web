import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white-900 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Logo.png"
                alt="Kodedristi Software"
                width={50}
                height={50}
                className="w-15 h-15"
              />
              <span className="text-xl font-bold text-red-700">
                {" "}
                IT Sanjaal{" "}
              </span>
            </div>
            <p className="text-black-400 mb-6 max-w-md">
              Transforming businesses through innovative digital solutions,
              cutting-edge technology, and visionary design.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61583311441042"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-400 hover:text-red-400 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/itsanjaal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black-400 hover:text-red-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-black-400 hover:text-red-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-black-400 hover:text-red transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-black-400 hover:text-red transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#values"
                  className="text-black-400 hover:text-red transition-colors"
                >
                  Values
                </Link>
              </li>
              {/* <li>
                <Link href="#team" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-700">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-700" />
                <span className="text-black-700">info@itsanjaal.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-700" />
                <a
                  href="tel:9832362001"
                  className="text-black-400 hover:text-red transition-colors"
                >
                  +977-9863459299
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-red-700" />
                <a
                  href="https://wa.me/9819477357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-700 hover:text-red-700 transition-colors"
                >
                  +977-9819477357
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-700" />
                <a
                  href="https://www.google.com/maps/place/M8PH%2B2J4,+Kathmandu+44600/@27.6849814,85.3281286,19z/data=!4m9!1m2!2m1!1sit+Sanjaal!3m5!1s0x39eb19b8d4cbfd63:0xf9f973d44ed6236a!8m2!3d27.6849814!4d85.329109!16s%2Fg%2F11j6tcqg8h?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-700 hover:underline hover:text-red-700 transition-colors"
                >
                 Buddhanagar ,Kathmandu,Nepal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-800 mt-8 pt-8 text-center">
          <p className="text-black-700">
            © {new Date().getFullYear()} IT Sanjaal Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
