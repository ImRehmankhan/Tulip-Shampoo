export default function Purchase() {
  return (
    <section className="py-16 bg-white-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1686121544192-6112bb5ffded?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Tulip Shampoo"
            className="w-72 md:w-96 rounded-2xl shadow-xl border-4 border-white"
          />
        </div>

        {/* Product Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-pink-700 mb-4">
            Get Yours Today
          </h2>
          <p className="text-lg text-gray-600 mb-2">Tulip Shampoo — 250ml</p>
          <p className="text-3xl font-bold text-pink-600 mb-6">PKR 1,200</p>

          {/* Features */}
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>🌿 Made with 100% natural ingredients</li>
            <li>💧 Deeply nourishes and hydrates hair</li>
            <li>✨ Leaves hair soft, shiny, and smooth</li>
            <li>❌ Free from parabens & harsh chemicals</li>
          </ul>

          <button className="bg-pink-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-pink-700 transition transform hover:scale-105 text-lg">
            Buy Now
          </button>
        </div>

      </div>
    </section>
  );
}
