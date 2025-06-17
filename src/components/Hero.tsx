
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
          Iris of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">DeFi</span>.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ethereum Blockchain Developer & Web3 Builder
        </p>
        
        <div className="w-80 h-80 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 flex items-center justify-center mb-12 shadow-2xl">
          <div className="text-gray-400 text-center">
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full"></div>
            </div>
            <p className="text-sm">Portfolio Showcase</p>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View Projects
          </button>
          <button className="px-8 py-3 border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
