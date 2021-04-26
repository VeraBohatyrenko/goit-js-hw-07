// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const input = document.getElementById("validation-input");
input.classList.add("validation-input");
const length = input.getAttribute('data-length');
console.log(length);

input.addEventListener('blur', validInputLength);
function validInputLength(e) {
  if (e.currentTarget.value.length == length) {
    e.currentTarget.classList.add('valid');
    e.currentTarget.classList.remove('invalid');
  }
  else {
    e.currentTarget.classList.add('invalid');
    e.currentTarget.classList.remove('valid');
  }
}



