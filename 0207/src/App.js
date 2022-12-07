import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 8500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};



const App = () => {
  const dados = luana;
  const total =dados.compras.map((item) => 
    Number(item.preco.replace('R$ ', '')), 
    ).reduce((a,b) => a + b);
  console.log(total);
  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span></p>
      <p>Total: {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}

    </div>

  );
};

export default App;
 