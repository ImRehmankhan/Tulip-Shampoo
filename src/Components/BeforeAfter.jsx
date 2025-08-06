export default function BeforeAfter() {
  return (
    <section className="py-16 bg-white" id="benefits">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-8">Before &amp; After Results</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src="https://olaplex.com/cdn/shop/files/5-N4C_EmiBA_1440_eea40da9-5cac-4920-8001-2011f39794d5.jpg?v=1741615977&width=1441"
              alt="Before using Tulip Shampoo"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
          <div>
            <img
              src="https://www.instyle.com/thmb/grStGlDIj9TnNIlv_2dpPH6CQlI%3D/fit-in/1500x1125/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/ins-pattern-hydration-shampoo-before-after-mia-rinaldi-2-8f57f532a3ea4da6ab003e87e6132041.jpeg"
              alt="After using Tulip Shampoo"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
