function TinhTong(){
    //1.  lấy giá trị trong thẻ input người dùng nhập
    var x = document.querySelector('#txt_x').value;
     var y = document.getElementById("txt_y").value;

     x = parseFloat(x); //2. chuyển kiểu dữ liệu về dạng số
     y = parseFloat(y);
     //3. tính toán
     var tong = x + y ;
     //4. đưa giá trị tổng vào trong thẻ div kq.
     document.querySelector('#kq').innerHTML = tong;
     //5. Gọi hàm tính tổng ở thuộc tính onClick trên nut bấm. 
} 