import { Input } from "antd";
const { Search } = Input;
import StudentStore from "../store/studentStore";

const SearchTag = () => {
  const { data, setData, search, setSearch, setIsSearching } = StudentStore();

  const handleSearch = (e) => {
    if (e.target.value != "") {
      let temp = data.filter((item) => {
        return (
          item.name
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.address
            .toString()
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.age.toString().includes(e.target.value.toLowerCase())
        );
      });
      if (temp.length > 0) {
        setSearch(temp);
        setIsSearching(true);
      } else setIsSearching(false);
    } else {
      setIsSearching(false);
      setSearch([]);
    }
  };

  return (
    <Search
      placeholder="Search Names / Addresses / Ages"
      onChange={handleSearch}
      style={{ width: 300 }}
    />
  );
};

export default SearchTag;
