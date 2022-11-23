import React from "react";
import { useState, useEffect, useCallback } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Container, Table } from "react-bootstrap";

const TablePage = () => {
  const [data, setData] = useState([]);
  const { request } = useHttp();

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/users", "GET", null);
      setData(fetched);
      console.log(fetched);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  return (
    <Container className="justify-content-md-center">
      <h1 className="mt-5 mb-5">Table</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date Reg</th>
            <th>Date Log</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.dateReg}</td>
                <td>{item.dateLog}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};
export default TablePage;
