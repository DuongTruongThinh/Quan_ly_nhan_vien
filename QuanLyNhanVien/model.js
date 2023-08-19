function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLamTrongThang
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLamTrongThang = _gioLamTrongThang;
  this.tongLuong = function () {
    if (_chucVu == "Sếp") return _luongCoBan * 3;
    else if (_chucVu == "Trưởng phòng") return _luongCoBan * 2;
    else if (_chucVu == "Nhân viên") return _luongCoBan;
  };
  this.loaiNhanVien = function () {
    if (_gioLamTrongThang >= 192) return "Xuất sắc";
    else if (_gioLamTrongThang >= 176) return "Giỏi";
    else if (_gioLamTrongThang >= 160) return "Khá";
    else if (_gioLamTrongThang < 160) return "Trung bình";
  };
}
