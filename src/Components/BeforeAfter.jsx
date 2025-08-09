export default function BeforeAfter() {
  return (
    <section className="py-16 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Before &amp; After Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
            src="https://halalveda.uk/cdn/shop/files/Copy_of_Copy_of_before.png?v=1745356236&width=823"
              alt="Before using Tulip Shampoo"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="https://halalveda.uk/cdn/shop/files/Copy_of_before.png?v=1745356236&width=823"
              alt="After using Tulip Shampoo"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
