
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
        
        <div className="w-full max-w-md mx-auto mb-16">
          <div className="aspect-[3/4] rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/5d6f3b0e-aa95-4bb9-88ab-f1966c722351.png" 
              alt="Iris - Web3 Developer Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
