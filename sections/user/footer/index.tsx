import Link from "next/link";
import styles from "./index.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer} fluid`}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>Haqqımızda</h3>
            <p>
              Bars İnşaat qaz avadanlıqları, yapışdırıcılar və tikinti
              materiallarının geniş çeşidini təklif edir. Yüksək keyfiyyətli və
              etibarlı məhsullarla tikinti layihələrinizi tamamlayın.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Əlaqə</h3>
            <p>EuroHome Dernegul, 12 Ələsgər Qayıbov</p>
            <p>
              <Link href="mailto:info@bars.com.az">info@bars.com.az</Link>
            </p>
            <p>
              <Link href="tel:+994 99 795 10 50">+994 99 795 10 50</Link>
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Səhifələr</h3>
            <ul>
              <li>
                <Link href="/">Ana səhifə</Link>
              </li>
              <li>
                <Link href="/about">Haqqımızda</Link>
              </li>
              <li>
                <Link href="/partners">Tərəfdaşlar</Link>
              </li>
              <li>
                <Link href="/contact">Əlaqə</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            Müəllif hüquqları © 2024 - Bütün hüquqlar qorunur.{" "}
            <Link
              href="https://mahirhasani.vercel.app"
              style={{ color: "#006738", fontSize: "16px" }}
            >
              Mahirhasani.dev
            </Link>{" "}
            tərəfindən hazırlanıb.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
