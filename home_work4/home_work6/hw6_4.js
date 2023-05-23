const colors = {
    'ru pum pu ru rum': {
        red: 'красный',
        green: 'зеленый',
        blue: 'синий'
    },
};

for(key in colors){
    console.log(`${colors[key].red} и ${colors[key].blue}`);
};