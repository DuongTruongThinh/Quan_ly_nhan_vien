// + Tài khoản tối đa 4 - 6 ký số, không để trống
function kiemTraTaiKhoan(idErr, value) {
  const regex = /^\d{4,6}$/;
  var kySoHopLe = regex.test(value);
  if (kySoHopLe == false) {
    document.getElementById(idErr).innerHTML = "Tài khoản phải có 4-6 ký số";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// + Tên nhân viên phải là chữ, không để trống
function kiemTraTen(idErr, value) {
  const regex = /^[A-Za-z\s]+$/;
  var tenHopLe = regex.test(value) && value.trim().length > 0;
  if (tenHopLe == false) {
    document.getElementById(idErr).innerHTML =
      "Tên không được để trống và phải là chữ";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// + Email phải đúng định dạng, không để trống
function kiemTraEmail(idErr, value) {
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  var emailHopLe = regex.test(value) && value.trim().length > 0;
  if (emailHopLe == false) {
    document.getElementById(idErr).innerHTML =
      "Email không được để trống và phải đúng định dạng";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không để trống
function kiemTraMatKhau(idErr, value) {
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{6,10}$/;
  var matKhauHopLe = regex.test(value) && value.trim().length > 0;
  if (matKhauHopLe == false) {
    document.getElementById(idErr).innerHTML =
      "Mật khẩu không được để trống và có 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// + Ngày làm không để trống, định dạng mm/dd/yyyy
function kiemTraNgayLam(idErr, value) {
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  var ngayLamHopLe = value.trim().length > 0 && regex.test(value);
  if (ngayLamHopLe == false) {
    document.getElementById(idErr).innerHTML =
      "Ngày làm không để trống, định dạng mm/dd/yyyy";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// + Lương cơ bản 1 000 000 - 20 000 000, không để trống
function kiemTraLuongCoBan(idErr, value) {
  if ((value.trim().length = 0)) {
    document.getElementById(idErr).innerHTML = "Lương cơ bản không để trống";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const gioLam = parseFloat(value);
  if (isNaN(gioLam)) {
    document.getElementById(idErr).innerHTML =
      "Nhập lương cơ bản từ 1000000-2000000";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else if (gioLam < 1000000 || gioLam > 20000000) {
    document.getElementById(idErr).innerHTML =
      "Nhập lương cơ bản từ 1000000-2000000";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).style.display = "none";
    return gioLam >= 1000000 && gioLam <= 20000000;
  }
}

// + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
function kiemTraChucVu(idErr, value) {
  if (value != "Sếp" && value != "Trưởng phòng" && value != "Nhân viên") {
    document.getElementById(idErr).innerHTML =
      "Chọn chức vụ hợp lệ (Sếp, Trưởng Phòng, Nhân Viên)";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
// + Số giờ làm trong tháng 80 - 200 giờ, không để trống
function kiemTraGioLam(idErr, value) {
  if (value === null || value.trim() === "") {
    document.getElementById(idErr).innerHTML = "Số giờ làm không để trống";
    document.getElementById(idErr).style.display = "block";
    return false;
  }
  const gioLam = parseFloat(value);
  if (isNaN(gioLam)) {
    document.getElementById(idErr).innerHTML = "Nhập số giờ làm từ 80-200";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else if (gioLam < 80 || gioLam > 200) {
    document.getElementById(idErr).innerHTML = "Nhập số giờ làm từ 80-200";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).style.display = "none";
    return gioLam >= 80 && gioLam <= 200;
  }
}
// Kiểm tra loại nhân viên (xuất sắc, giỏi, khá, trung bình)
function kiemTraChucVu(idErr, value) {
  if (value != "xuất" && value != "Trưởng phòng" && value != "Nhân viên") {
    document.getElementById(idErr).innerHTML =
      "Chọn chức vụ hợp lệ (Sếp, Trưởng Phòng, Nhân Viên)";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
function kiemTraSearchLoaiNhanVien(idErr, value) {
  const loaiNhanVien = ["xuất sắc", "giỏi", "khá", "trung bình"];
  var valueHopLe = loaiNhanVien.includes(value);
  if (valueHopLe == false) {
    document.getElementById(idErr).innerHTML =
      "Điền loại nhân viên hợp lệ (xuất sắc, giỏi, khá, trung bình)";
    document.getElementById(idErr).style.display = "block";
    return false;
  } else {
    document.getElementById(idErr).innerHTML = "";
    return true;
  }
}
