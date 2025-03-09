const clients = [
    { name: "Bleubird", img: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741116364/career%20counselling/icon/client-01-1_l6oxhy.png" },
    { name: "Design", img: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741116371/career%20counselling/icon/client-02_x067ee.png" },
    { name: "Lyfpro", img: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741116385/career%20counselling/icon/client-03_to7gvi.png" },
    { name: "Motova", img: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741116414/career%20counselling/icon/client-04_af8acx.png" },
    { name: "Limon", img: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741116417/career%20counselling/icon/client-04_z1k1zt.png" },
    { name: "Smile", img: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1741116459/career%20counselling/icon/client-06_ggsnwd.png" }
  ];
  
  const ClientLogos = () => {
    return (
      <div className="w-11/12 mx-auto py-10 bg-white flex justify-center items-center">
        <div className="flex flex-wrap justify-center gap-28">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.img}
              alt={client.name}
              className="h-10 grayscale hover:grayscale-0 transition duration-300"
              style={{
                filter: "grayscale(100%)",
                transition: "filter 0.3s ease-in-out",
                background: "transparent", // Ensure no background color
                mixBlendMode: "normal" // Prevent blending issues
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default ClientLogos;
  