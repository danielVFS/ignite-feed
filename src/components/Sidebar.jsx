import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img
          src="https://avatars.githubusercontent.com/u/54604875?v=4"
          alt="Minha imagem de perfil"
          className={styles.avatar}
        />

        <strong>Daniel Vitor</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu Perfil
        </a>
      </footer>
    </aside>
  );
}