import React from 'react';

const hash = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'black',
  'white',
  'brown',
];

export default function TableCell(props) {
  const value = props.rowIndex * props.width + props.colIndex + 1;
  let backgroundColors = '';
  let singleColor = true;

  for (let i = 0; i < props.multipliers.length; i++) {
    if (value % props.multipliers[i] === 0) {
      if (backgroundColors.length) {
        backgroundColors += ', ';
        singleColor = false;
      }
      backgroundColors += hash[i];
    }
  }

  if (!singleColor)
    backgroundColors = `linear-gradient(45deg, ${backgroundColors})`;

  return (
    <td
      key={props.colIndex}
      style={{
        background: backgroundColors,
      }}
    >
      {value}
    </td>
  );
}
