export default function Ingredients() {
  const ingredients = [
    {
      name: "Aloe Vera",
      img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2",
      desc: "Deeply hydrates and soothes the scalp while promoting healthy hair growth."
    },
    {
      name: "Coconut Oil",
      img: "https://www.shutterstock.com/image-photo/coconut-oil-fruits-cut-half-600nw-1910657323.jpg",
      desc: "Rich in fatty acids that nourish and repair damaged hair, leaving it silky."
    },
    {
      name: "Tulip Extract",
      img: "https://images.unsplash.com/photo-1554494583-c4e1649bfe71?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVsaXBzfGVufDB8fDB8fHww&ixlib=rb-4.1.0&q=60&w=3000",
      desc: "Infuses hair with natural shine and softness while reducing frizz."
    },
    {
      name: "Vitamin E",
      img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
      desc: "Protects hair from environmental damage and strengthens hair strands."
    }
  ];

  return (
    <section className="py-16 bg-pink-50" id="ingredients">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Key Ingredients</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {ingredients.map((ing, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg hover:scale-105 transition flex flex-col"
            >
              <img
                src={`${ing.img}?auto=format&fit=crop&w=400&q=80`}
                alt={ing.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-pink-700 mb-2">{ing.name}</h3>
                <p className="text-gray-600 text-sm flex-grow">{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
