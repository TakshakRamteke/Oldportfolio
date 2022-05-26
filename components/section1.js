import styles from "./section1.module.css";

export default function Section1({ children }) {
	return (
		<section className={styles.sec1}>
			{children}
			<p className={styles.love}>Made with ❤️ by Takshak</p>
		</section>
	);
}
