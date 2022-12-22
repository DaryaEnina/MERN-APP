import React from "react";
import axios from "axios";
import { useState, useEffect, useCallback, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import { Container, Table, Button, Row, Col } from "react-bootstrap";
import { LoginContext } from "../../context/loginContext";
import { baseUrl } from "../../url";

const TablePage = () => {
  const [data, setData] = useState([]);
  const [rowItem, setRowItem] = useState([]);
  const { request } = useHttp();
  const auth = useContext(LoginContext);

  const storageData = JSON.parse(localStorage.getItem("userData"));

  const fetchUsers = useCallback(async () => {
    try {
      const fetched = await request(`${baseUrl}/api/users`, "GET", null);
      setData(fetched);
    } catch (e) {}
  }, [request]);

  const onChoose = useCallback(
    (e, item) => {
      if (e.target.checked === true) {
        let rows = rowItem;
        if (!rows.includes(item._id)) {
          rows.push(item._id);
        }
        setRowItem(rowItem);
      } else {
        const deleteItem = rowItem.filter((p) => p !== item._id);
        setRowItem(deleteItem);
      }
    },
    [rowItem]
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  //BLOCK
  const onBlock = useCallback(
    async (id) => {
      try {
        await axios.put(
          `/api/users/status/block/${id}`,
          { id },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (error) {
        console.log(error);
      }
      for (let i = 0; i < rowItem.length; i++) {
        if (storageData.userId === rowItem[i]) {
          auth.logOut();
        } else {
          fetchUsers();
        }
      }
    },

    [fetchUsers, auth, storageData, rowItem]
  );

  //UNBLOCK
  const onUnBlock = useCallback(
    async (id) => {
      try {
        await axios.put(
          `/api/users/status/unblock/${id}`,
          { id },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        fetchUsers();
      } catch (error) {
        console.log(error);
      }
    },
    [fetchUsers]
  );

  //DELETE
  const deleteUser = useCallback(
    async (id) => {
      try {
        await axios.delete(
          `/api/users/delete/${id}`,
          { id },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
      } catch (error) {
        console.log(error);
      }
      for (let i = 0; i < rowItem.length; i++) {
        if (storageData.userId === rowItem[i]) {
          auth.logOut();
        } else {
          fetchUsers();
        }
      }
    },
    [auth, fetchUsers, rowItem, storageData]
  );

  return (
    <>
      <Container className="justify-content-md-center">
        <h1 className="mt-5 mb-5 text-center">Table</h1>
        <Row>
          <Col md={4}>
            <Button
              className="m-3"
              variant="dark"
              onClick={() => onBlock(rowItem)}
            >
              Block
            </Button>
            <Button
              className="m-3"
              variant="secondary"
              onClick={() => onUnBlock(rowItem)}
            >
              Unblock
            </Button>
            <Button
              className="m-3"
              variant="danger"
              onClick={() => deleteUser(rowItem)}
            >
              Delete
            </Button>
          </Col>
        </Row>

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
                  <td>
                    <input
                      type="checkbox"
                      id={item._id}
                      onChange={(e) => onChoose(e, item)}
                    />
                  </td>
                  <td>{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.dateReg}</td>
                  <td>{item.dateLog}</td>
                  <td>{item.status === true ? "unblock" : "block"}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};
export default TablePage;
