import { Target, Heart, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[rgb(249,250,251)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                Sobre a IPv6 Tecnologia
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-[rgb(95,96,97)]">
                  A IPv6 Tecnologia nasceu com o propósito de simplificar a gestão tecnológica das empresas, 
                  oferecendo um único ponto de contato para todas as necessidades de infraestrutura de TI.
                </p>
                <p className="text-[rgb(95,96,97)]">
                  Com anos de experiência no mercado, nossa equipe especializada entende que tecnologia deve 
                  ser um facilitador do seu negócio, não uma preocupação. Por isso, desenvolvemos soluções 
                  integradas e personalizadas que permitem que você foque no que realmente importa: 
                  o crescimento da sua empresa.
                </p>
                <p className="text-[rgb(95,96,97)]">
                  Nosso compromisso é com a excelência técnica, atendimento humanizado e resultados 
                  mensuráveis que impactam positivamente a operação dos nossos clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Values Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="mb-4 text-orange-400">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Missão
              </h3>
              <p className="text-[rgb(95,96,97)] leading-relaxed">
                Simplificar a gestão de tecnologia das empresas através de soluções integradas, 
                sendo o único ponto de contato necessário para todas as necessidades de infraestrutura de TI.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="mb-4 text-orange-400">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Valores
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-[rgb(95,96,97)]">Excelência técnica e atualização constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-[rgb(95,96,97)]">Relacionamento transparente e próximo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-[rgb(95,96,97)]">Compromisso com resultados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-[rgb(95,96,97)]">Inovação aplicada ao negócio</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="mb-4 text-orange-400">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Visão
              </h3>
              <p className="text-[rgb(95,96,97)] leading-relaxed">
                Ser referência em soluções tecnológicas integradas, reconhecida pela qualidade 
                do atendimento e pelo impacto positivo na eficiência operacional dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
