import styles from "./index.module.css"; // CSS modulunu import et

const Footer = () => {
  return (
    <footer className={`${styles.footer} fluid`}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.footerColumn}>
            <h3>Haqqımızda</h3>
            <p>
              Ut enim ad minim veniam, perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium.
            </p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Əlaqə</h3>
            <p>34/8, East Hukupara, Gifirtok, Sadan.</p>
            <p>support@fruitkha.com</p>
            <p>+00 111 222 3333</p>
          </div>
          <div className={styles.footerColumn}>
            <h3>Səhifələr</h3>
            <ul>
              <li>
                <a href="#">Ana səhifə</a>
              </li>
              <li>
                <a href="#">Haqqımızda</a>
              </li>
              <li>
                <a href="#">Mağaza</a>
              </li>
              <li>
                <a href="#">Tərəfdaşlar</a>
              </li>
              <li>
                <a href="#">Əlaqə</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            Müəllif hüquqları © 2024 - Mahir Hasani. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
