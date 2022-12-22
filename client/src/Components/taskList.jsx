import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const TaskList = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Task 4</Accordion.Header>
        <Accordion.Body>
          1. На платформе специализации{" "}
          <strong>JavaScript/TypeScript+React+Node.js+Express+MongoDB</strong>
          ( или C#+ASP.NET Core MVC+SQL Server) реализовать Web-приложение,
          позволяющее пользователям зарегистрироваться и аутентифицироваться.
          <br />
          2. Неаутентифицированные пользователи не имеют доступа к управлению
          пользователями (доступ только к форме регистрации или форме
          аутентификации). <br />
          3. Аутентифицированные пользователи видят таблицу "пользователи"
          (идентификатор, именем, мылом, датой регистрации, датой последнего
          логина, статусом) с пользователями. <br />
          4. Таблица левой колонкой содержит чек-боксы для множественного
          выделения, в заголовке колонки чек-бокс "выделить все/снять
          выделение". Над таблицей тулбар с действиями: Block, Unblock, Delete
          (два последних можно и лучше иконками). Таблица, множественное
          выделение, тулбар — обязательно. <br />
          5. Обязательно использование CSS-фреймворка (рекомендация —{" "}
          <strong>Bootstrap</strong>, но можно любой другой). <br />
          6. Пользователь может удалить или заблокировать себя — при этом сразу
          должен быть разлогинен. Если кто-то другой блокирует или удаляет
          пользователя, то при любом следующем действии пользователь
          переправляется на страницу логина. При регистрации должна быть
          возможность использовать любой пароль, даже из одного символа.
          Заблокированный пользователь не может войти, удаленный может заново
          зарегистрироваться.
          <br />
          <Link to="/table"> Go to task</Link>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Task 5</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default TaskList;
