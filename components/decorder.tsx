import styles from '../styles/Home.module.css'
import { useEffect, useMemo, useState } from "react";

export default function Decorder() {
  const [url, setUrl] = useState<string>("");

  function decord() {
    var ta = document.getElementById("ta") as HTMLInputElement | null;
    var url_base = ta !== null ? decodeURIComponent(ta.value) : '';

    setUrl(url_base)
  }

  return (
    <div>
    <main className={styles.main}>
      <h1 className={styles.title}>
        URL デコーダー
      </h1>
      <div>
        <div className="prg">
          <div className="encodebox">
            <div className="procedure">① デコードする文字列を入力します</div>
            <div id="textarea" className="encodetargetbox">
              <div className="textarea_cover">
                <textarea id="ta" className="encodebox" name="target_encode" cols={34} rows={5}></textarea>
              </div>
            </div>
            <div className="clearboth"></div>
            <span className="procedure">② 下記ボタンをクリックします</span>
            <div>
              <button className="exebox encodeexebox" onClick={decord}>変換する</button>
            </div>
            <div className="procedure">③ デコード後の文字列が表示されます</div>
            <div id="result_area" className="encoderesultbox">
              <div id="result_area_cover" className="textarea_cover textarea_result_before">
                <textarea id="rta" className="encodebox" name="result_encode" value={url} cols={34} rows={5}></textarea>
              </div>
            </div>
            <div className="clearboth"></div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}