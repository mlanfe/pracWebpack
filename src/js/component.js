import img from '../img/11.jpg'

function createEle() {
  const divEle = document.createElement('div')

  const div1 = document.createElement('div')
  div1.className = 'bgc content'
  div1.innerHTML = 'hello webpack'
  divEle.appendChild(div1)

  const div2 = document.createElement('div')
  div2.className = 'bgc content2'
  div2.innerHTML = 'hello webpack2'
  divEle.appendChild(div2)

  
  const div3 = document.createElement('div')
  div3.className = 'bgcimg'
  divEle.appendChild(div3)

  const img1 = document.createElement('img')
  img1.src = img
  img1.className = 'imgEle'
  divEle.appendChild(img1)

  const i1 = document.createElement('i')
  i1.className = 'iconfont icon-ashbin'
  divEle.appendChild(i1)

  return divEle
}

const divEle = createEle()
document.body.appendChild(divEle)