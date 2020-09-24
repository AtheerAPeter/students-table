import create from "zustand";

const StudentStore = create((set) => ({
  name: null,
  age: null,
  address: null,
  gender: null,
  data: [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "Alsinaa street",
      gender: "male",
    },
    {
      key: "2",
      name: "Noor",
      age: 42,
      address: "10 Downing Street",
      gender: "female",
    },
    {
      key: "3",
      name: "John",
      age: 32,
      address: "Karadah",
      gender: "male",
    },
    {
      key: "4",
      name: "Eloise",
      age: 42,
      address: "Almansour",
      gender: "female",
    },
  ],
  modal: false,
  search: "",
  isSearching: false,
  setModal: (value) => set({ modal: value }),
  setData: (value) => set({ data: value }),
  setName: (value) => set({ name: value }),
  setAge: (value) => set({ age: value }),
  setAddress: (value) => set({ address: value }),
  setGender: (value) => set({ gender: value }),
  setSearch: (value) => set({ search: value }),
  setIsSearching: (value) => set({ isSearching: value }),
}));

export default StudentStore;
