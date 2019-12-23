import React from 'react';
import TableCell from './TableCell';

export default function TableRow(props) {
  return (
    <tr>
      {props.row.map((color, colIndex) => {
        return (
          <TableCell
            key={`${colIndex}${props.rowIndex}`}
            colIndex={colIndex}
            rowIndex={props.rowIndex}
            width={props.row.length}
            multipliers={props.multipliers}
          />
        );
      })}
    </tr>
  );
}
