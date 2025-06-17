
const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Passionate Ethereum blockchain developer with extensive experience in building 
              decentralized applications, smart contracts, and DeFi protocols. Specialized in 
              Solidity development, NFT ecosystems, and comprehensive smart contract auditing.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I've contributed to multiple high-value projects, launched tokens worth over $50M, 
              and built a strong community of Web3 enthusiasts. My expertise spans from smart 
              contract architecture to frontend integration using modern Web3 technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently focused on advancing DeFi innovation and creating secure, scalable 
              blockchain solutions that drive the future of decentralized finance.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">Solidity, Hardhat.</h3>
              <p className="text-gray-400">
                Expert in smart contract development using Solidity and Hardhat framework for testing, deployment, and verification.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">Ethers.js, TypeScript.</h3>
              <p className="text-gray-400">
                Full-stack Web3 development with Ethers.js for blockchain interaction and TypeScript for type-safe applications.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-bold text-white mb-3">ETH, NFTs, DeFi.</h3>
              <p className="text-gray-400">
                Comprehensive experience in Ethereum ecosystem, NFT marketplaces, and DeFi protocol development and auditing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
