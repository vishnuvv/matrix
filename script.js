    let sortedBoxes = [{ num: 1, color: "2b8ead" }, { num: 2, color: "6f98a8" }, { num: 3, color: "BFBFBF" },
    { num: 4, color: "72c3dc" }, { num: 5, color: "333333" }, { num: 6, color: "2b8ead" },
    { num: 7, color: "6f98a8" }, { num: 8, color: "BFBFBF" }, { num: 9, color: "72c3dc" }];

    document.addEventListener('DOMContentLoaded', (event) => {
        setInnerHtml(sortedBoxes);
    });

    function shuffle() {
        let newPos, temp;
        for (let i = sortedBoxes.length - 1; i > 0; i--) {
            newPos = Math.floor(Math.random() * (i + 1));
            temp = sortedBoxes[i];
            sortedBoxes[i] = sortedBoxes[newPos];
            sortedBoxes[newPos] = temp;
            setInnerHtml(sortedBoxes);
        }
    }

    function sort() {
	sortedBoxes.sort(function(a, b) {
	  if (a.num < b.num) return -1;
	  if (a.num > b.num) return 1;
	  return 0;
	});
        setInnerHtml(sortedBoxes);
    }

    function setInnerHtml(arr) {
        let isMobile = document.body.clientWidth < 375;
        let container = document.getElementById('grid-container');
        container.innerHTML = '';
        arr.forEach(ele => {
            let borderLeft = 'border-left:8px solid #' + ele.color + ';';
            container.innerHTML += `<div class="columns-4 box" style="${isMobile ? borderLeft : 'border-left:unset;'}background-color:${ele.color}">${ele.num}</div>`;
        });
    }

    function layOutReset(){
        setInnerHtml(sortedBoxes);
    }
