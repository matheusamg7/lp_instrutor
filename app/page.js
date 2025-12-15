import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="py-6 md:py-12 pb-4 md:pb-8 text-center relative z-10">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-[800px]">
          <div className="bg-[#545454] p-3 sm:p-4 md:p-6 rounded-xl mb-4 md:mb-6 inline-block shadow-md max-w-[280px] sm:max-w-[350px] md:max-w-[420px]">
            <Image
              src="/logo_instrutor.svg"
              alt="Instrutor Ideal"
              width={420}
              height={112}
              className="h-auto w-full block"
              priority
            />
          </div>
          <p className="text-base sm:text-lg md:text-xl font-medium text-white tracking-wide italic px-2">A maneira mais segura de aprender a dirigir.</p>
        </div>
      </header>

      <main className="flex-1 w-full relative z-10 pb-12 md:pb-20">
        <div className="container mx-auto px-4 flex flex-col items-center max-w-[600px]">

          {/* Single Consolidated Card */}
          <section className="bg-white rounded-[20px] p-6 sm:p-8 md:p-10 w-full text-center text-grey-dark shadow-2xl">
            <h1 className="font-extrabold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 text-orange-primary leading-tight">
              Cadastre-se na lista de espera
            </h1>

            <div className="text-base sm:text-lg mb-6 md:mb-8">
              <p className="mb-6 md:mb-8 leading-relaxed text-grey-dark">
                Nossa plataforma está sendo desenhada para que o aluno encontre você, <strong>Instrutor Ideal</strong> de forma rápida e transparente. Se você quer mais visibilidade no novo modelo da CNH, garanta sua vaga.
              </p>
              
              <a
                href="https://forms.gle/9rn3cvrjWCnsWxo57"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-orange-primary text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:bg-orange-dark transition-all duration-300 transform flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg mb-4"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 flex-shrink-0">
                  <path d="M9 11L12 14L22 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Quero ser um Instrutor Ideal
              </a>
            </div>

            <a
              href="https://instagram.com/instrutorideal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-grey-medium hover:text-orange-primary transition-colors duration-300 text-sm sm:text-base mb-4"
            >
              Siga @instrutorideal
            </a>

            <p className="text-xs sm:text-sm text-grey-medium italic">
              Os primeiros instrutores terão prioridade nos testes.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
