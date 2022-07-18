import _ from 'lodash';
import './style.css';
import Icon from './minos.jpg';

function component() {
  const header = document.createElement('div');

  header.innerHTML = '<h1 id="title">Pizza  Dungeon</h1>';
  header.classList.add('header');

  const nav = document.createElement('div');

  nav.classList.add('nav');

  header.appendChild(nav);

  const rightBtn = document.createElement('input');
  rightBtn.id = 'right';
  rightBtn.classList.add('tab');
  rightBtn.type = 'button';
  rightBtn.value = 'contact';

  const midBtn = document.createElement('input');
  midBtn.id = 'mid';
  midBtn.classList.add('tab');
  midBtn.type = 'button';
  midBtn.value = 'menu';

  const leftBtn = document.createElement('input');
  leftBtn.id = 'left';
  leftBtn.classList.add('tab');
  leftBtn.type = 'button';
  leftBtn.value = 'home';

  nav.appendChild(leftBtn);
  nav.appendChild(midBtn);
  nav.appendChild(rightBtn);



  return header;
}

function clear() {
  document.querySelectorAll('.menu').forEach(menu => {
    menu.remove();
  })
}

function home() {
  clear();

  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
  })

  document.getElementById('left').classList.add('active');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const spacer = document.createElement('div');
  spacer.classList.add('spacer');

  const menuHead = document.createElement('div');
  menuHead.classList.add('menu-head');
  menuHead.innerHTML = '<h2>About Us</h2>';

  const box1 = document.createElement('div');
  box1.classList.add('menu-box');
  box1.innerHTML = '<p>The pizza of your dreams is the pizza of your nightmares.</p>';

  const box2 = document.createElement('div');
  box2.classList.add('menu-box');
  box2.innerHTML = '<p>In a deep and forgotten pit the elder god Zzi`za kneads his dough... </p>';

  const minos = new Image();
  minos.src = Icon;

  menu.appendChild(spacer);
  menu.appendChild(menuHead);
  menu.appendChild(box1);
  menu.appendChild(box2);
  menu.appendChild(minos);
  document.body.appendChild(menu);
}

function menu() {
  clear();

  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
  })

  document.getElementById('mid').classList.add('active');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const spacer = document.createElement('div');
  spacer.classList.add('spacer');

  const menuHead = document.createElement('div');
  menuHead.classList.add('menu-head');
  menuHead.innerHTML = '<h2>Menu</h2>';

  const box1 = document.createElement('div');
  box1.classList.add('menu-box');

  const box2 = document.createElement('div');
  box2.classList.add('menu-box');

  menu.appendChild(spacer);
  menu.appendChild(menuHead);
  menu.appendChild(box1);
  menu.appendChild(box2);

  const pizza = document.createElement('div');
  pizza.classList.add('sub-box');
  pizza.innerHTML = '<h3>Pizza</h3><p>pepperoni</p><p>supreme</p>';
  box1.appendChild(pizza);

  const salad = document.createElement('div');
  salad.classList.add('sub-box');
  salad.innerHTML = '<h3>salad</h3><p>green</p><p>super green</p>';
  box1.appendChild(salad);

  document.body.appendChild(menu);
}

function contact() {
  clear();

  document.querySelectorAll('.tab').forEach(btn => {
    btn.classList.remove('active');
  })

  document.getElementById('right').classList.add('active');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const spacer = document.createElement('div');
  spacer.classList.add('spacer');

  const menuHead = document.createElement('div');
  menuHead.classList.add('menu-head');
  menuHead.innerHTML = '<h2>Contact</h2>';

  const box1 = document.createElement('div');
  box1.classList.add('menu-box');
  box1.innerHTML = '<p>Ask a goblin...</p>'

  const box2 = document.createElement('div');
  box2.classList.add('menu-box');

  menu.appendChild(spacer);
  menu.appendChild(menuHead);
  menu.appendChild(box1);
  menu.appendChild(box2);
  document.body.appendChild(menu);
}

document.body.appendChild(component());
home();

document.getElementById('left').addEventListener('click', home);
document.getElementById('mid').addEventListener('click', menu);
document.getElementById('right').addEventListener('click', contact);