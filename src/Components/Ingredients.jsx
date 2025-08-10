export default function Ingredients() {
  const ingredients = [
    {
      name: "Aloe Vera",
      img: "https://cdn.shopify.com/s/files/1/0691/8363/5772/files/Aloe_Vera_Plant2_1_600x600.jpg?v=1740762354",
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
      img: "https://c8.alamy.com/comp/M7WJ7B/vitamin-e-rich-food-top-view-healthy-food-concept-M7WJ7B.jpg",
      desc: "Protects hair from environmental damage and strengthens hair strands."
    }
  ];

  return (
    <section className="py-16 bg-pink-50" id="ingredients">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-pink-700 mb-4">
          Key Ingredients
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Crafted with nature’s finest elements to nourish, strengthen, and
          protect your hair while leaving it soft, shiny, and full of life.
        </p>

        {/* Ingredient Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ingredients.map((ing, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-xl">
                <img
                  src={`${ing.img}?auto=format&fit=crop&w=600&q=80`}
                  alt={ing.name}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-pink-700 mb-1">
                  {ing.name}
                </h3>
                <div className="w-12 h-1 bg-pink-300 mx-auto mb-3 rounded-full"></div>
                <p className="text-gray-600 text-sm">{ing.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
