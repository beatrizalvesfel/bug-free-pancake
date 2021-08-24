import React from "react";
import dynamic from "next/dynamic";
import { FaShareAlt } from "react-icons/fa";
import Link from "next/link";

import styles from "./styles.module.scss";

const TopBar = dynamic(() => import("../Vaga"));

const DevPython = React.memo(function DevPython() {
  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <div className={styles.topMenu}>
          <ul className={styles.lista}>
            <Link href="/vagas/devPython">
              <li className={styles.item}>visão geral</li>
            </Link>
            <Link href="/vagas/candidatura">
              <li className={styles.item}>candidatura</li>
            </Link>
          </ul>
        </div>
        <div className={styles.descricao}>
          <div>
            <div className={styles.topBar}>
              <h4 className={styles.titleDescription}>Descrição</h4>
              <div className={styles.compartilharVaga}>
                <button>
                  <h5 className={styles.comp}>Compartilhar esta vaga</h5>
                  <FaShareAlt />
                </button>
              </div>
            </div>
            <div className={styles.texts}>
              <p> Vem pra Pollux!</p>
              <p>
                Somos uma empresa formada por pessoas jovens com grandes sonhos.
                Com uma cultura descontraída, valorizamos o aprendizado, a
                empatia e a transparência. 100% remotos, formamos uma equipe
                diversificada onde a combinação dos nossos talentos se
                transformam em código. Se você adora tecnologia, está sempre em
                busca de novas experiências e aprendizados a Pollux é pra você!
                Estamos crescendo e adoraríamos te conhecer!
              </p>
              <div className={styles.experiencia}>
                <h2>O que você precisa saber:</h2>
                <ul>
                  <li>Experiência com Python ;</li>
                  <li>Experiência com Frameworks Front-end atuais;</li>
                  <li>Experiência com Javascript;</li>
                  <li>Experiência com HTML, CSS e SASS;</li>
                  <li>Experiência com banco relacional (usamos PostgreSQL);</li>
                  <li>Experiência com sistemas UNIX (usamos Linux);</li>
                  <li>Experiência com Git (usamos GitLab);</li>
                  <li>Experiência com testes unitários;</li>
                  <li>
                    Experiência com Docker (temos uma arquitetura de micro
                    serviços);
                  </li>
                  <li>
                    Experiência com design e desenvolvimento de APIs REST
                    (usamos Flask);
                  </li>
                  <li>
                    Experiência em desenvolvimento ágil de projetos (Scrum,
                    Kanban, etc).
                  </li>
                </ul>
              </div>
              <div className={styles.destaque}>
                <h2>Você irá se destacar se:</h2>
                <ul>
                  <li>
                    Experiência com produção e consumo de eventos em sistemas de
                    mensageria (usamos RabbitMQ);
                  </li>
                  <li>
                    Experiência na arquitetura de desenvolvimento de micro
                    serviços;
                  </li>
                  <li>Experiência com autenticação OAuth2;</li>
                  <li>Experiência com bancos noSQL;</li>
                </ul>
              </div>
              <div className={styles.beneficios}>
                <h2>
                  Quais benefícios oferecemos?{" "}
                  <span>(Contratação full time PJ ou CLT)</span>
                </h2>
                <ul>
                  <li> Plano de saúde;</li>
                  <li>Plano odontológico;</li>
                  <li>Seguro de vida;</li>
                  <li>Zenklub (saúde mental)</li>
                  <li>Previdência Privada;</li>
                  <li>Auxílio em aulas de Inglês, Espanhol;</li>
                  <li>Vale refeição/alimentação;</li>
                  <li>Auxílio creche;</li>
                  <li>Licença maternidade e paternidade estendidas;</li>
                  <li>Auxílio material escolar;</li>
                  <li>Gympass</li>
                  <li>
                    Assessoria financeira, jurídica e psicológica para
                    funcionários;
                  </li>
                  <li>13º e 14º salário;</li>
                  <li>Remuneração variável anual (bônus) competitiva</li>
                </ul>
              </div>
              <h3>
                Início: <span>IMEDIATO (Part time ou Full time)</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default DevPython;
