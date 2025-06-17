
const Metrics = () => {
  const metrics = [
    {
      value: "3 yrs",
      label: "Blockchain exp."
    },
    {
      value: "$5M+",
      label: "Tokens launched"
    },
    {

      value: "10k+",
      label: "Twitter listeners"
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-gray-400 text-sm">
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
