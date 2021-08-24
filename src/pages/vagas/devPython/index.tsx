import React from "react";
import dynamic from "next/dynamic";

const VagaPython = dynamic(() => import("../../../components/devPython"));

const Vaga = React.memo(function Vaga() {
  return <VagaPython />;
});

export default Vaga;
