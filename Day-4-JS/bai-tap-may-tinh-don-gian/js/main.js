let arr = [];
let buttonList = document.getElementsByTagName("button"); // trả về 1 HTML collection (giống array)
let result = 0;
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].onclick = function () {
        arr[i] = this.innerText;
        switch (this.innerText) {
            case "C":
                document.getElementById("display").innerText = "";
                break;
            case "+":
                add();
                // document.getElementById("display").innerText += "";
                break;
            case "=":
                document.getElementById("display").innerText = result;
                break;
            default:
                document.getElementById("display").innerText += this.innerText; //
        }
    };
    function add() {
        let num = 1*document.getElementById("display").innerText;
        document.getElementById("display").innerText = "";
        // let result = 0;
        result += num;
        // document.getElementById("display").innerText += "";
        return result;
    }



    console.log(result);
}
console.log(arr);
