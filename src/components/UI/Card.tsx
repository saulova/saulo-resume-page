export interface CardProps {
  key?: string;
  alt: string;
  src: string;
  description: string;
}

const Card = ({ key, alt, src, description }: CardProps) => {
  return (
    <div
      key={key}
      className="flex flex-col w-32 h-40 m-2 text-sm text-center border-2 border-white"
    >
      <div className="mt-3 mb-2">
        <img src={src} alt={alt} width={96} height={96} />
      </div>
      {description}
    </div>
  );
};

export default Card;
