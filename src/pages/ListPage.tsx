import React from "react";
import Header from "../components/Main/Header";
import Search from "../components/ListPage/Search";
import Nav from "../components/Main/Nav";
import Select from "../components/ListPage/Select";
import List from "../components/ListPage/List";

const ListPage = () => {
  return (
    <div className="w-[375px] mx-auto">
      <Header />
      <Search />
      <Nav />
      <Select />
      <List />
    </div>
  );
};

export default ListPage;
