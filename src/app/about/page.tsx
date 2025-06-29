import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-white">
      <div className="absolute inset-0 w-full h-1/3 bg-gradient-to-b from-[#a31515] to-transparent z-0" />
      <div className="container mx-auto py-20 px-4 flex flex-col items-center text-center gap-10 relative z-10">
        <div className="flex flex-col items-center gap-4">
          <Image src="/window.svg" alt="GlassPro logo" width={80} height={80} />
          <h1 className="text-5xl font-extrabold text-[#a31515] mb-2 drop-shadow">
            About GlassPro
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl">
            GlassPro is a leading glass contractor serving both residential and
            commercial clients. With over 20 years of experience, we have built a
            reputation for quality craftsmanship, reliability, and customer
            satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
          <div className="bg-white border-t-4 border-[#a31515] rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#a31515] mb-2">Our Story</h2>
            <p className="text-gray-700">
              Founded by industry veterans, GlassPro started as a small family
              business and has grown into a trusted name in the region. Our team
              is passionate about delivering innovative glass solutions tailored
              to each client’s needs.
            </p>
          </div>
          <div className="bg-white border-t-4 border-[#a31515] rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#a31515] mb-2">Our Values</h2>
            <ul className="list-disc pl-6 text-gray-700 text-left">
              <li>Quality workmanship</li>
              <li>Safety first</li>
              <li>Transparent communication</li>
              <li>Customer satisfaction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
