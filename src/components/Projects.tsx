
const Projects = () => {
  const projects = [
    {
      name: "Token Airdrop DApp",
      description: "Automated token distribution platform with multi-chain support",
      tech: ["Solidity", "React", "Ethers.js"]
    },
    {
      name: "BEON Beauty Platform",
      description: "NFT marketplace for beauty products with staking rewards",
      tech: ["Smart Contracts", "IPFS", "Web3"]
    },
    {
      name: "G20 Protocol Token",
      description: "Governance token with advanced voting mechanisms",
      tech: ["ERC-20", "DAO", "Governance"]
    },
    {
      name: "NFT w/ Staking",
      description: "NFT collection with yield farming and staking utilities",
      tech: ["ERC-721", "Staking", "Rewards"]
    },
    {
      name: "Web3 Creator Platform",
      description: "Decentralized content creation and monetization platform",
      tech: ["DeFi", "Creator Economy", "Tokens"]
    },
    {
      name: "Metamask Token dApp",
      description: "Token management interface with advanced wallet integration",
      tech: ["MetaMask", "Token Swap", "UI/UX"]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Featured Projects
        </h2>
        
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer group"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4 md:mb-0">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 md:ml-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
