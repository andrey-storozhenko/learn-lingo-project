import css from "./page.module.css";
import HeroInfo from "@/components/HeroInfo/HeroInfo";
import Image from 'next/image';
import HeroStats from "@/components/HeroStats/HeroStats";

export default function Home() {
  return (
      <div className={['container', css.header].join(' ')}>
        <div className={css.heroInfoImg}>
            <HeroInfo />
            <Image
                src="/images/heroImage.png"
                alt="heroImage"
                width={568}
                height={530}
            />
        </div>
        <HeroStats/>
    </div>
  );
}
