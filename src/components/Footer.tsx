
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    },
    {
      name: "Etherscan",
      icon: () => (
        <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
          E
        </div>
      ),
      url: "https://etherscan.io",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-white mb-6 md:mb-0">
            Iris<span className="text-blue-400">.</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${link.color} transition-colors duration-300 flex items-center space-x-2`}
              >
                <link.icon className="w-6 h-6" />
                <span className="hidden md:inline">{link.name}</span>
              </a>
            ))}
          </div>
          
          <div className="text-gray-400 text-sm">
            © 2024 Iris of DeFi. All rights reserved.
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Building the future of decentralized finance, one smart contract at a time.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
