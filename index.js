var state = {
  items:[]
};

var data = localStorage.getItem('data');
if (data) {
    state = JSON.parse(data)
}

window.addEventListener('load', function () {

    var button = document.querySelector('button');
    var list   = document.querySelector('ul');
    var input  = document.querySelector('input');
    update();

    function update(){
        list.innerHTML = '';
        for (var i = 0; i < state.items.length; i++){
            var el = document.createElement('li');
            el.innerText = state.items[i];
            list.appendChild(el);
        }
    }

    button.addEventListener('click', function () {

        var valueText = input.value;
        valueText = valueText.replace(/\s+/g,'');
        if (valueText == ""){
            return;
        } else {
            state.items.push(valueText);
            update();
            localStorage.setItem('data', JSON.stringify(state));
        };
    });

});