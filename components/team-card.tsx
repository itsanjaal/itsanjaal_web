import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  name: string;
  role: string;
  image: string;
  page: string;
}

export default function TeamCard({ name, role, image, page }: Props) {
  return (
    <Link href={`/team/${page}`}>
      <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
        <CardContent className="p-4 text-center">
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="rounded-full mx-auto object-cover h-36 w-36"
          />
          <h3 className="mt-4 text-xl font-semibold">{name}</h3>
          <p className="text-gray-500">{role}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
