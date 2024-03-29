import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  async  testGet(url: string){
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
        }
    }).then(res=>{
        console.log(res)
        return res.json();
    })
    .then(parsedRes=>{
        console.log(parsedRes)
    })
  }
  async  testPost(url: string){
      fetch(url, {
          method: 'POST',
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({

          })
      }).then(res=>{
          console.log(res)
          // return res.json();
      })
      // .then(parsedRes=>{
      //     console.log(parsedRes)
      // })
  }
  async  testDelete(url: string){
      fetch(url, {
          method: 'DELETE',
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
          }
      }).then(res=>{
          console.log(res)
          // return res.json();
      })
      // .then(parsedRes=>{
      //     console.log(parsedRes)
      // })
  }

  constructor() { }
}
