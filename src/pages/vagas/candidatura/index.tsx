import React from "react";
import dynamic from "next/dynamic";

const Candidatura = dynamic(() => import("../../../components/candidatura"));

const FormCandidatura = React.memo(function FormCandidatura() {
  return <Candidatura />;
});

export default FormCandidatura;
