export default function ajax(options, callback) {
  let { url, method, timeout, data } = options;
  const xhr = new XMLHttpRequest();
  xhr.timeout = timeout;

  xhr.ontimeout = () => reject("请求超时，已终止！");
  xhr.onreadystatechange = () => {
    console.log("状态改变", xhr.readyState);
    if (xhr.readyState === 4) {
      if ((xhr.status === 200 && xhr.status < 300) || xhr.status === 304) {
        // resolve(JSON.parse(xhr.responseText));
        callback(JSON.parse(xhr.responseText))
      } else {
        // reject();
      }
    }
  };
  xhr.onerror = () => reject("请求出错");

  if (method === "get") {
    const params = Object.entries(data)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    url += `?${params}`;
  }

  xhr.open(method, url);

  if (xhr.method === "get") {
    xhr.send(null);
  } else {
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
  }

  // return new Promise((resolve, reject) => {
  //   xhr.ontimeout = () => reject("请求超时，已终止！");
  //   xhr.onreadystatechange = () => {
  //     console.log("状态改变", xhr.readyState)
  //     if (xhr.readyState === 4) {
  //       if ((xhr.status === 200 && xhr.status < 300) || xhr.status === 304) {
  //         resolve(JSON.parse(xhr.responseText));
  //       } else {
  //         reject();
  //       }
  //     }
  //   };
  //   xhr.onerror = () => reject("请求出错");

  //   if (method === "get") {
  //     const params = Object.entries(data)
  //       .map(([key, value]) => `${key}=${value}`)
  //       .join("&");
  //     url += `?${params}`;
  //   }

  //   xhr.open(method, url);

  //   if (xhr.method === "get") {
  //     xhr.send(null);
  //   } else {
  //     xhr.setRequestHeader("Content-Type", "application/json");
  //     xhr.send(JSON.stringify(data));
  //   }
  // });
}
