const Projects = () => {
  const projects = [
    {
      name: "Token Airdrop DApp",
      category: "DeFi / Governance",
      tech: ["Solidity", "React"],
      link: "https://github.com/IRISofDEFI/Token-airdrop-dashboard"
    },
    {
      name: "BEON Beauty Platform",
      category: "NFTs / Socially",
      tech: ["Smart Contracts", "IPFS"],
      link: "https://github.com/IRISofDEFI/BEON-DAPP"
    },
    {
      name: "G20 Protocol Token",
      category: "Governance",
      tech: ["ERC-20", "DAO"],
      link: "https://github.com/IRISofDEFI/g20-protocol-resistance"
    },
    {
      name: "Cartoon MEME Token",
      category: "Frontend Design",
      tech: ["HTML", "CSS"],
      link: "https://github.com/IRISofDEFI/rug-me-daddy-vibes.git"
    },
    {
      name: "MaxiBoz",
      category: "NFT Staking Platform",
      tech: ["Solidity", "React"],
      link: "https://github.com/IRISofDEFI/MaxiBoz-Dapp"
    },
    {
      name: "Solpumpx V1",
      category: "Trading Volume Bot",
      tech: ["Solana", "Rust"],
      link: "https://github.com/IRISofDEFI/solpumpx-v1"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          PROJECTS
        </h2>

        <div className="space-y-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 px-0 border-b border-gray-800 hover:bg-gray-900/30 transition-colors cursor-pointer group"
              onClick={() => project.link && window.open(project.link, '_blank')}
            >
              <div className="flex-1">
                <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
              </div>

              <div className="text-gray-400 text-sm min-w-[140px] text-center">
                {project.category}
              </div>

              <div className="flex gap-2 min-w-[120px] justify-end">
                {(project.tech || []).slice(0, 2).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-gray-500 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


