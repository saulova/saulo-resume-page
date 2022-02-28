// styles
import backgroundStyle from "@src-path/styles/Background.module.scss";

const Background = () => {
  return (
    <>
      <div className={backgroundStyle["stars"]}></div>
      <div className={backgroundStyle["stars2"]}></div>
      <div className={backgroundStyle["stars3"]}></div>
    </>
  );
};

export default Background;
