import React from "react";
import dynamic from "next/dynamic";

const VagaRuby = dynamic(() => import("../../../components/devRuby"));

const Vaga = React.memo(function Vaga() {
  return <VagaRuby />;
});

export default Vaga;
