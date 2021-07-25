import React, { useRef } from "react";
import { ItemTypes, knightImage } from "../common";
import { useDrag, DragPreviewImage } from "react-dnd";

const Knight = () => {
  const ref = useRef(null);
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  }));

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <span
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 70,
          fontWeight: "bold",
          cursor: "move",
        }}
      >
        ♘
      </span>
    </>
  );
};

export default Knight;
