let $ = e => document.querySelector(e);
let $$ = es => document.querySelector(es);

const root = $('#root');

var boxTemp = $('#boxTemp').content;
var detailsTemp = $('#detailsTemp').content;

var Fragment = document.createDocumentFragment();

for(let i = 0; i < data.length; i++){
    var boxTempClone = boxTemp.cloneNode(true);
    boxTempClone.querySelector('h2').innerHTML = 'Lesson ' + (i + 1);

    for (let e = 0; e < data[i].length; e++) {
        var detailsTempClone = detailsTemp.cloneNode(true);
        detailsTempClone.querySelector('.dataWrap').innerHTML = data[i][e].data;     
        detailsTempClone.querySelector('summary').innerHTML = data[i][e].summary;
        boxTempClone.querySelector('.wrap').appendChild(detailsTempClone);
    }
    Fragment.appendChild(boxTempClone)
}

root.appendChild(Fragment)