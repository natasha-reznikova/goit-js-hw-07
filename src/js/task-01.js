// Напиши скрипт, который выполнит следующие операции.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.

const categories = document.querySelectorAll("li.item");
console.log(categories);

console.log(`В списке ${categories.length} категории`)


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

const categoriesArray = [...categories].map( category =>
    `Категория: ${category.children[0].textContent}
Количество элементов: ${category.children[1].children.length}`
  ).join("\n");
console.log(categoriesArray);
