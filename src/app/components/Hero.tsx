import { ArrowRight } from 'lucide-react';

export function Hero() {
  const heroImage = 'https://6973925ce60b1081978162e2.imgix.net/ltra-wide_cinematic_hero_image_of_a_modern_data_center_interior_composed_with_the_main_server_racks_1amv2ojh5lwmdpqptv9z_1.png';
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black-250/90 via-black-250/85 to-gray-900/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 bg-[rgba(0,0,0,0)]">
        <div className="max-w-3xl">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="lg:text-5xl xl:text-6xl font-semibold text-white leading-tight text-[64px] text-left mt-[0px] mr-[0px] mb-[20px] ml-[0px]">
                Soluções tecnológicas com um único ponto de contato
              </h1>
              <p className="text-lg lg:text-xl text-orange-50 leading-relaxed">
                Simplifique a gestão de tecnologia da sua empresa. Oferecemos infraestrutura completa, 
                suporte especializado e soluções integradas para o seu negócio crescer.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('servicos')}
                className="px-8 py-4 bg-[rgb(255,140,0)] text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center justify-center gap-2 group"
              >
                Conheça nossos serviços
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-lg hover:bg-white/20 hover:border-white/50 transition-colors"
              >
                Entre em contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}