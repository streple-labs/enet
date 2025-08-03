import React from 'react';

export default function BlogAndCTA() {
  const blogs = [
    {
      title: 'Startup Security Without a Full Team',
      author: 'Adewale Martins',
      date: '22nd June, 2025',
      image: '/images/blog1.png', // Replace with actual image
    },
    {
      title: 'Digital Ownership in Africa: Why Security Matters',
      author: 'Adewale Martins',
      date: '22nd June, 2025',
      image: '/images/blog1.png',
    },
    {
      title: 'Startup Security Without a Full Team',
      author: 'Adewale Martins',
      date: '22nd June, 2025',
      image: '/images/blog1.png',
    },
  ];

  return (
    <div id='blog' className="px-6 py-20">
      {/* Blog Section */}
      <h2 className="text-3xl font-bold mb-10">Our latest blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((post, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow-sm border">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-medium text-lg mb-2">{post.title}</h3>
              <p className="text-sm text-gray-500">
                {post.author} &nbsp;–&nbsp; {post.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="bg-[#003b73] text-white rounded-2xl mt-20 p-10 text-center relative overflow-hidden">
        {/* Optional: background pattern or shape */}
        <div className="absolute inset-0 bg-no-repeat bg-contain opacity-10" />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Audit your business in 10 minutes.</h2>
        <p className="text-lg text-blue-100 mb-6 max-w-xl mx-auto">
          Download our free Cybersecurity Essentials Checklist to audit your business in 10 minutes.
        </p>
        <button className="bg-white text-[#003b73] hover:bg-gray-200 px-6 py-3 rounded-full text-sm font-medium transition inline-flex items-center gap-2">
          Get My Free Guide →
        </button>
      </div>
    </div>
  );
}
