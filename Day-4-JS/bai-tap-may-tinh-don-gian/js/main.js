let buttonList = document.getElementsByTagName("button"); // trả về 1
let displayText = "";
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].onclick = function () {
        switch (this.innerText) {
            // Kiểm tra các giá trị text của nút bấm vào
            // Nếu bằng 0 - 9 thì vào các case dưới
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                // Giá trị hiển thị trên màn hình sẽ nối thêm các nút bấm vào
                displayText += this.innerText;
                break;
            case "AC":
                // Nếu bấm nút AC thì xóa đi phần tử cuối trong chuỗi displayText
                displayText = displayText.slice(0, displayText.length - 1);
                break;
            // Nếu bấm nút C thì reset hết, cho displayText = "";
            case "C":
                displayText = "";
                break;
            // Xét trường hợp bấm các nút +, -, x, /, %
            case "+":
            case "-":
            case "/":
            case "%":
            case "x":
                // Xét trường hợp trước khi bấm các nút trên mà đã tồn tại sẵn các nút đấy trong chuỗi displayText
                // thì lấy dấu mới vừa bấm thay vào dấu lúc trước
                switch (displayText.slice(displayText.length - 1)) {
                    case "":
                        break;
                    case "+":
                    case "-":
                    case "/":
                    case "%":
                    case "x":
                        displayText = displayText.slice(0, displayText.length - 1) + this.innerText;
                        break;
                    default:
                        displayText = displayText.replace("x", "*");
                        displayText = "" + eval(displayText);
                        displayText += this.innerText;
                }
                break;
            case "=":
                // Trường hợp cuối chuỗi vẫn có dấu
                // Chỉ khi trên màn hình có giá trị (dispalyText có giá trị) thì mới tính toán
                // Không thì displayText giữ nguyên giá trị = "";
                if (displayText !== "") {
                    // Trường hợp khi bấm dấu = , ký tự cuối cùng trong chuỗi là các dấu +,-,*,/,% hoặc trống ""
                    // thì bỏ qua không thực hiện gì
                    // Nếu không thì thực hiện phép tính (trường hợp cuối chuỗi là số);
                    switch (displayText.slice(displayText.length - 1)) {
                        case "":
                        case "+":
                        case "-":
                        case "/":
                        case "%":
                        case "x":
                            break;
                        default:
                            displayText = displayText.replace("x", "*");
                            displayText = "" + eval(displayText); // hàm eval trả về số, nền dùng ""+ để chyển thành chuỗi
                    }
                }
                break;
        }
        // Đổi trả "*" trong chuỗi về "x" để hiển thị
        displayText = displayText.replace("*", "x");
        console.log(displayText.length);
        // Xét điều kiện nếu chuỗi displayText có length > 14 ký tự thì tách ra mỗi hàng 14 ký tự
        if (displayText.length <= 10) {
            document.getElementById("display").innerText = displayText;
        } else {
            let textDisplay = "";
            let i;
            let rowWidth = 14;
            for (i = rowWidth; i < displayText.length; i += rowWidth) {
                textDisplay += displayText.slice(i - rowWidth, i) + "<br>";
                console.log(textDisplay);
            }
            textDisplay += displayText.slice(i - rowWidth);
            document.getElementById("display").innerHTML = textDisplay;
        }
    };
}

