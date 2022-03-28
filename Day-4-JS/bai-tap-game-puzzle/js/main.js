// Tạo mảng gồm các phần tử là tên các folder chứa ảnh
// Số ảnh trong mỗi folder bằng số thẻ img, đặt tên từ 0 để theo biến i trong for
let arrImg = ["captain", "hulk", "ironMan", "blackWidow", "hawkEye", "thor"];

let images = document.getElementsByClassName("images");

for (let i = 0; i < images.length; i++) {
    // lấy chỉ số ngẫu nhiên trong chuỗi arrImg
    let j = Math.floor(Math.random() * (arrImg.length));
    images[i].src = `images/${arrImg[j]}/${i}.jpg`;
    images[i].addEventListener("click", changeImg);

    function changeImg() {
        // lấy chỉ số ngẫu nhiên trong chuỗi arrImg
        let k = Math.floor(Math.random() * (arrImg.length));
        // gán src của ảnh bấm click (this.src) theo link tạo random ở trên
        this.src = `images/${arrImg[k]}/${i}.jpg`;

        // Gán biến cho đường dẫn của ảnh đầu tiên,
        // rồi đem so sánh với đường dẫn của lần lượt các ảnh còn lại
        // Lưu ý: Chi so sánh phần đường dẫn thư mục chứa ảnh, không bào gồm tên file (bỏ đi 5 ký tự cuối trong chuỗi)
        let linkImg = images[0].src;
        let count = 0;
        for (let i = 0; i < images.length; i++) {
            let imgNameLength = `${i}.jpg`.length; // Độ dài tên ảnh
            // So sánh chuỗi đường dẫn của thư mục chứa ảnh đầu với thư mục chứa các ảnh còn lại
            if (linkImg.slice(0, linkImg.length - 5) === images[i].src.slice(0, images[i].src.length - parseInt(imgNameLength))) {
                // Mỗi lần đúng thì biến count tăng thêm 1, nếu tất cả các lần cùng đúng thì count == số lượng thẻ img (images.length)
                count++;
            }
        }
        console.log(count);
        // count === images.length có nghĩa là tất cả các ảnh đều nằm chung 1 folder => tạo ra ảnh đúng
        if (count === images.length) {
            setTimeout(function () {
                alert("Xin chúc mừng");
            }, 20); // Set timeout vì alert thực hiện trước khi cả vòng lặp hoàn thành
        }
    }
}
