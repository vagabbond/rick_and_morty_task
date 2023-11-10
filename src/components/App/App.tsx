import { FC } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import { Layout } from "../../layout";
import { Home } from "../../pages/home";
export const App: FC = () => {
 return (
  <Routes>
   <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
   </Route>
   <Route path="*" element={<Navigate to="/" />} />
  </Routes>
 );
};
