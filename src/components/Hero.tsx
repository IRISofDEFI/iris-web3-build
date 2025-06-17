
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-20">
      <div className="text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Iris of DeFi.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-xl mx-auto">
          Ethereum Blockchain Developer & Web3 Builder.
        </p>
        
        <div className="w-full max-w-2xl mx-auto mb-16">
          <div className="aspect-video bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center">
            <div className="text-gray-500 text-center">
              <div className="text-6xl font-bold mb-2">IDA</div>
              <div className="text-sm text-gray-600">Portfolio Showcase</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
