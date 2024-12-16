import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import TitleSection from "@/components/section_title";
import img from "@/images/main_section_img1.jpeg";
import IncrementingCounter from "@/components/about/incrementing_counter";
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
                Azərbaycan iqtisadiyyatının inkişafı, dövlət tərəfindən aparılan
                uğurlu iqtisadi islahatlar, yaradılmış əlverişli sərmayə mühiti
                ölkəmizin dünya iqtisadiyatına inteqrasiyasını mümkün etmişdir.
                <br />
                Enerji-N MMC 2011-ci ildə qurulmuş və qurulduğu tarixdən
                etibarən müştərilərə müasir tələblərə cavab verən məhsullar və
                xidmətlər təklif edir.
                <br />
                Məqsədimiz müştərilərimizin dəyərini bilərək ən keyfiyyətli
                məhsullar təqdim etməklə müştəri məmnuniyyətini qazanmaqdır. Bu
                günə kimi bu missiyamızı layiqincə yerinə yetirdiyimiz üçün
                qürur duyuruq.
                <br />
                Şirkətimiz qaz və su məhsullarının (sayğaclar,
                tənzimləyicilər,alarm çihazları,flanslar,detektorlar və s)
                satışını və servisini həyata keçirir.
                <br /> Enerji – N MMC Azərbaycanda Elster,Siqnal,
                FMG,Baypa,Tork, Madas, Aterma şirkətlərinin rəsmi
                nüməyəndəsidir. Şirkətimiz bu brendlərin məhsullarının idxalını
                və satışını həyata keçirir.
              </p>
            </div>
          </div>
          <div className={styles["grid-images"]}>
            <Image alt="" src={img} fill />
          </div>
        </div>
      </div>
      <div className={styles["incrementing-wrapper"]}>
        <IncrementingCounter
          finalValue={50}
          duration={100}
          content="Avadanlıq Satışı"
        />
        <IncrementingCounter
          finalValue={100}
          duration={80}
          content="Saygac Satışı"
        />
        <IncrementingCounter
          finalValue={120}
          duration={50}
          content="Avadanlıq Satışı"
        />
      </div>
    </section>
  );
};

export default AboutSection;
