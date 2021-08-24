import React, { useState } from "react";
import dynamic from "next/dynamic";
import { RiArrowDownSLine } from "react-icons/ri";
import Link from "next/link";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";

import PhoneInput from "react-phone-number-input/react-hook-form-input";

const TopBar = dynamic(() => import("../Vaga"));

import { Theme, useTheme } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Dev Python",
  "Dev Ruby",
  "Dev Java",
  "Dev Golang",
  "DevOps",
  "Dev PHP",
  "Dev .NET",
  "SRE",
  "Dev Flutter - Mobile",
  "Dev React Native",
  "Scrum Master",
  "Product Owner",
  "UX/UI",
  "Full Stack",
  "Front-end",
  "Banco de talentos",
  "",
];

function getStyles(name: string, nomeVaga: string[], theme: Theme) {
  return {
    fontWeight:
      nomeVaga.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

var formData = new FormData();
const Vaga = React.memo(function Vaga() {
  const { control, handleSubmit } = useForm();
  const theme = useTheme();
  const [nomeVaga, setNomeVaga] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNomeVaga(event.target.value as string[]);
  };

  formData.append("nome", "Chris");

  function whenSubmit(e) {
    e.preventDefault();
  }

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
        <div className={styles.form}>
          <form
            onSubmit={this.whenSubmit}
            action="/"
            method="POST"
            name="myForm"
          >
            <div className={styles.importCurriculo}>
              <div className={styles.texts}>
                <h5>PREENCHER A CANDIDATURA AUTOMATICAMENTE</h5>
                <span>Importe seu currículo para ganhar tempo!</span>
              </div>

              <label className={styles.curriculoFile} htmlFor="importCurriculo">
                <span>Importar curriculo de</span>
                <RiArrowDownSLine />
              </label>
              <input
                accept="application/pdf"
                id="importCurriculo"
                name="importCurriculo"
                type="file"
                autoComplete="curriculo"
                required
              />
            </div>
            <p>
              <span>*</span>Campos obrigatórios
            </p>
            <div className={styles.titles}>
              <h3>Informações pessoais</h3>
            </div>
            <div className={styles.nome}>
              <div>
                <label htmlFor="name">Nome*</label>
                <input
                  name="nome"
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName">Sobrenome*</label>
                <input
                  id="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                type="email
            "
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Telefone*</label>
              <PhoneInput
                name="phoneInput"
                control={control}
                rules={{ required: true }}
              />
            </div>
            <div className={styles.titles}>
              <h3>Perfil</h3>
            </div>
            <div>
              <label htmlFor="perfil">
                Resumo <span className={styles.textNormal}>(Opcional)</span>
              </label>
              <textarea id="perfil" autoComplete="perfil" />
            </div>

            <div className={styles.curriculo}>
              <span>Curriculo*</span>
              <label className={styles.curriculoButton} htmlFor="curriculo">
                Carregar um arquivo ou arrastar e soltar aqui
              </label>
              <input
                accept="application/pdf"
                id="curriculo"
                type="file"
                autoComplete="curriculo"
                required
              />{" "}
            </div>
            <div>
              <div className={styles.titles}>
                <h3>Dados</h3>
              </div>
              <div>
                <label htmlFor="linkedin">
                  Pode compartilhar o link de sua página do Linkedin com a
                  gente?*
                </label>
                <input
                  id="linkedin"
                  type="text"
                  autoComplete="linkedin"
                  required
                />
              </div>
              <div>
                <label htmlFor="github">
                  Possui link do Github com projetos para compartilhar com a
                  gente?*{" "}
                </label>
                <input id="git" type="text" autoComplete="git" required />
              </div>
              <div>
                <label htmlFor="vaga">
                  Pode informar a vaga que tem interesse?*{" "}
                </label>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  required
                  value={nomeVaga}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {names.map((vaga) => (
                    <MenuItem
                      key={vaga}
                      value={vaga}
                      style={getStyles(vaga, nomeVaga, theme)}
                    >
                      {vaga}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
            <div>
              <h4>Tem experiência com quais tecnologias e metodologias?*</h4>
              <div className={styles.grid}>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="ReactJS">React JS</label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="ReactNative">React Native</label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="NodeJS">Node JS</label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="UX/UI">UX/UI</label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="Testes">
                    Testes unitários/Testes Funcionais/Integração
                  </label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="Integracao">Integração CI/CD</label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="MetodologiaAgil">Metodologia Ágil</label>
                </div>
                <div className={styles.itemGrid}>
                  <input type="checkbox" />
                  <label htmlFor="Cloud">
                    Cloud (Azure/Microsoft, AWS/Amazon e GPC/Google)
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4>Como você avalia a sua senioridade atual?*</h4>
              <div className={styles.senioridade}>
                <div>
                  <input
                    id="senioridade"
                    type="radio"
                    autoComplete="senioridade"
                    value="Júnior"
                  />
                  <label htmlFor="Júnior">Júnior</label>
                </div>
                <div>
                  <input
                    id="senioridade"
                    type="radio"
                    autoComplete="senioridade"
                    value="Pleno"
                  />
                  <label htmlFor="Pleno">Pleno</label>
                </div>
                <div>
                  <input
                    id="senioridade"
                    type="radio"
                    autoComplete="senioridade"
                    value="Sênior"
                  />
                  <label htmlFor="Sênior">Sênior</label>
                </div>
                <div>
                  <input
                    id="senioridade"
                    type="radio"
                    autoComplete="senioridade"
                    value="Especialista"
                  />
                  <label htmlFor="Sênior">Especialista</label>
                </div>
              </div>
            </div>
            <button type="submit">Enviar candidatura</button>
          </form>
        </div>
      </div>
    </>
  );
});

export default Vaga;
function props(props: any) {
  throw new Error("Function not implemented.");
}
