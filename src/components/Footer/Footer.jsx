import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h5>
        Developed by <span>FrontEndDevo</span>
      </h5>
      <h6>Copyright &copy; 2022, All rights reserved</h6>
    </div>
  );
};

export default Footer;
