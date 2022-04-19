<div>
  <h1>Get Started</h1>
  <p>Cada api é inicializada com <code>npm run dev</code></p>
  <p>OBS: o arquivo <code>.env</code> está visivel na pasta do projeto</p>
</div>

<div>
  <h2>query-api (port: 4088)</h2>
  <p><strong>(GET) /balance/[ id ]</strong> => Obtem o saldo total, referente ao id;</p>
  <p><strong>(POST) /balance/[ id ]</strong> => Recalcula o saldo total (baseado no histórico de credit e debit), referente ao id;</p>
</div>

<div>
  <h2>record-api (port: 5070)</h2>
  <p><strong>(GET) /transaction</strong> => Obtem o histórico de transação de todos os ids;</p>
  <p><strong>(POST) /transaction</strong> => Adiciona um nova transação ao histórico. Exemplo (body):</p>
  <code>{ "userId":  1, "value":  50, "credit":  false, "debit":  true }</code>
  <p>Uma nova transação será criada.</p>
  <p><strong>(GET) /transation/[ id ]</strong> => Obtem o histórico de transação referente ao id;</p>
</div>

<div>
  <h1>Project tools:</h1>
  <ul>
    <li>Node.js</li>
    <ul>
      <li>RedisDB</li>
      <li>express</li>
      <li>axios</li>
      <li>Mongodb</li>
      <li>dotenv</li>
    <li>nodemon</li>
    <li>prettier</li>
    </ul>
    <li>Typescript</li>
  </ul>
</div>

