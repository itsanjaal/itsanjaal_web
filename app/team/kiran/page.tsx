import Image from "next/image";

export default function RoshanPage() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center">
      <Image
        src="/placeholder-user.jpg"
        alt="Roshan Shrestha"
        width={180}
        height={180}
        className="rounded-full mx-auto mb-6"
      />

      <h1 className="text-4xl font-bold">Kiran Subedhi</h1>
      <p className="text-gray-500 text-lg mb-6">Advocate</p>

      <p className="text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
        Roshan is a frontend developer skilled in React, Tailwind, and UI
        component systems. He focuses on clean code and responsive design.
      </p>

      <div className="mt-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-blue-600 underline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
