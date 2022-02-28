// node_modules
import { useEffect, useState } from "react";

// styles
import typewriter from "@src-path/styles/Typewriter.module.scss";

const Hero = () => {
  const [typedText, setTypedText] = useState({ text: "", length: 0, word: 0 });

  useEffect(() => {
    const words = ["Front-end?", "Back-end?", "Full-stack?"];

    let changeWordTimeout: ReturnType<typeof setTimeout>;
    let typingTimeout: ReturnType<typeof setTimeout>;

    const handleWord = () => {
      const wordIndex = typedText.word + 1;

      setTypedText({
        text: "",
        length: 0,
        word: wordIndex >= words.length ? 0 : wordIndex,
      });
    };

    const handleTyping = () => {
      if (words[typedText.word].length == typedText.length) {
        changeWordTimeout = setTimeout(handleWord, 3000);
        return;
      }
      setTypedText({
        text: words[typedText.word].substring(0, typedText.length + 1),
        length: typedText.length + 1,
        word: typedText.word,
      });
    };

    typingTimeout = setTimeout(handleTyping, 100);

    return () => {
      clearTimeout(changeWordTimeout);
      clearTimeout(typingTimeout);
    };
  }, [typedText]);

  return (
    <section className="flex flex-col-reverse px-4 py-5 border-b border-dotted md:flex-row min-h-3/4">
      <div className="flex flex-col justify-center w-full pb-8 m-auto text-4xl text-center md:p-0 md:w-3/5 font-firaCode">
        Procurando por Desenvolvedor
        <span
          className={
            typewriter.typewriter +
            " overflow-hidden m-auto border-r-2 border-white typewriter whitespace-nowrap h-10"
          }
        >
          {typedText.text}
        </span>
      </div>
      <div className="flex justify-center w-full pb-8 m-auto md:w-2/5">
        <img
          src="/saulo-resume-page/et.svg"
          alt="Hero Image"
          width={480}
          height={320}
        />
      </div>
    </section>
  );
};

export default Hero;
