import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import TitleSection from "@/components/user/section_title";
import img from "@/images/main_section_img1.jpeg";
import IncrementingCounter from "@/components/user/incrementing_counter";
type Props = {};

const AboutSection = (props: Props) => {
  return (
    <section className={`${styles.section} fluid`}>
      <div className="container">
        <div className={styles["about-grid"]}>
          <div className={styles["grid-content"]}>
            <TitleSection
              firtTitle="Bizim"
              lastTitle="Haqqımızda"
              description=""
            />
            <div>
              <p>
                Azərbaycan iqtisadiyyatının inkişafı, dövlət tərəfindən həyata
                keçirilən uğurlu iqtisadi islahatlar və yaradılmış əlverişli
                sərmayə mühiti ölkəmizin dünya iqtisadiyyatına inteqrasiyasını
                mümkün etmişdir. <br />
                BARS Mağazası 2024-cü ildə qurulmuşdur və yarandığı gündən
                müştərilərə müasir tələblərə cavab verən məhsullar və xidmətlər
                təklif edir. Məqsədimiz, müştərilərimizə ən keyfiyyətli
                məhsulları ən münasib qiymətlə təqdim etməklə müştəri
                məmnuniyyətini qazanmaqdır. Bu günə qədər bu missiyamızı uğurla
                yerinə yetirdiyimiz üçün qürur duyuruq.
                <br />
                Şirkətimiz qaz, su və kimyəvi yapışdırıcı məhsullarının (qranit
                daş və mərmər yapışdırıcıları, silikonlar, divar kağızı
                yapışdırıcıları, PVC-U boru yapışdırıcısı, sayğaclar,
                tənzimləyicilər, siqnal cihazları, flanşlar, detektorlar və s.)
                satışını və servisini həyata keçirir.
                <br />
                BARS Azərbaycanda NUBER ONE, Elster, Siqnal, FMG, Baypa, Tork,
                Madas və Aterma şirkətlərinin rəsmi nümayəndəsidir. Şirkətimiz
                bu brendlərin məhsullarının idxalını və satışını təşkil edir.
              </p>
            </div>
          </div>
          <div className={styles["grid-images"]}>
            <Image
              alt="bars"
              src={img}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
      <div className={styles["incrementing-wrapper"]}>
        <IncrementingCounter
          finalValue={50}
          duration={80}
          content="Avadanlıq Satışı"
        />
        <IncrementingCounter
          finalValue={80}
          duration={50}
          content="Saygac Satışı"
        />
        <IncrementingCounter
          finalValue={120}
          duration={40}
          content="Avadanlıq Satışı"
        />
      </div>
    </section>
  );
};

export default AboutSection;
