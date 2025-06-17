
const Metrics = () => {
  const metrics = [
    {
      value: "3 yrs",
      label: "Blockchain exp.",
      color: "from-blue-400 to-blue-600"
    },
    {
      value: "$50M+",
      label: "Tokens launched",
      color: "from-green-400 to-green-600"
    },
    {
      value: "100k+",
      label: "Twitter listeners",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Impact Metrics
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
            >
              <div className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-4`}>
                {metric.value}
              </div>
              <div className="text-gray-400 text-lg font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
