const event_Key = document.getElementById('eventkeyvalue');
const event_code = document.getElementById('eventkeycodevalue');
const event_value = document.getElementById('eventCodevalue');

document.addEventListener('keydown', (e) =>{
    let key_name = e.key;
    let key_code = e.code;
    let c = e.which;
    event_Key.innerHTML = key_name;
    event_code.innerHTML = c;
    event_value.innerHTML = key_code;
    console.log(key_code, key_name, c);
})


