import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Ody Park Aquático',
    category: 'Parque Aquático',
    image: 'https://6973925ce60b1081978162e2.imgix.net/odypark_1024x683.png',
    description: 'Gestão e manutenção da infraestrutura de TI, incluindo rede Wi-Fi e Fibra Óptica (GPON), data center, CFTV, som ambiente, Telefonia, infraestrutura de TV para hotel e hotspot para acesso controlado, garantindo conectividade, segurança e alta disponibilidade em um ambiente de grande porte.'
  },
  {
    id: 2,
    title: 'Unifatécie',
    category: 'Universidades, Escolas e Faculdades',
    image: 'https://6973925ce60b1081978162e2.imgix.net/unifatecie.png',
    description: 'Gestão e manutenção completa da infraestrutura de rede de todas os polos, incluindo rede Wi-Fi e Fibra Óptica (GPON), controle de acessos, gerenciamento de equipamentos, melhorias para governança de TI e implementação de hotspot, garantindo um ambiente dimensionado, seguro e totalmente gerenciado.'
  },
  {
    id: 3,
    title: 'Country Club Maringá',
    category: 'Clubes e Associações',
    image: 'https://6973925ce60b1081978162e2.imgix.net/countryclub.png',
    description: 'Gestão contínua da infraestrutura de rede e Wi-Fi, garantindo conectividade estável, desempenho e suporte às operações e aos associados em um ambiente de grande circulação.'
  },
  {
    id: 4,
    title: 'Pesqueiro Fagan',
    category: 'Lazer',
    image: 'https://6973925ce60b1081978162e2.imgix.net/fagan.png',
    description: 'Implantação de soluções de rede Wi-Fi, sistema de CFTV garantindo conectividade, segurança e suporte às operações do pesqueiro.'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Portfólio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que já desenvolvemos para nossos clientes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-orange-50 text-orange-400 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Quer ver seu projeto aqui? Entre em contato conosco
          </p>
          <a 
            href="#contato"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-4 bg-orange-400 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Iniciar meu projeto
          </a>
        </div>
      </div>
    </section>
  );
}
