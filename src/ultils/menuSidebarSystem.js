import icons from "./icons";
const { FaPenToSquare, PiNotebook, FaUserCircle } = icons;

const menuSidebarSystem = [
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
    text: "Sửa thông tin cá nhân",
    path: "/he-thong/sua-thong-tin-ca-nhan",
    icon: <FaUserCircle />,
  },
  {
    id: 4,
    text: "Liên hệ",
    path: "/he-thong/lien-he",
    icon: <FaUserCircle />,
  },
];

export default menuSidebarSystem;
