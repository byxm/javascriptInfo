import React from "react";
import Content from "./content";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { observe } from "./game";

const ReactDnd = ({ knightPosition }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Content knightPosition={knightPosition} />;
    </DndProvider>
  );
};

export default ReactDnd;
