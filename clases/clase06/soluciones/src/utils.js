export function request(url) {
  return new Promise(function(resolve, reject){
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
      if(req.readyState === 4){
        if(req.status === 200){
          resolve(req.response);
        }
        else{
          reject(new Error(req.statusText));
        }
      }
    };
    req.onerror = () => reject(new Error(req.statusText));
    req.open('GET', url);
    req.send();
  });
}