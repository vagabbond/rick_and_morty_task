import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Layout } from "../../layout";

export const App: FC = () => {
 return (
  <Routes>
   <Route path="/" element={<Layout />}></Route>
   <Route path="*" element={<Navigate to="/" />} />
  </Routes>
 );
};
