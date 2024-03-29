import { Injectable } from '@angular/core';

async function applyText(res: Response){
  let text = await res.text();
  if (document.querySelector('.display') !== null)
    document.querySelector('.display')!.innerHTML = text;
}

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  async  testGet(e: any){
    let url = e.target.parentNode.querySelector('input').value

    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
        }
    }).then(res=>{
        console.log(res)
        // return res.json();
        applyText(res)
        
    })
    // .then(parsedRes=>{
    //     console.log(parsedRes)
    // })
  }
  async  testPost(e: any){
      let url = e.target.parentNode.querySelector('#url').value
      let body = e.target.parentNode.querySelector('#body').value
      console.log(body)
      fetch(url, {
          method: 'POST',
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token'),
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(JSON.parse(body))
      }).then(res=>{
          console.log(res)
          // return res.json();
          applyText(res)
          
      })
      // .then(parsedRes=>{
      //     console.log(parsedRes)
      // })
  }
  async  testDelete(e: any){
      let url = e.target.parentNode.querySelector('input').value

      fetch(url, {
          method: 'DELETE',
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
          }
      }).then(res=>{
          console.log(res)
          // return res.json();
          applyText(res)
          
      })
      // .then(parsedRes=>{
      //     console.log(parsedRes)
      // })
  }
  async  testPut(e: any){
      let url = e.target.parentNode.querySelector('input').value

      fetch(url, {
          method: 'PUT',
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
          }
      }).then(res=>{
          console.log(res)
          // return res.json();
          applyText(res)
          
      })
      // .then(parsedRes=>{
      //     console.log(parsedRes)
      // })
  }
  async  testPatch(e: any){
      let url = e.target.parentNode.querySelector('input').value

      fetch(url, {
          method: 'PATCH',
          headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
          }
      }).then(res=>{
          console.log(res)
          // return res.json();
          applyText(res)
          
      })
      // .then(parsedRes=>{
      //     console.log(parsedRes)
      // })
  }

  constructor() { }
}
