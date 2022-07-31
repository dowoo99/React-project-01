import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <Layouts>{props.children}</Layouts>;
};
const Layouts = styled.div`
  width: 1200px;
  height: 800px;
  background-color: aliceblue;
  margin: 0 auto;
`;
export default Layout;
