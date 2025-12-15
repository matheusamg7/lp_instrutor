export default function Home() {
  return (
    <>
      <main className="flex-1 w-full relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-[600px]">

          {/* Single Consolidated Card */}
          <section className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 w-full text-center text-grey-dark shadow-2xl">
            <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 text-orange-primary leading-tight">
              Faça parte dos instrutores em destaque no lançamento
            </h1>

            <div className="text-base sm:text-lg mb-6 md:mb-8">
              <p className="mb-4 leading-relaxed text-grey-dark">
                Estamos desenvolvendo o <strong>Instrutor Ideal</strong>, uma plataforma criada para ajudar instrutores a ganhar mais visibilidade, transmitir mais confiança ao aluno e organizar toda a rotina em um só lugar.
              </p>
              <p className="mb-6 md:mb-8 leading-relaxed text-grey-dark">
                Ao se cadastrar, você fica entre os instrutores que terão prioridade e mais exposição quando a plataforma for lançada.
              </p>
              
              <a
                href="https://forms.gle/9rn3cvrjWCnsWxo57"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine block w-full bg-orange-primary text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:scale-[1.02] hover:bg-orange-dark transition-all duration-300 transform flex items-center justify-center text-base sm:text-lg mb-4"
              >
                Quero ser um Instrutor Ideal
              </a>
            </div>

            <a
              href="https://instagram.com/instrutorideal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-grey-medium hover:text-orange-primary transition-colors duration-300 text-sm sm:text-base underline"
            >
              Siga @instrutorideal
            </a>
          </section>

        </div>
      </main>
    </>
  );
}
