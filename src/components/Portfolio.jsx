export default function Portfolio() {
  const images = [
    { src: "/img1.jpg", link: "" },
    { src: "/img2.jpg", link: "" },
    { src: "/img3.jpg", link: "" },
    { src: "/img4.jpg", link: "" },
    { src: "/img5.jpg", link: "" },
    { src: "/img6.jpg", link: "" },
    { src: "/img7.jpg", link: "" },
    { src: "/img8.jpg", link: "" },
    { src: "/img9.jpg", link: "" },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 p-4 max-w-4xl mx-auto">
      {images.map(({ src, link }, index) => (
        <a
          key={index}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden lg:block md:hidden overflow-hidden bg-black rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 ${
            index % 3 === 0 ? "row-span-2" : "row-span-1"
          }`}
        >
          <img
            src={src}
            alt={`Puzzle piece ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}
