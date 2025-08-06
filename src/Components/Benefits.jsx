export default function Benefits() {
  const benefits = [
    { title: "Nourishes & Strengthens", desc: "Enriched with herbal extracts.", icon: "💧" },
    { title: "Sulphate-Free", desc: "Gentle on scalp & hair.", icon: "🌿" },
    { title: "Shiny & Smooth", desc: "Visible results from first wash.", icon: "✨" },
  ];

  return (
    <section className="py-16 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Why Choose Tulip?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 bg-pink-50 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
