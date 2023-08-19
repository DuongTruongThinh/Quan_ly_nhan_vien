var dsnv = [];
function loadDSNV() {
  var dsnv_JSON = localStorage.getItem("DSNV");
  if (dsnv_JSON != null) {
    var dsnv_ARR_OBJ = JSON.parse(dsnv_JSON);
    dsnv = dsnv_ARR_OBJ.map(function (item) {
      return new NhanVien(
        item.taiKhoan,
        item.hoTen,
        item.email,
        item.matKhau,
        item.ngayLam,
        item.luongCoBan,
        item.chucVu,
        item.gioLamTrongThang
      );
    });
    renderDSNV(dsnv);
  }
}
loadDSNV();
function themNV() {
  var nv = layThongTinTuForm();
  var isValid =
    kiemTraTaiKhoan("tbTKNV", nv.taiKhoan) &
    kiemTraTen("tbTen", nv.hoTen) &
    kiemTraEmail("tbEmail", nv.email) &
    kiemTraMatKhau("tbMatKhau", nv.matKhau) &
    kiemTraNgayLam("tbNgay", nv.ngayLam) &
    kiemTraLuongCoBan("tbLuongCB", nv.luongCoBan) &
    kiemTraChucVu("tbChucVu", nv.chucVu) &
    kiemTraGioLam("tbGiolam", nv.gioLamTrongThang);
  if (!isValid) {
    return;
  }
  dsnv.push(nv);
  var DSNV_JSON = JSON.stringify(dsnv);
  localStorage.setItem("DSNV", DSNV_JSON);
  renderDSNV(dsnv);
}
function xoaNV(id) {
  var index = timViTri(id, dsnv);
  dsnv.splice(index, 1);
  renderDSNV(dsnv);
}
function suaNV(id) {
  var index = timViTri(id, dsnv);
  var nv = dsnv[index];
  showThongTinLenForm(nv);
  document.getElementById("tknv").disabled = true;
}
function capNhatNV() {
  var nv = layThongTinTuForm();
  var index = timViTri(nv.taiKhoan, dsnv);
  dsnv[index] = nv;
  renderDSNV(dsnv);
}
document.getElementById("btnTimNV").addEventListener("click", function () {
  var idErr = "tbSearchLoaiNhanVien";
  var value = document.getElementById("searchName").value;
  value = value.toLowerCase();
  var kiemTra = kiemTraSearchLoaiNhanVien(idErr, value);
  console.log("🚀 ~ file: main.js:63 ~ kiemTra:", kiemTra);
  if (kiemTra == false) {
    return;
  } else {
    searchNhanVienTheoLoai(value);
    document.getElementById(
      idErr
    ).innerHTML = `<button class="btn btn-success mx-2" id="troLaiDSNV" onclick = "troLaiDSNV('${idErr}')">Trở lại danh sách nhân viên</button>`;
    document.getElementById(idErr).style.display = "block";
  }
});
