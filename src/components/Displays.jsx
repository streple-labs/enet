const logos = [
  "/images/logo1.png",
  "/images/logo2.png",
  "/images/logo3.png",
  "/images/vector.png",
  "/images/logo3b.png",
];

const Displays = () => {
  return (
    <div className="relative bg-[#002b4f] text-white overflow-hidden py-10">
      {/* Scroll container */}
      <div className="flex animate-scroll gap-30` whitespace-nowrap">
        {logos.concat(logos).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`logo-${index}`}
            className="h-12 w-auto object-contain"
          />
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div> 
  );
};
 
export default Displays;
