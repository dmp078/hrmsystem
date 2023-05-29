import React, { Suspense } from "react";
import { Spinner } from "react-bootstrap";

interface Props {
  children: any;
}

const SuspenseWrapper = (props: Props) => {
  return <Suspense fallback={<div></div>}>{props.children}</Suspense>;
};

export default SuspenseWrapper;
