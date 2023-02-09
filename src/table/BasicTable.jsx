import React, { useContext, useMemo } from "react";
import { useTable } from "react-table";
import { AnimeContexte } from "../contexte/AnimeContexte";
import { COLUMNS } from "./Columns";

export const BasicTable = () => {
  const { dataTable } = useContext(AnimeContexte);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => dataTable, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: dataTable,
    });

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <>{column.render("Header")}</>
                  <i className="arrow down"></i>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
