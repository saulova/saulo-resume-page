// interfaces
import { CardProps } from "@src-path/components/UI/Card";

interface SpecificSkillProps {
  cards: CardProps[];
}

const SpecificSkill = ({ cards }: SpecificSkillProps) => {
  return (
    <div className="flex flex-row flex-wrap content-center justify-center w-full text-center">
      {cards.map((card, index) => (
        <div
          key={"cards-" + index}
          className="flex flex-col w-32 h-40 m-2 text-sm text-center border-2 border-white"
        >
          <div className="flex justify-center mt-3 mb-2">
            <div className="flex justify-center w-24 h-24">
              <img src={card.src} alt={card.src} width={96} height={96} />
            </div>
          </div>
          {card.description}
        </div>
      ))}
    </div>
  );
};

export default SpecificSkill;
