import Mock from 'mockjs'

import rule from './rule'

// 拦截器url
let Intercept = () => {
  for (let r in rule) {
    let reg = new RegExp(r)
    Mock.mock(reg, rule[r])
  }
}

let Random = data => {
  let rtn = ''
  for (let r in rule) {
    if (r === data) {
      rtn = Mock.mock(rule[r])
      break
    }
  }
  return rtn
}
export { Intercept, Random }
