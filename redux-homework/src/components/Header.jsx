import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Headers>
      <div>My Todo List</div>
      <div>React</div>
    </Headers>
  );
};
const Headers = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  background-color: white;
`;
export default Header;
