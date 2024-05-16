import SecKv from './section/secKV.js'
import SecAsk from './section/secAsk.js'


export default async function Home() {

  return (
    <main>
      <SecKv/>
      <SecAsk/>
    </main>
  );
}
