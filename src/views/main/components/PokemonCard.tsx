import Image from 'next/image';
import Link from 'next/link';

interface PokemonCardProps {
  id: string;
  name?: string;
  img?: string;
}

export default function PokemonCard({ id, name, img }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${id}`}>
      <div className="flex flex-col justify-center items-center w-full shadow-lg rounded-lg bg-white cursor-pointer">
        <Image src={img || ''} alt={name || ''} width={120} height={120} />
        <h2>{name}</h2>
      </div>
    </Link>
  );
}
