let label = document.getElementsByTagName("label");
//Tạo vòng lặp qua từng phần tử có tag label
// Khi có phần tử nào bấm click, sẽ bắt giá trị i tương ứng với phần tử đấy
// lặp từ 0 đến < .length thì giá trị của i chạy từ 0 -> ,length-1 (là index của phần tử cuối cùng)
for (let i = 0; i < label.length; i++) {
    label[i].onclick = function () {
        console.log(this.innerHTML); // this == label[i]
        let fastToggle = document.querySelector("#fast input");
        let cheapToggle = document.querySelector("#cheap input");
        let goodToggle = document.querySelector("#good input");

        if (cheapToggle.checked && goodToggle.checked) {
            if (i === 2) {
                goodToggle.checked = false;
            }
        } else if (goodToggle.checked && fastToggle.checked) {
            if (i === 1) {
                fastToggle.checked = false;
            }
        } else if (cheapToggle.checked && fastToggle.checked) {
            if (i === 0) {
                cheapToggle.checked = false;
            }
        }
    }
}