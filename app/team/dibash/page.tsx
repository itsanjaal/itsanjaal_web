import Image from "next/image";

export default function SumanPage() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <Image
        src="/placeholder-user.jpg"
        alt="Dibash Gautam"
        width={180}
        height={180}
        className="rounded-full mx-auto mb-6"
      />

      <h1 className="text-4xl font-bold">Dibash Gautam</h1>
      <p className="text-gray-500 text-lg mb-6">Content Writer</p>

      <p className="text-base text-gray-700 text-center leading-relaxed max-w-2xl mx-auto">
        Dibash Gautam is a skilled content writer known for crafting clear,
        engaging, and impactful content. With a strong understanding of digital
        communication, he specializes in turning complex ideas into
        easy-to-understand writing that connects with audiences. His work
        includes articles, website content, scripts, and educational materials
        that support brand voice and user experience.
        <br /> 
        <br />
         
          Dibash focuses on quality, clarity, and storytelling — ensuring every
          piece of content is informative, well-structured, and meaningful.
        
      </p>

      <div className="mt-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-red-600 underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
