window.addEventListener('DOMContentLoaded', () => {

    console.log('////////////////////////////////////Navigation with for////////////////////////////////////////////');
    const menu = [
        {label: 'Home', link: '#'},
        {label: 'About', link: '#'},
        {label: 'Contact', link: '#'},
        {label: 'Products', link: '#'},
    ];

    let ul = document.createElement('ul')

    for(let i = 0; i < menu.length; i++){
    let li = document.createElement('li');
    let a = document.createElement('a');
    li.style.color = 'red';
    li.style.display = 'inline-block';
    li.style.position = 'left';
    li.style.margin = '10px';

    a.innerText = menu[i].label;
    a.href = menu[i].link;

    li.append(a);
    ul.append(li);
    }
    document.body.append(ul)

    console.log('////////////////////////////////////Navigation with forEach////////////////////////////////////////////');

    menu.forEach(item => {
        let li = document.createElement('li');
        let a = document.createElement('a');
        li.style.color = 'red';
        li.style.display = 'inline-block';
        li.style.position = 'left';
        li.style.margin = '10px';

        a.innerText = item.label;
        a.href = item.link;

        li.append(a);
        ul.append(li);
    })

    document.body.append(ul)
});