import styles from "./PageHeader.module.css";

type Props = {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
};

export function PageHeader({ eyebrow, title, lede, children }: Props) {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {lede ? <p className={`lede ${styles.lede}`}>{lede}</p> : null}
        {children}
      </div>
    </header>
  );
}
