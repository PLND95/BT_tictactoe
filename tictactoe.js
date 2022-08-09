let createButton = '';

    for (let i = 1; i <= 64; i++) {
        if (i % 8 == 0) {
            createButton += '<button onclick="caro(this.value)" class="btnCaro">&nbsp</button> <br> ';
        } else {
            createButton += '<button onclick="caro(this.value)" class="btnCaro">&nbsp</button>';
        }
    }
    document.getElementById("cocaro").innerHTML = createButton;

    //Tạo mảng chứa giá trị bàn cờ
    let checkButton = document.getElementsByClassName("btnCaro");
    for (let i = 0; i < 64; i++) {
        checkButton[i].value = i + 1;
    }
    let countBtnCaro = 0;
    let arrCaro = new Array(8);
    for (let i = 0; i < 8; i++) {
        let childArr = new Array();
        for (let j = 0; j < 8; j++) {
            childArr.push(checkButton[countBtnCaro].innerHTML);
        }
        arrCaro[i] = childArr;
        countBtnCaro++;
    }
    console.log(arrCaro);







    let rotate = 1;
    function caro(evt) {
        if (rotate == 1 && checkButton[evt - 1].innerHTML != 'x' && checkButton[evt - 1].innerHTML != 'o') {
            checkButton[evt - 1].innerHTML = 'x';
            rotate = 2;
        }
        else if (rotate == 2 && checkButton[evt - 1].innerHTML != 'x' && checkButton[evt - 1].innerHTML != 'o') {
            checkButton[evt - 1].innerHTML = 'o';
            rotate = 1;
        }


        let n = Math.floor(evt / 8);
        let m = (evt % 8) - 1;
        if (m == -1) {
            m = 7;
        }

        for (let i = 0; i < 8; i++) {
            if (i == n) {
                for (let j = 0; j < 8; j++) {
                    if (j == m) {
                        arrCaro[n][m] = checkButton[evt - 1].innerHTML;
                    }
                }

            }
        }

        //Check x
        if (arrCaro[n][m] == 'x') {

            //Check hàng dọc
            if ((arrCaro[n - 1][m] == 'x' && arrCaro[n - 2][m] == 'x') || (arrCaro[n + 1][m] == 'x' && arrCaro[n + 2][m] == 'x') || (arrCaro[n + 1][m] == 'x' && arrCaro[n - 1][m] == 'x')) {
                alert('Cờ x win rồi');
            }

            //Check hàng ngang
            if ((arrCaro[n][m - 1] == 'x' && arrCaro[n][m - 2] == 'x') || (arrCaro[n][m + 1] == 'x' && arrCaro[n][m + 2] == 'x') || (arrCaro[n][m + 1] == 'x' && arrCaro[n][m - 1] == 'x')) {
                alert('Cờ x win rồi');
            }

            // Check hàng chéo xuyệt trái
            if ((arrCaro[n - 1][m - 1] == 'x' && arrCaro[n - 2][m - 2] == 'x') || (arrCaro[n + 1][m + 1] == 'x' && arrCaro[n + 2][m + 2] == 'x') || (arrCaro[n + 1][m + 1] == 'x' && arrCaro[n - 1][m - 1] == 'x')) {
                alert('Cờ x win rồi');
            }

            //Check hàng chéo xuyệt phải
            if ((arrCaro[n - 1][m + 1] == 'x' && arrCaro[n - 2][m + 2] == 'x') || (arrCaro[n + 1][m - 1] == 'x' && arrCaro[n + 2][m - 2] == 'x') || (arrCaro[n + 1][m - 1] == 'x' && arrCaro[n - 1][m + 1] == 'x')) {
                alert('Cờ x win rồi');
            }
        }

        if (arrCaro[n][m] == 'o') {

            //Check hàng dọc
            if ((arrCaro[n - 1][m] == 'o' && arrCaro[n - 2][m] == 'o') || (arrCaro[n + 1][m] == 'o' && arrCaro[n + 2][m] == 'o') || (arrCaro[n + 1][m] == 'o' && arrCaro[n - 1][m] == 'o')) {
                alert('Cờ o win rồi');
            }

            //Check hàng ngang
            if ((arrCaro[n][m - 1] == 'o' && arrCaro[n][m - 2] == 'o') || (arrCaro[n][m + 1] == 'o' && arrCaro[n][m + 2] == 'o') || (arrCaro[n][m + 1] == 'o' && arrCaro[n][m - 1] == 'o')) {
                alert('Cờ o win rồi');
            }

            // Check hàng chéo xuyệt trái
            if ((arrCaro[n - 1][m - 1] == 'o' && arrCaro[n - 2][m - 2] == 'o') || (arrCaro[n + 1][m + 1] == 'o' && arrCaro[n + 2][m + 2] == 'o') || (arrCaro[n + 1][m + 1] == 'o' && arrCaro[n - 1][m - 1] == 'o')) {
                alert('Cờ o win rồi');
            }

            //Check hàng chéo xuyệt phải
            if ((arrCaro[n - 1][m + 1] == 'o' && arrCaro[n - 2][m + 2] == 'o') || (arrCaro[n + 1][m - 1] == 'o' && arrCaro[n + 2][m - 2] == 'o') || (arrCaro[n + 1][m - 1] == 'o' && arrCaro[n - 1][m + 1] == 'o')) {
                alert('Cờ o win rồi');
            }
        }
        console.log(n, m, arrCaro[n][m], evt);
    }



    //Reset lại bàn cờ
    function resetCaro() {
        //Tạo giao diện bàn cờ bằng button
        let createButton = '';

        for (let i = 1; i <= 64; i++) {
            if (i % 8 == 0) {
                createButton += '<button onclick="caro(this.value)" class="btnCaro">&nbsp</button> <br> ';
            } else {
                createButton += '<button onclick="caro(this.value)" class="btnCaro">&nbsp</button>';
            }
        }
        document.getElementById("cocaro").innerHTML = createButton;

        let checkButton = document.getElementsByClassName("btnCaro");
        for (let i = 0; i < 64; i++) {
            checkButton[i].value = i + 1;
        }
        let countBtnCaro = 0;
        let arrCaro = new Array(8);
        for (let i = 0; i < 8; i++) {
            let childArr = new Array();
            for (let j = 0; j < 8; j++) {
                checkButton[countBtnCaro].innerHTML = "&nbsp"
                childArr.push(checkButton[countBtnCaro].innerHTML);
            }
            arrCaro[i] = childArr;
            countBtnCaro++;
        }
    }