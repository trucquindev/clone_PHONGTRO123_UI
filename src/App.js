import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Rental,
  Homepage,
  DetailPost,
  SearchDetail,
  Contact,
} from "./containers/Public";
import { path } from "./ultils/constain";
import {
  System,
  CreatePost,
  ManagePost,
  ManageAccount,
} from "./containers/System";

function App() {
  return (
    <div className="w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.HOME__PAGE} element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.CHO_THUE_NHA} element={<Rental />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route
            path={path.DETAL_POST__TITLE__POSTID}
            element={<DetailPost />}
          />
          <Route path={path.DETAIL_ALL} element={<DetailPost />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
        </Route>
        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />} />
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
          <Route path={path.MANAGE_ACCOUNT} element={<ManageAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
