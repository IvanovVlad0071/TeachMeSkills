//Нам надо идти на работу, но нужно проверить все ли мы взяли или нет?
//Нам точно нужны ключи документы и ручка, но из еды нам надо яблоко или апельсин. 
//Для решения этой задачи нам помогут логические операторы **`|| &&`**.

//```javascript
  //  let key = true
    //let documents = true
    //let pen = true
    //let apple = false
    //let orange = true
    //Ответ поместите в переменную **shouldGoToWork**

    let key = true
let documents = true
let pen = true
let apple = false
let orange = true

let shouldGoToWork = "идем на работу"

    if (key && documents && pen && (apple || orange)){
        console.log(shouldGoToWork);
    } else {
        console.log('идем домой');
    }