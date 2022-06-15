//Bài 1: Xuất 3 số theo thứ tự tăng dần
/**
 * Mô hình 3 khối
 * -Input:
 *      + soThu1: Number, soThu2: Number, soThu3: Number
 * -Xử lý:
 *      + soThu1>soThu2 && soThu2>soThu3 => ketQuabai1 = soThu1, soThu2, soThu3
 *      + soThu1>soThu2 && soThu2<soThu3 && soThu1>soThu3 => ketQuabai1 = soThu1, soThu3, soThu2
 *      + soThu1<soThu2 && soThu1>soThu3 => ketQuabai1 = soThu2, soThu1, soThu3
 *      + soThu1<soThu2 && soThu1<soThu3 && soThu2>soThu3 => ketQuabai1 = soThu2, soThu3, soThu1
 *      + soThu1<soThu3 && sothu1>soThu2 => ketQuabai1 = soThu3, soThu1, soThu2
 *      + soThu1<soThu3 && soThu1<soThu2 && sothu3>soThu2 => ketQuabai1 = soThu3, soThu2, soThu1
 * - Output:
 *      + ketQuabai1: ?
 */

document.getElementById('btnSapXep').onclick = function () {
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);

    var ketQuaBai1 = '';

    ketQuaBai1 = soThu1 > soThu2 && soThu2 > soThu3 ? soThu3 + ' < ' + soThu2 + ' < ' + soThu1 :
        soThu1 === soThu2 && soThu1 > soThu3 ? soThu3 + ' < ' + soThu2 + ' < ' + soThu1 :
            soThu2 === soThu3 && soThu2 < soThu1 ? soThu2 + ' < ' + soThu3 + ' < ' + soThu1 :
                soThu1 > soThu2 && soThu3 > soThu2 && soThu1 > soThu3 ? soThu2 + ' < ' + soThu3 + ' < ' + soThu1 :
                    soThu1 === soThu3 && soThu1 > soThu2 ? soThu2 + ' < ' + soThu3 + ' < ' + soThu1 :
                        soThu1 === soThu3 && soThu1 < soThu2 ? soThu1 + ' < ' + soThu3 + ' < ' + soThu2 :
                            soThu1 > soThu2 && soThu3 > soThu1 ? soThu2 + ' < ' + soThu1 + ' < ' + soThu3 :
                                soThu2 > soThu1 && soThu2 > soThu3 && soThu1 > soThu3 ? soThu3 + ' < ' + soThu1 + ' < ' + soThu2 :
                                    soThu2 > soThu3 && soThu3 > soThu1 ? soThu1 + ' < ' + soThu3 + ' < ' + soThu2 :
                                        soThu1 + ' < ' + soThu2 + ' < ' + soThu3;


    document.getElementById('ketQuaBai1').innerHTML = 'Thứ tự tăng dần của 3 số là: ' + ketQuaBai1;
}

// Bài 2: Chương trình "Chào hỏi":

/**
 * Mô hình 3 khối
 * - Input:
 *      + bo: string, me: string, anhTrai: string, emGai: string
 * - Xử lý:
 *      + input === 'bo' => Xin Chào Bố!
 *      + input === 'me' => Xin Chào Mẹ!
 *      + input === 'anhTrai' => Xin Chào Anh Trai!
 *      + input === 'emGai' => Xin Chào Em Gái!
 * - Output :
 *      ketQuaBai2 = Xin Chào ? !
 */

document.getElementById('btnChaoHoi').onclick = function () {
    var thanhVien = document.getElementById('thanhVien').value;
    var bo = document.getElementById('bo').value;
    var me = document.getElementById('me').value;
    var anhTrai = document.getElementById('anhTrai').value;
    var emGai = document.getElementById('emGai').value;
    var ketQuaBai2 = '';

    switch (thanhVien) {
        case bo: {
            ketQuaBai2 = bo;
        }
            break;
        case me: {
            ketQuaBai2 = me;
        }
            break;
        case anhTrai: {
            ketQuaBai2 = anhTrai;
        }
            break;
        case emGai: {
            ketQuaBai2 = emGai;
        }
            break;
        default: {
            ketQuaBai2 = 'Người lạ ơi';
        }
    }

    document.getElementById('ketQuaBai2').innerHTML = 'Xin chào ' + ketQuaBai2 + '!';
}

// Bài 3: Đếm số chẵn lẻ:
/**
 * Mô hình 3 khối:
 * - Input:
 *      + so1: Number,  so2: Number, so3: Number
 * - Xử lý:
 *      + Số chia hết cho 2 là số chẵn => còn lại là số lẻ
 *      + Công thức n %2 == 0;
 * - Output:
 *      + ketQuaBai3 = Có ? số chẵn và ? số lẻ
 */

document.getElementById('btnDemSo').onclick = function () {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);
    var tong = 0;
    // so1 % 2 == 0 && tong++
    // so2 % 2 == 0 && tong++
    // so3 % 2 == 0 && tong++

    if(so1 % 2 == 0){
        tong = tong + 1;
    }

    if(so2 % 2 == 0){
        tong = tong + 1;
    }
    if(so3 % 2 == 0){
        tong = tong + 1;
    }
    document.getElementById('ketQuaBai3').innerHTML = 'Có: ' + tong + ' số chẵn và ' + (3 - tong) + ' số lẻ';

}

// Bài 4: Đoán hình tam giác:
/**
 * Mô hình 3 khối
 * - Input:
 *      + canh1: Number, canh2: Number, canh3: Number
 * - Xử lý:
 *      + (canh1 === canh2 && canh2 !== canh3) || (canh1 === canh3 && canh1 !== canh2) || (canh2 === canh3 && canh2 !== canh1)  => Tam giác đều
 *      + canh1 === canh2 && canh2 === canh3 && canh1 === canh3 => Tam giác cân
 *      + canh1^2 = canh2^2 + canh3^2 || canh2^2 = canh1^2 + canh3^2 || canh3^2 = canh1^2 + canh2^2  => Tam giác vuông
 *      + Các trường hợp còn lại => Một loại tam giác khác
 * - Output:
 *      + ketQuaBai4 = ?
 */

document.getElementById('btnDuDoan').onclick = function () {
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);
    var ketQuaBai4 = '';
    if ((canh1 === canh2 && canh2 !== canh3) || (canh1 === canh3 && canh1 !== canh2) || (canh2 === canh3 && canh2 !== canh1)) {
        ketQuaBai4 = 'Là: Hình tam giác Cân';
    } else if (canh1 === canh2 && canh2 === canh3 && canh1 === canh3) {
        ketQuaBai4 = 'Là: Hình tam giác Đều';
    } else if ((canh1 * canh1 === canh2 * canh2 + canh3 * canh3) || (canh2 * canh2 === canh1 * canh1 + canh3 * canh3) || (canh3 * canh3 === canh1 * canh1 + canh2 * canh2)) {
        ketQuaBai4 = 'Là: Hình tam giác Vuông';
    } else {
        ketQuaBai4 = 'Là: Một loại tam giác khác';
    }
    document.getElementById('ketQuaBai4').innerHTML = ketQuaBai4;
}