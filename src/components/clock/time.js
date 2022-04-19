const hour = 60;
const clockHeight = () => (new Date().getHours() * hour) + new Date().getMinutes()

export const time = () => {
  const clockLine = document.querySelector('.clock');
  clockLine.classList.add('clockline');
  clockLine.style.marginTop = `${clockHeight()}px`;
  clockLine.style.height = '2px';
  clockLine.style.width = '40px';
  clockLine.style.backgroundColor = 'red';
  clockLine.style.position = 'absolute';
  clockLine.style.width = '80%';
}