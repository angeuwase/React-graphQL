import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  id, 
  name,
  glass,
  type,
  instructions,
) {
  return { id, name, glass, type, instructions };
}

export default function BasicTable({data}) {
    let rows = [];
    data.map(drink => {
        if(drink.drinkInfo?.instructions){
            rows.push(createData(drink.id, drink.name, drink.drinkInfo.glass, drink.drinkInfo.isAlcoholic, drink.drinkInfo.instructions))
        }
        
    })
  
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Glass</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Instructions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.glass}</TableCell>
              <TableCell align="right">{row.type}</TableCell>
              <TableCell align="right">{row.instructions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
