import { Modal, Row, Col, Input, Select } from "antd";
import StudentStore from "../store/studentStore";
const { Option } = Select;

const ModalForm = () => {
  const {
    modal,
    setModal,
    name,
    age,
    address,
    setName,
    setAddress,
    setAge,
    setGender,
    data,
    setData,
    gender,
  } = StudentStore();

  const handleSubmit = () => {
    setData([
      ...data,
      {
        key: Date.now(),
        name,
        age,
        address,
        gender,
      },
    ]);
    setModal(false);
    setName("");
    setAge("");
    setAddress("");
    setGender("");
  };

  return (
    <Modal
      title="Basic Modal"
      visible={modal}
      onOk={handleSubmit}
      onCancel={() => setModal(false)}
    >
      <Row gutter={[20, 20]}>
        <Col span={15}>
          <Input
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          ></Input>
        </Col>
        <Col span={9}>
          <Input
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          ></Input>
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col span={15}>
          <Input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Input>
        </Col>
        <Col span={9}>
          <Select
            defaultValue="Gender"
            style={{ width: 120 }}
            onChange={(value) => setGender(value)}
            style={{ width: "100%" }}
          >
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalForm;
