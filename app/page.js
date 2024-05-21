import SecKv from './section/secKV.js'
import SecAsk from './section/secAsk.js'
import "./globals.css";
import "./css/reset.css";


export default async function Home() {

  return (
    <main>
      <SecKv/>
      <SecAsk/>
    </main>
  );
}
