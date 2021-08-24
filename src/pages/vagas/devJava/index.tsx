import React from "react";
import dynamic from "next/dynamic";

const VagaJava = dynamic(() => import("../../../components/devJava"));

const Vaga = React.memo(function Vaga() {
  return <VagaJava />;
});

export default Vaga;
