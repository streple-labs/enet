export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      image: "/images/blog2.png",
      avatar: "/images/testimonial.png",
      text: `We were scaling fast, and compliance requirements started piling up — HIPAA, ISO, and local data laws. E-Net came in, simplified everything, and helped us get audit-ready in just weeks. Their team was like having an internal security squad without the full-time cost.`,
      name: "Mke Tamba",
      role: "Nuru Health - Co-Founder & COO",
    },
    {
      id: 2,
      image: "/images/blog2.png",
      avatar: "/images/testimonial2.png",
      text: `Before E-Net, we had security worries every week. A minor vulnerability almost compromised our entire customer database. But their VAPT audit exposed everything we missed — and their managed security team locked things down fast. Honestly, I sleep better knowing they’re watching our system 24/7.`,
      name: "Grace Onah",
      role: "CTO - Paykolo",
    },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <button className="bg-white px-4 py-1 mb-4 rounded-full text-sm font-medium shadow">
          REAL STORIES
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Real Stories. Real Security.
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative bg-white rounded-2xl overflow-hidden shadow h-96 flex flex-col justify-end"
              style={{
                backgroundImage: `url(${testimonial.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div> {/* Dark overlay for contrast */}
              <div className="relative z-10 m-6 bg-blue-100 bg-opacity-70 p-4 rounded-2xl">
                <p className="text-gray-800 mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 mr-4 rounded-full border border-gray-200"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows (Static for now) */}
        <div className="flex gap-4 mt-12 justify-center lg:justify-end">
          <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center">
            ←
          </button>
          <button className="w-10 h-10 rounded-full bg-blue-800 hover:bg-blue-900 text-white flex items-center justify-center">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
