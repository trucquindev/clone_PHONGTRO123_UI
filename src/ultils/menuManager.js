import icons from "./icons";
const { FaPenToSquare, PiNotebook, FaUserCircle } = icons;

const menuManager = [
  {
    id: 1,
    text: "Đăng tin cho thuê",
    path: "/he-thong/tao-moi-bai-dang",
    icon: <FaPenToSquare />,
  },
  {
    id: 2,
    text: "Quản lý tin đăng",
    path: "/he-thong/quan-ly-bai-dang",
    icon: <PiNotebook />,
  },
  {
    id: 3,
    text: "Thông tin tài khoản",
    path: "/he-thong/thong-tin-tai-khoan",
    icon: <FaUserCircle />,
  },
];

export default menuManager;
