let cel = document.getElementById("ibox1");
        let fah = document.getElementById("ibox2");
        let kel = document.getElementById("ibox3");
        let resetbtn = document.querySelector(".btn");

        let ec = cel.value;
        let ef = fah.value;
        let ek = kel.value;

        cel.addEventListener('input', (e) => {
            let ans = parseFloat(cel.value);
            let ansfah = (ans * 9 / 5) + 32;
            fah.value = ansfah;
            let anskel = ans + 273.15;
            kel.value = anskel;

            resetbtn.addEventListener('click', (e) => {
                cel.value = ec;
                fah.value = ef;
                kel.value = ek;
            })

        });

        fah.addEventListener('input', (e) => {
            let ans = parseFloat(fah.value);
            let anscel = (ans - 32) * 5 / 9;
            cel.value = anscel;
            let anskel = (ans - 32) * 5 / 9 + 273.15;
            kel.value = anskel;

            resetbtn.addEventListener('click', (e) => {
                cel.value = ec;
                fah.value = ef;
                kel.value = ek;
            })

        });

        kel.addEventListener('input', (e) => {
            let ans = parseFloat(kel.value);
            let anscel = ans - 273.15;
            cel.value = anscel;
            let ansfah = (ans - 273.15) * 9 / 5 + 32;
            fah.value = ansfah;

            resetbtn.addEventListener('click', (e) => {
                cel.value = ec;
                fah.value = ef;
                kel.value = ek;
            })

        });