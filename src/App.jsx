import styles from './App.module.css'
import imagemisrael from '../public/israel.png'
import imagempalestina from '../public/palestina.jpg'
import imagemguerra from '../public/guerra.webp'
import imagemperfil from '../public/foto1.jpg'

function App() {
  return (
    <>
      <nav className={styles.menu}>
        <a href="#s1">Introdução</a>
        <a href="#s2">História de Israel</a>
        <a href="#s3">História da Palestina</a>
        <a href="#s4">A Guerra</a>
        <a href="#s5">Opiniões</a>
        <a href="#s6">Contato</a>
      </nav>

      <main>

        <section className={styles.s1} id='s1'>
          <h1 className={styles.s1titulo}>Atividade sobre a guerra entre Israel e Palestina</h1>

          <div className={styles.s1centro}>
            <img className={styles.fotoperfil} src={imagemperfil} alt="Foto Perfil" />
            <p className={styles.textos1}>Victor<br/> Eu gosto de tomar banho :)</p>
          </div>
        </section>

        <section className={styles.s2} id='s2'>
          <div className={styles.caixaimagem}>
            <img className={styles.imagemgrande} src={imagemisrael} alt="Imagem Israel" />
          </div>

          <div className={styles.ladodireito}>
            <h1 className={styles.titulo2}>História de Israel</h1>
            <p className={styles.texto2}>
              Israel surgiu na Antiguidade como um dos reinos hebraicos na região da Palestina. O povo judeu desenvolveu tradições religiosas e culturais que marcaram profundamente o Oriente Médio. Ao longo dos séculos, o território foi dominado por diversos impérios, como o babilônico, persa, grego e romano. Após conflitos com Roma, os judeus foram dispersos pelo mundo na diáspora.<br/><br/> No século XIX surgiu o sionismo, que buscava criar um lar nacional judeu. Após a Segunda Guerra Mundial e o Holocausto, aumentou o apoio internacional à criação do Estado de Israel.
            </p>
          </div>
        </section>

        <section className={styles.s3} id='s3'>
          <div className={styles.caixaimagem}>
            <img className={styles.imagemgrande} src={imagempalestina} alt="Imagem Palestina" />
          </div>

          <div className={styles.ladodireito}>
            <h1 className={styles.titulo3}>História da Palestina</h1>
            <p className={styles.texto3}>
              A Palestina é uma região histórica habitada por diversos povos ao longo dos milênios, incluindo cananeus, filisteus, árabes e outros grupos semitas. Durante séculos, a área fez parte de impérios como o otomano, até o início do século XX.<br/><br/> Após a Primeira Guerra Mundial, o território ficou sob controle britânico. A população árabe local defendia a criação de um estado próprio, enquanto crescia a imigração judaica promovida pelo sionismo e pelo mandato britânico.
            </p>
          </div>
        </section>

        <section className={styles.s4} id='s4'>
          <div className={styles.caixaimagem}>
            <img className={styles.imagemgrande} src={imagemguerra} alt="Imagem da Guerra" />
          </div>

          <div className={styles.ladodireito}>
            <h1 className={styles.titulo4}>A Guerra entre Israel e Palestina</h1>
            <p className={styles.texto4}>
              O conflito começou oficialmente após o plano da ONU de 1947, que dividia a região em um estado judeu e outro árabe. A guerra de 1948 estourou logo após a declaração de independência de Israel. Desde então, ocorreram vários conflitos, como as guerras de 1967 e 1973.<br/><br/> A disputa envolve território, identidade nacional, religião e questões políticas profundas. Até hoje, o conflito permanece sem solução definitiva e afeta milhões de pessoas.
            </p>
          </div>
        </section>

        <section className={styles.s5} id='s5'>
          <div className={styles.caixaopiniao}>
            <h1 className={styles.tituloopiniao}>Minhas Opiniões</h1>
            <p className={styles.textoopiniao}>
              Eu particularmente não ligo nem um pouco pra essa guerra, se eles quiserem continuar se matando, que continuem. Não sou idiota de ter uma religião, morram judeus, e morram árabes, tanto faz pra mim. Brigas de ideologias são a coisa mais boba que eu ja vi, porque tipo, vc tá chegando ao ponto de matar outra pessoa pq ela não pensa o mesmo que você.<br/><br/> E o pior de tudo é que a midia ainda consegue gerar milhões e milhões por cima de tudo isso, as vezes até com fake news e desinformação. Já cheguei a ver muitas noticias sobre israel estar certo, e que palestina são terroristas e que nn sei oq, e ja vi noticias falando o contrario também.<br></br>Eu tive sorte de uma das minhas irmãs estar morando pra aqueles lado lá que ta tendo essa guerra, então ela teve uma "visão" mais de perto de como as coisas eram lá.<br/><br/> Enfim, eu não me importo com essa guerra, contanto que não venha pro brasil, eu to de boa.
            </p>
          </div>
        </section>

        <section className={styles.s6} id='s6'>
          <h1 className={styles.titulocontato}>Tem uma opinião diferente da minha? Me xingue no privado</h1>
          <h1 className={styles.titulocontato}>Meus coiso de contato</h1>

          <div className={styles.contatos}>
            <a href="https://discord.com/users/578944838368624660" target="_blank" className={styles.itemcontato}>
              <img src="../public/discord.png" className={styles.fotocontato} />
              <span className={styles.tipocontato}>Discord</span>
            </a>

            <a href="https://steamcommunity.com/profiles/76561199065235739/" target="_blank" className={styles.itemcontato}>
              <img src="../public/steam.png" className={styles.fotocontato} />
              <span className={styles.tipocontato}>Steam</span>
            </a>

            <a href="https://github.com/Victor16041" target="_blank" className={styles.itemcontato}>
              <img src="../public/github.png" className={styles.fotocontato} />
              <span className={styles.tipocontato}>Github</span>
            </a>
          </div>
        </section>

      </main>
    </>
  )
}

export default App
