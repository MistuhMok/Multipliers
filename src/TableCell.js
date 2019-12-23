import React from 'react';

export default function TableCell(props) {
  const value = props.rowIndex * props.width + props.colIndex + 1;
  let multiplier;

  for (let i = 0; i < props.multipliers.length; i++) {
    if (value % props.multipliers[i] === 0) multiplier = i;
  }

  return (
    <td
      key={props.colIndex}
      data-multiplier={multiplier}
      onClick={props.handleDraw}
    >
      {value}
    </td>
  );
}
