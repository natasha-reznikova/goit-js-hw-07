// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
//   <input
//       type="text"
//       id="validation-input"
//       data-length="6"
//       placeholder="Введи 6 символов"
//     />

const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('blur', onInputBlur)


const getInputLength = Number(inputEl.getAttribute('data-length')) 


function onInputBlur(event) {
    if (event.currentTarget.value.length < getInputLength) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }
    console.log(inputEl.classList)
}


