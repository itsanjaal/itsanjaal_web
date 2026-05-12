import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="bg-white-900 text-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/favicon.png"
                alt="Kodedristi Software"
                width={20}
                height={20}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-red-700">
                <div>
                  <p className="text-xs italic">Simplify With</p>IT Sanjaal
                </div>
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
                className="text-destructive hover:text-red-700 hover:scale-170 transition-color transition-transform duration-200"
              >
                <LuFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/itsanjaal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-destructive hover:text-red-700 hover:scale-170 transition-color transition-transform duration-200"
              >
                <LuInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/it-sanjal-dx-47946b3a6/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-destructive hover:text-red-700 hover:scale-170 transition-color transition-transform duration-200"
              >
                <LuLinkedin className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="text-black-400 hover:text-red-700 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a> */}
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
                  href="/services"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/it-career"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  IT Career & Placement Support
                </Link>
              </li>
              <li>
                <Link
                  href="/bioinfo"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  Bioinformatics
                </Link>
              </li>
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
                <a
                  href="mailto:info@itsanjaal.com"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  info@itsanjaal.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-700" />
                <a
                  href="tel:9832362001"
                  className="text-black-400 hover:underline hover:text-red-700 transition-colors"
                >
                  +977-9851444004
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MessageCircle className="h-4 w-4 text-red-700" />
                <a
                  href="https://wa.me/9851444004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black-700 hover:underline hover:text-red-700 transition-colors"
                >
                  +977-9851444004
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-red-700" />
                <a
                  href="https://www.google.com/maps/place/IT+Sanjaal+Pvt+Ltd/@27.6849814,85.3281286,19z/data=!4m10!1m2!2m1!1sit+Sanjaal!3m6!1s0x39eb1967e66dc71d:0xde9ef4adc107b919!8m2!3d27.6849721!4d85.3289721!15sCgppdCBTYW5qYWFsWgwiCml0IHNhbmphYWySARB3ZWJzaXRlX2Rlc2lnbmVy4AEA!16s%2Fg%2F11yz4_f1jg?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
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
