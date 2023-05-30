let recipeMap = new Map ([
    ["Огурцы", 300],
    ["Помидоры", 350],
    ["Соль", 10],
    ["Сметана", 110]
])


recipeMap.forEach((value) => {
    if (value > 100) {
    console.log(value)}
})