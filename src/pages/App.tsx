import React, { useState } from 'react';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import style from './App.module.scss'
import Cronometro from '../components/Cronometro';
import { Itarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([])
  const [selecionado, setselecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa) {
    setselecionado(tarefaSelecionada)
    setTarefas(TarefasAnteriores => TarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
