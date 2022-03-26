let arr = [];
let buttonList = document.getElementsByTagName("button"); // trả về 1 HTML collection (giống array)
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].onclick = function () {
        arr[i] = this.innerText;
        switch (this.innerText) {
            case "C":
                document.getElementById("display").innerText = "";
                break;
            case "=":
                document.getElementById("display").innerText += "";
                break;
            default:
                document.getElementById("display").innerText += this.innerText; //
        }
    };
    console.log(arr);
}
console.log(arr);
