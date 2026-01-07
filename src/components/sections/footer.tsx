import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const footerBg = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/images/images_20.png";
  const facebookIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/facebook-dark-7.svg";
  const twitterIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/twit-8.svg";
  const youtubeIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/youtube-dark-9.svg";
  const instagramIcon = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/38c0d017-927e-4708-b2cd-7242a68a2c28-aabee-in/assets/svgs/instagram-dark-10.svg";

  return (
    <footer className="relative w-full bg-black text-white font-body selection:bg-white selection:text-black">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src={footerBg} 
          alt="Footer Background" 
          fill 
          className="object-cover opacity-30 grayscale"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-24">
          
          {/* Brand Logo Section */}
          <div className="flex flex-col items-start max-w-md">
            <div className="mb-6">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                  <div className="w-8 h-8 rounded-full bg-white"></div>
                </div>
                <h2 className="text-6xl md:text-7xl font-light tracking-tighter font-display leading-none">
                  AABEE
                </h2>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] font-light text-white/70 italic">
                Where Luxury meets opulence
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6 mt-8">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image src={facebookIcon} alt="Facebook" width={20} height={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image src={youtubeIcon} alt="YouTube" width={20} height={20} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
              </a>
            </div>
          </div>

          {/* Contact and Newsletter Section */}
          <div className="flex flex-col md:flex-row gap-16 lg:gap-24 w-full lg:w-auto">
            
            {/* Newsletter */}
            <div className="flex flex-col max-w-sm">
              <h4 className="text-sm uppercase tracking-[0.2em] mb-6 font-medium">Subscribe to our Newsletter</h4>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-transparent border border-white/30 px-4 py-2 text-sm focus:outline-none focus:border-white transition-colors w-full md:w-64"
                />
                <button 
                  type="submit" 
                  className="border border-white/30 px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Offices & Contacts */}
            <div className="flex flex-col space-y-8">
              <div>
                <h4 className="text-sm uppercase tracking-[0.2em] mb-4 font-medium">Contact Us</h4>
                <div className="text-sm space-y-2 font-light text-white/80">
                  <p className="hover:text-white transition-colors">
                    <a href="mailto:info@aabee.in">info@aabee.in</a>
                  </p>
                  <p className="hover:text-white transition-colors">
                    011 4745 4545
                  </p>
                  <p>Pitampura, Delhi | Gurgaon, Haryana</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Policy Links */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">
            © All rights reserved Aabee, 2023
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] md:text-xs uppercase tracking-widest text-white/70">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/journeys" className="hover:text-white transition-colors">Journeys</a>
            <a href="/destinations" className="hover:text-white transition-colors">Destinations</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;