import React from 'react';
import TableRow from './TableRow';
export default function Table(props) {
  return (
    <div>
      <h2>TABLE</h2>
      <table>
        <tbody>
          {props.grid.map((row, rowIndex) => {
            return (
              <TableRow
                row={row}
                key={rowIndex}
                rowIndex={rowIndex}
                multipliers={props.multipliers}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
