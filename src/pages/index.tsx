import React, { useEffect } from 'react';
import styles from './index.css';
// const ipcRenderer = window.ipcRenderer
// const ipcRenderer = electron
const electron = window.require('electron');
const { ipcRenderer } = electron

export default function () {

  useEffect(() => {

    setTimeout(() => {
      console.log(electron);
    }, 2000)

    ipcRenderer.send('sth', '子进程发送过来的消息')

    ipcRenderer.on('sth_response', (event: any, data: any) => {
      console.log(new Date())
      console.log(data)
    })
  }, [])


  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
