import SecKv from './section/secKV.js'
import SecAsk from './section/secAsk.js'
import "./css/sec_kv.css";


export default async function Home() {

  return (
    <main className='sec_project_wrap'>
      <SecKv/>
      <SecAsk/>
    </main>
  );
}
