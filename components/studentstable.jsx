import StudentStore from "../store/studentStore";
import { Table, Card, Tag, Button, Input } from "antd";
//components import
import SearchTag from "../components/search";
const StudentTable = () => {
  const {
    data,
    setData,
    setModal,
    isSearching,
    setIsSearching,
    search,
  } = StudentStore();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (value) => (
        <Tag color={value === "male" ? "geekblue" : "pink"}>{value}</Tag>
      ),
    },
    {
      title: "",
      dataIndex: "key",
      key: "key",
      render: (value) => (
        <Button
          type="text"
          danger
          onClick={(e) => setData(data.filter((item) => item.key != value))}
        >
          Remove
        </Button>
      ),
    },
  ];

  return (
    <Card hoverable className="card">
      <div className="flex">
        <Button type="primary" onClick={() => setModal(true)}>
          Add
        </Button>
        <SearchTag />
      </div>
      <Table dataSource={isSearching ? search : data} columns={columns} />;
    </Card>
  );
};

export default StudentTable;
