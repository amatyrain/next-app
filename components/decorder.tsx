import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Decorder() {

  function decord() {
    var ta = document.getElementById("ta") as HTMLInputElement | null;
    var rta = document.getElementById("rta") as HTMLInputElement | null;
    var url = '';

    if (ta !== null) {
      url = decodeURIComponent(ta.value);
    }
    if (rta !== null) {
      rta.textContent = url;
    }
  }

  return (
    <div>
    <main className={styles.main}>
      <h1 className={styles.title}>
        URL デコーダー
      </h1>
      <div>
        <div className="prg">
          <form id="frm">
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
                <input className="exebox encodeexebox" onClick={decord} type="submit" value="変換する" />
              </div>
              <div className="procedure">③ デコード後の文字列が表示されます</div>
              <div id="result_area" className="encoderesultbox">
                <div id="result_area_cover" className="textarea_cover textarea_result_before">
                  <textarea id="rta" className="encodebox" name="result_encode" cols={34} rows={5}></textarea>
                </div>
              </div>
              <div className="clearboth"></div>
            </div>
          </form>
        </div>
      </div>
    </main>
    </div>
  )
}