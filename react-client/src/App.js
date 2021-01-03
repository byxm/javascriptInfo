import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    /********* jsonp跨域 **********/
    // jsonp({
    //   url: 'http://localhost:7001/test',
    //   params: { wd: 'Iloveyou' },
    //   callback: 'show'
    // }).then((res) => {
    //   console.log('res', res);
    // })

    



  }, [])

  function jsonp({ url, params, callback }) {
    return new Promise((resolve, reject) => {
      let script = document.createElement('script')
      window[callback] = function(data) {
        console.log('sata', data)
        resolve(data)
        document.body.removeChild(script)
      }
      params = { ...params, callback } // wd=b&callback=show
      let arrs = []
      for (let key in params) {
        arrs.push(`${key}=${params[key]}`)
      }
      script.src = `${url}?${arrs.join('&')}`
      document.body.appendChild(script)
    })
  }

  function clickBtn() {
    window.show()
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={clickBtn}>按钮</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
