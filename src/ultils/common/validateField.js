const validate = (payload, setInvaliableFiles) => {
  const fileds = Object.entries(payload);
  let invalidate = 0;
  fileds.forEach((item) => {
    if (item[1] === "") {
      setInvaliableFiles((prev) => [
        ...prev,
        {
          name: item[0],
          massage: "Trường này không được bỏ trống",
        },
      ]);
      invalidate++;
    }
  });
  fileds.forEach((item) => {
    switch (item[0]) {
      case "password":
        if (item[1].length < 6) {
          setInvaliableFiles((prev) => [
            ...prev,
            {
              name: item[0],
              massage: "Mật khẩu ít nhất 6 ký tự",
            },
          ]);
          invalidate++;
        }
        break;
      case "phone":
        if (!+item[1]) {
          setInvaliableFiles((prev) => [
            ...prev,
            {
              name: item[0],
              massage: "Số điện thoại không hợp lệ",
            },
          ]);
          invalidate++;
        }
        break;
      case "priceNumber":
      case "areaNumber":
        if (+item[1] === 0) {
          setInvaliableFiles((prev) => [
            ...prev,
            {
              name: item[0],
              massage: "Chưa nhập giá trị cho trường này",
            },
          ]);
          invalidate++;
        }
        if (!item[1]) {
          setInvaliableFiles((prev) => [
            ...prev,
            {
              name: item[0],
              massage: "Trường này phải là số",
            },
          ]);
          invalidate++;
        }
        break;
      default:
        break;
    }
  });
  return invalidate;
};

export default validate;
