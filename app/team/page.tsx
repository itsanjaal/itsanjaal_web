import TeamCard from "@/components/team-card";

export default function TeamPage() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>

      <div className="grid sm:grid-cols-2 gap-8">
        <TeamCard
          name="Suman Sapkota"
          role="UI/UX Designer"
          image="/team/suman.jpg"
          page="suman"
        />
        <TeamCard
          name="Roshan Shrestha"
          role="Frontend Developer"
          image="/team/roshan.jpg"
          page="roshan"
        />
      </div>
    </section>
  );
}
