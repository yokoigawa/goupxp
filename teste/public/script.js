//Tema
const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;
//background
function f_background(){

  const colors = [
      '#2196f3',
      '#e91e63',
      '#ffeb3b',
      '#74ff1d',
  ]
  
  function createSquare()
  {
      const section = document.querySelector('section');
      const square = document.createElement('aside');
      square.setAttribute( "id", "back_square");
  
      var size = Math.random() * 50;
  
      square.style.width = 20 + size + 'px';
      square.style.height = 20 + size + 'px';
      
  
      square.style.top = Math.random() * innerHeight + 'px';
      square.style.left = Math.random() * innerWidth + 'px';
  
      const bg = colors[Math.floor(Math.random() * colors.length)];
      square.style.background = bg;
  
      section.appendChild(square);
  
      setTimeout(() =>{
          square.remove()
      },5000)
  }
  setInterval(createSquare, 10)
  }
  