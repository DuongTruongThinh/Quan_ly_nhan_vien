function renderDSNV(dsnv) {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var contentTr = `<tr>
    <td class="align-middle text-center">${nv.taiKhoan}</td>
    <td class="align-middle text-center">${nv.hoTen}</td>
    <td class="align-middle text-center">${nv.email}</td>
    <td class="align-middle text-center">${nv.ngayLam}</td>
    <td class="align-middle text-center">${nv.chucVu}</td>
    <td class="align-middle text-center">${nv.tongLuong()}</td>
    <td class="align-middle text-center">${nv.loaiNhanVien()}</td>
    <td>
    <button class="btn btn-success my-2" data-toggle="modal"
    data-target="#myModal" onclick = "suaNV('${nv.taiKhoan}')">Sửa</button>
    <button class="btn btn-danger my-2" onclick = "xoaNV('${
      nv.taiKhoan
    }')">Xóa</button>
    </td>
    </tr>`;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function timViTri(id, dsnv) {
  return dsnv.findIndex(function (nv) {
    return nv.taiKhoan == id;
  });
}
function layThongTinTuForm() {
  var _taiKhoan = document.getElementById("tknv").value;
  var _hoTen = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _matKhau = document.getElementById("password").value;
  var _ngayLam = document.getElementById("datepicker").value;
  var _luongCoBan = document.getElementById("luongCB").value;
  var _chucVu = document.getElementById("chucvu").value;
  var _gioLamTrongThang = document.getElementById("gioLam").value;
  var nv = new NhanVien(
    _taiKhoan,
    _hoTen,
    _email,
    _matKhau,
    _ngayLam,
    _luongCoBan,
    _chucVu,
    _gioLamTrongThang
  );
  return nv;
}
function showThongTinLenForm(nv) {
  document.getElementById("tknv").value = nv.taiKhoan;
  document.getElementById("name").value = nv.hoTen;
  document.getElementById("email").value = nv.email;
  document.getElementById("password").value = nv.matKhau;
  document.getElementById("datepicker").value = nv.ngayLam;
  document.getElementById("luongCB").value = nv.luongCoBan;
  document.getElementById("chucvu").value = nv.chucVu;
  document.getElementById("gioLam").value = nv.gioLamTrongThang;
}
function searchNhanVienTheoLoai(value) {
  var dsnv_phanLoai = [];
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var loaiNhanVien = nv.loaiNhanVien();
    loaiNhanVien = loaiNhanVien.toLowerCase();
    if (loaiNhanVien == value) {
      dsnv_phanLoai.push(nv);
    }
  }
  renderDSNV(dsnv_phanLoai);
}
function renderDSNV_theoLoaiNhanVien(dsnv) {
  var contentHTML = "";
  for (var i = 0; i < dsnv.length; i++) {
    var nv = dsnv[i];
    var contentTr = `<tr>
    <td class="align-middle text-center">${nv.taiKhoan}</td>
    <td class="align-middle text-center">${nv.hoTen}</td>
    <td class="align-middle text-center">${nv.email}</td>
    <td class="align-middle text-center">${nv.ngayLam}</td>
    <td class="align-middle text-center">${nv.chucVu}</td>
    <td class="align-middle text-center">${nv.tongLuong()}</td>
    <td class="align-middle text-center">${nv.loaiNhanVien()}</td>
    <td>
    <button class="btn btn-success my-2" data-toggle="modal"
    data-target="#myModal" onclick = "suaNV('${nv.taiKhoan}')">Sửa</button>
    <button class="btn btn-danger my-2" onclick = "xoaNV('${
      nv.taiKhoan
    }')">Xóa</button>
    </td>
    </tr>`;
    contentHTML = contentHTML + contentTr;
  }
  document.getElementById("tableDanhSach").innerHTML = contentHTML;
}
function troLaiDSNV(idErr) {
  renderDSNV(dsnv);
  document.getElementById("searchName").value = "";
  document.getElementById(idErr).style.display = "";
}
