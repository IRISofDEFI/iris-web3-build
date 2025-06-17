
import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-center space-x-8">
          <a
            href="https://github.com/IRISofDEFI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
          
          <a
            href="https://x.com/iris_of_defi?s=21&t=bfQCrmhV29cLFss7zh1S5A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
          >
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </a>
          
          <a
            href="https://etherscan.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
          >
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              E
            </div>
            <span>Etherscan</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
