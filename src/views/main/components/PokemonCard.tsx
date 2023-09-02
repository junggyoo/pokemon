import Image from 'next/image';

interface PokemonCardProps {
  name: string;
  img?: string;
}

export default function PokemonCard({ name, img }: PokemonCardProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full shadow-lg rounded-lg bg-white cursor-pointer">
      <Image src={img ? img : ''} alt={name} width={120} height={120} />
      <span>{name}</span>
    </div>
  );
}
