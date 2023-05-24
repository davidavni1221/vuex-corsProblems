import axios from 'axios'


const apiFirstCall='http://127.0.0.1:5173/token'
const bodyOfFirstCall='grant_type=device&username=mobaxe-test@mobaxe.com&password=zLguX4XM9e&deviceToken=76cb26a8-1e7a-4013-96d4-739e3928b779'

const apiSecondCall='http://127.0.0.1:5173/api/Programs/Favorites'
const exampleAccessToken='bdFLVMRFpUyghz6nT6A9LqhIFvTEQX8HMY6kZ8sE_lulMytdr4BET_TDLSoJX9O9CeK2LvqtU4GpQVQuvztvhH3BomWU2I5SLp2Q2iwCQnyW2liUcPd0tQBLkgA704jfNwkBjbUAMRu8JEVIw2HIYuMavHL3vzLHqM4PHfuhgGz0PNjqHaklZYg7PvQRrzYU_W5j1wFFdTk2Q--kLcm-3I822Ugq2c1hNl3sbFBkmQQZ4KvBgxhK8jsQR8oOItm8ti0xSi9yY4nFoTESLly6633QrFh-IxEnzUFnIqns7XQDYPb0IgivqWzR9mz7ILlVK3lKZOdyq5OCkC46E3NP8KTgyJWkuJpWiSQX3bK2sVPh8OCPe3XUiuvGv4LDDUp_sLMiNd4HQMBiNOk9AGS-DZDjm3yaby0js7CKj6Vetv39jWHcSyIixFVXB9h8Q7tzH2HXUOmwKkwqyQ9ryYpniUbX_in4oGh2MdFFDefkHYCWXipoXO2-MpwKM22_w8Qo1jalroZoQBwfg_fQW1l-zr8XmRKdJ9m_cut1_ul9lqsIDMty7Ws-WAd91j57flWlWPUG61mbM8uc1MC5msow2CmdGSSR85BDuZb7Jt2Rbq18oksin29MN2TkGS0IuVG2sRnv5IFXg8L705RmGGNV4g'

export const listService = {
  query,
}

async function query() {
  //first api call to get the access token
  const res1 = await axios.post(apiFirstCall, bodyOfFirstCall)
  const accessToken = res1.data.access_token

  //second api call to get the lists
//   const res2 = await axios.get(api, {
//   headers: {
//     'Authorization': 'bearer'+{exampleAccessToken}
//   }
// });
}











// async function getById(id) {
//   return await httpService.get(`${ENDPOINT}/${id}`)
//   // return axios.get(BASE_URL + id).then((res) => res.data)
//   // return storageService.getById(KEY, id)
// }

// async function remove(id) {
//   return await httpService.delete(`${ENDPOINT}/${id}`)
//   // return axios.delete(BASE_URL + id).then((res) => res.data)
//   // return storageService.remove(KEY, id)
// }

// async function save(toy) {
//   return toy._id
//     ? await httpService.put(`${ENDPOINT}/${toy._id}`, toy)
//     : await httpService.post(ENDPOINT, toy)
//   // return toy._id ? storageService.put(KEY, toy) : storageService.post(KEY, toy)
// }

// function getEmptyToy() {
//   return Promise.resolve({
//     name: '',
//     price: 0,
//     labels: [],
//     createdAt: new Date(),
//     inStock: true,
//     imgUrl:null
//   })
// }

// function getlabels() {
//   return labels
// }

// function _createToys() {
//   let toys = utilService.loadFromStorage(KEY)
//   if (!toys || !toys.length) {
//     toys = [
//       _createToy('Doll', 150, ['On wheels', 'Doll']),
//       _createToy('Truck', 80, ['Outdoor', 'Baby']),
//       _createToy('Cards', 150, ['Puzzle', 'Art']),
//     ]
//     utilService.saveToStorage(KEY, toys)
//     // 'On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor'
//   }
//   return toys
// }

// function _createToy(name, price, labels, reviews) {
//   return {
//     _id: utilService.makeId(),
//     name,
//     price,
//     labels,
//     inStock: true,
//     createdAt: new Date(),
//     reviews: [
//       {
//         _id: utilService.makeId(),
//         txt: utilService.getLoremIpsum(5),
//         createdAt: new Date(),
//       },
//       {
//         _id: utilService.makeId(),
//         txt: utilService.getLoremIpsum(5),
//         createdAt: new Date(),
//       },
//       {
//         _id: utilService.makeId(),
//         txt: utilService.getLoremIpsum(5),
//         createdAt: new Date(),
//       },
//     ],
//   }
// }
