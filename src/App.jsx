import styles from './App.module.css'
import fotoisrael from '../public/israel.png'
import fotoPerfil from '../public/foto1.jpg'
function App() {

  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Criador</a>
        <a href="#s2">História de Israel</a>
        <a href="#s3">História da Palestina</a>
        <a href="#s4">História da Guerra</a>
        <a href="#s5">Minhas opiniões</a>
        <a href="#s6">Contato</a>
      </nav>

      <main>
        <section className={styles.s1} id='s1'>
          <div className={styles.left1}>
            <img className={styles.imgPerfil} src={fotoPerfil} alt="Foto perfil" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title}>Victor :)</h2>
            <p className={styles.paragraph}>EU TENHO AUTISMO</p>
          </div>
        </section>

        <section className={styles.s2} id='s2'>
          <div className={styles.israel}>
            <img className={styles.imgisrael} src={fotoisrael} alt="Foto israel" />
          </div>
          <div className={styles.right}>
            <h2 className={styles.title2}>História de Israel</h2>
            <p className={styles.paragraph2}>
  {"Israel surgiu como um pequeno reino na Antiguidade, na região conhecida como Palestina. Lá nasceram tradições importantes dos povos "}
  <br />
  {"hebreus, como o judaísmo. Ao longo dos séculos, vários impérios dominaram a área — babilônios, persas, gregos e romanos — até que os "}
  <br />
  {"judeus foram dispersos pelo mundo depois de conflitos com Roma, no que ficou conhecido como diáspora."}
  <br /><br />
  {"Muuuuito tempo depois, já no século XIX e XX, começou um movimento chamado sionismo, que queria criar um lar nacional judeu. Após a Primeira e a Segunda "}
  <br />
  {"Guerra Mundial, e especialmente depois do Holocausto, aumentou a pressão internacional pra criar esse Estado. Em 1947, a ONU propôs "}
  <br />
  {"dividir a região entre um Estado judeu e um árabe. Em 1948, foi declarado o Estado de Israel, mas isso levou a guerras com países árabes "}
  <br />
  {"vizinhos e ao deslocamento de muitos palestinos, o que ainda gera conflitos até hoje."}
  </p>

          </div>
        </section>
      </main>
    </>
  )
}

export default App