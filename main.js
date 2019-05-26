function createElementFromString(str) {
  const div = document.createElement('div')
  div.innerHTML = str
  return div.firstElementChild
}

const map = window.map;
const list = document.querySelector('#list')
for (let key in map) {
  console.log('key: ', key);
  const value = map[key]
  const link = createElementFromString(`
    <div><a href="${value}">${key}</a></div>
  `)
  list.appendChild(link)
}