import React from "react";
import GrassGenerator from "./GrassGenerator";

function AddGrass() {
    // This component will generate grasses for all defined area
  const surfaceNameList = [
    "Rumput_GSP_1",
    "Rumput_GSP_2",
    "Rumput_GSP_3",
    "Rumput_GSP_4",
    "Rumput_Boulevard_1",
    "Rumput_Boulevard_2",
    "Rumput_Boulevard_3",
  ];

  const surfacePath = "/OSM-mesh-building.glb";
  const modelPath = "/grass.glb";
  const modelName = "GrassBunch5";
  const counts = [3000, 3000, 3000, 3000, 6000, 6000, 6000];
  const Grasses = [];

  for (let i = 0; i < surfaceNameList.length; i++) {
    const grass = (
      <GrassGenerator
        surfacePath={surfacePath}
        surfaceName={surfaceNameList[i]}
        modelPath={modelPath}
        modelName={modelName}
        count={counts[i]}
      />
    );
    Grasses.push(grass);
  }


  return <>{Grasses}</>;
}

export default AddGrass;
