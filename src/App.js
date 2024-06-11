import { Routes, Route } from 'react-router-dom';
import { Home,Login,RentaApartment,RentalHouse,RentalRoom,RentalSpace,Homepage } from './containers/Public';
import { path } from './ultils/constain';

function App() {
  return (
    <div className="w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home/>}>
          <Route path='*' element={<Homepage/>} />
          <Route path={path.LOGIN} element={<Login/>}/>
          <Route path={path.CHO_THUE_CAN_HO} element={<RentaApartment/>}/>
          <Route path={path.CHO_THUE_MAT_BANG} element={<RentalSpace/>}/>
          <Route path={path.CHO_THUE_PHONG_TRO} element={<RentalRoom/>}/>
          <Route path={path.CHO_THUE_NHA} element={<RentalHouse/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
