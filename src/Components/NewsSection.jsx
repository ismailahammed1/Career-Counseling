const newsData = [
    {
      id: 1,
      title: "People who made inspiring your life change",
      category: "Business",
      date: "18 Jun",
      author: "Admin",
      image: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719668/career%20counselling/img-004-770x500_qd1r0z.jpg",
    },
    {
      id: 2,
      title: "We provide you Motivational career coaching",
      category: "Development",
      date: "03 Jun",
      author: "Admin",
      image: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740719553/career%20counselling/img-01-1-600x700_z2xqt3.jpg",
    },
    {
      id: 3,
      title: "10 alternative ways to better coaching of career",
      category: "Motivation",
      date: "03 Jun",
      author: "Admin",
      image: "https://res.cloudinary.com/dfn1s2ysa/image/upload/v1740464873/career%20counselling/entrepreneur-593361_ik3e8b.jpg",
    },
  ];
  
    
    
    const NewsSection = () => {
  
    return (
      <section className="py-16 bg-white text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-red-600 uppercase font-semibold tracking-widest flex justify-center items-center gap-2">
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
          <h1 className="text-lg">News Update</h1>
          <span className="w-10 h-[1px] bg-gray-400 inline-block"></span>
        </div>
  
        <h2 className="text-4xl font-bold mt-2">Latest News & Updates</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Combines industry knowledge, decades. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
  
        {/* News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {newsData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden shadow-md hover:shadow-lg transition rounded-lg"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-red-600 text-white px-3 py-1 text-sm font-bold rounded">
                  {item.date}
                </div>
              </div>
              <div className="p-5 text-left">
                <div className="flex items-center text-xs text-gray-500 space-x-4 mb-3">
                  <span>By {item.author}</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="font-semibold text-lg leading-snug">
                  {item.title}
                </h3>
                <a
                  href="#"
                  className="mt-4 inline-block text-red-500 text-sm font-medium hover:underline"
                >
                  READ MORE
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  export default  NewsSection