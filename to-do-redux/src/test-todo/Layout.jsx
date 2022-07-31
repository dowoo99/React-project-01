import React from "react";
import styled from "styled-components";
const Layout = (props) => {
  return <Layouts>{props.children}</Layouts>;
};
const Layouts = styled.div`
  width: 1200px;
  height: 800px;
  margin: 0 auto;
  background-color: aliceblue;
`;
export default Layout;
