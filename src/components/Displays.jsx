const logos = [
  "/images/Logo1.png",
  "/images/Logo2.png",
  "/images/Logo3.png",
  "/images/Vector.png",
  "/images/Logo4.png",
];

const Displays = () => {
  return (
    <div className="relative bg-[#002b4f] text-white overflow-hidden py-10">
      {/* Outer container */}
      <div className="flex w-max animate-scroll">
        {[...logos, ...logos].map((src, index) => (
          <div key={index} className="flex-shrink-0 px-10">
            <img
              src={src}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Displays;
