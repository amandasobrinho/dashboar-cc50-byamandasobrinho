import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-6 font-sans">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img
            src="/avatar.jpg"
            alt="Amanda"
            className="rounded-full w-16 h-16 border-2 border-purple-500 shadow"
          />
          <h1 className="text-3xl font-bold text-purple-700">CC50 Journey</h1>
        </div>
        <span className="text-sm text-gray-500">Dashboard da Programadora Visionária</span>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-2">📅 Agenda de Estudos</h2>
          <p>Visualize suas tarefas semanais com status e progresso.</p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-2">🗺️ Plano de Estudos</h2>
          <p>Módulos organizados por semana com vídeos e leituras integradas.</p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-2">✍️ Diário da Jornada</h2>
          <p>Anote aprendizados, desabafos e insights com estilo.</p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-2">🏆 Conquistas</h2>
          <p>Insígnias por marcos como Deploy, Git, HTML e mais!</p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-2">💻 Área Técnica</h2>
          <p>Aprenda os conceitos técnicos com exemplos visuais.</p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-bold text-purple-600 mb-2">📊 Painel de Desempenho</h2>
          <p>Acompanhe sua motivação, progresso e tempo de estudo.</p>
        </section>

        <section className="bg-white p-4 rounded-xl shadow-md col-span-full">
          <h2 className="text-xl font-bold text-purple-600 mb-2">💬 Mentora Virtual</h2>
          <p>Dicas, mensagens motivacionais e provocações do seu oráculo tech-poético favorito 😄</p>
        </section>
      </main>
    </div>
  );
}
