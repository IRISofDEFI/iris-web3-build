const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Ethereum & Web3 developer focusing on decentralized applications,
              smart contracts, and DeFi protocol architecture. Experienced in
              building secure, scalable blockchain solutions.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Skilled in smart contract security, token economics, and blockchain
              utility. Proficient in Solidity development and comprehensive smart
              contract auditing across major protocols.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently building innovative DeFi protocols, conducting smart contract
              audits, helping to shape the future knowledge of blockchain fintech.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Solidity & Hardhat */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/images/solidity.png 1.png"
                  alt="Solidity Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Solidity, Hardhat.</h3>
              <p className="text-gray-400 text-sm">
                Expert smart contract development and testing framework implementation.
              </p>
            </div>

            {/* Ethers.js & TypeScript */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/images/ethersjs.png"
                  alt="Ethers.js Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Ethers.js, TypeScript.</h3>
              <p className="text-gray-400 text-sm">
                Full-stack Web3 integration with type-safe development practices.
              </p>
            </div>

            {/* ETH, NFTs, DeFi */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <img
                  src="/images/ethereum.png"
                  alt="Ethereum Logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ETH, NFTs, DeFi.</h3>
              <p className="text-gray-400 text-sm">
                Comprehensive ecosystem experience across Ethereum protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

