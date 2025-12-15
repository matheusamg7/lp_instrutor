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
              
              <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200 text-left mb-6 md:mb-8">
                <p className="mb-2 text-sm sm:text-base">Envie um e-mail para: <br/><a href="mailto:contato.instrutorideal@gmail.com" className="text-orange-primary font-bold hover:underline break-all text-sm sm:text-base">contato.instrutorideal@gmail.com</a></p>
                <p className="mb-4 text-sm sm:text-base"><strong>Assunto:</strong> Quero ser Instrutor Ideal</p>
                <p className="text-xs sm:text-sm text-grey-medium mb-1">No corpo envie:</p>
                <ul className="text-xs sm:text-sm text-grey-medium list-disc pl-5 space-y-1">
                  <li>Nome completo</li>
                  <li>Cidade/Estado</li>
                  <li>Telefone (WhatsApp)</li>
                  <li>Se já é instrutor</li>
                </ul>
              </div>

              <a
                href="https://instagram.com/instrutorideal"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:brightness-110 transition-all duration-300 transform flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6 flex-shrink-0">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7616 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.5205 8.00519 14.3734 8.36155 15.0028 8.99182C15.6323 9.62208 15.9872 10.4756 16 11.37Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Siga @instrutorideal
              </a>
            </div>

            <p className="text-xs sm:text-sm text-grey-medium italic">
              Os primeiros instrutores terão prioridade nos testes.
            </p>
          </section>

        </div>
      </main>
    </>
  );
}
