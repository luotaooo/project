let defultCity = '上海'
try {
  if (localStorage.city) {
    defultCity = localStorage.city
  }
} catch (e) {
  console.error('异常')
}

export default {
  city: defultCity
}
