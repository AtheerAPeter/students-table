import { Table, Card, Tag, Modal, Button, Row, Col, Input, Select } from "antd";
//components import
import ModalForm from "../components/modal";
import StudentTable from "../components/studentstable";
const Home = () => {
  return (
    <div
      style={{
        padding: "10%",
      }}
    >
      <StudentTable />
      <ModalForm />
    </div>
  );
};

export default Home;
