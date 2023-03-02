import React from "react";
import { Pagination, Table } from "react-bootstrap";
// import Pagination from '../Pagination';
import Tbody from "../TbodyWithAction";
import Thead from "../Thead";

export default function TableWithAction({
  withoutPagination,
  handlePageClick,
  actionNotDisplay,
  data,
  thead,
  tbody,
  editUrl,
  deleteAction,
  customAction,
  status,
  pages,
}) {
  return (
    <>
      <Table striped bordered hover>
        <Thead text={thead} />
        <Tbody
          status={status}
          data={data}
          display={display}
          editUrl={editUrl}
          deleteAction={deleteAction}
          actionNotDisplay={actionNotDisplay}
          customAction={customAction}
        />
        {/* {!withoutPagination && data.length ? (
          <Pagination page={pages} handlePageClick={handlePageClick} />
        ) : (
          ""
        )} */}
      </Table>
    </>
  );
}
