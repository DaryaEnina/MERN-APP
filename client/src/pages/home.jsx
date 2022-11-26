import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import TaskList from "../Components/taskList";

const Home = () => {
  return (
    <Container className="justify-content-md-center">
      <Header />
      <h1 className="mt-5 mb-2 text-center">Welcome</h1>
      <h2 className="mb-5 text-center"> to my test-tasks</h2>
      <TaskList />
      <Footer />
    </Container>
  );
};

export default Home;
