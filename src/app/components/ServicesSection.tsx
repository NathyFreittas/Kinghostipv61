import { useState } from 'react';
import { Wifi, Camera, Phone, ServerCog, AudioLines, Activity, Waypoints, CircuitBoard, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  details: {
    what: string;
    how: string;
    ipv6Approach: string;
  };
}

const services: Service[] = [
  {
    id: 'wifi',
    title: 'Soluções Wi-Fi de Alta Performance',
    icon: <Wifi size={32} />,
    description: 'Conectividade sólida, escalável e alinhada às necessidades atuais e futuras do seu negócio.',
    details: {
      what: 'A IPv6 Tecnologia projeta, implementa e gerencia soluções Wi-Fi corporativas com foco em desempenho, segurança e alta disponibilidade, atendendo ambientes empresariais que exigem conectividade confiável para dados, voz e vídeo.',
      how: 'As soluções seguem os principais padrões internacionais, como IEEE 802.11ac e 802.11ax (Wi-Fi 6), proporcionando maior eficiência, melhor desempenho em ambientes de alta demanda e preparação para crescimento futuro. A segurança da informação é tratada como prioridade, com aplicação de protocolos avançados, como WPA3, e boas práticas de segmentação e controle de acesso.',
      ipv6Approach: 'Com uma abordagem consultiva, a IPv6 Tecnologia centraliza a infraestrutura de conectividade, integrando rede, Wi-Fi, CFTV e telefonia em um único ecossistema. Isso permite maior organização, redução de falhas operacionais e um ponto único de contato para suporte e gestão da infraestrutura.'
    }
  },
  {
    id: 'CFTV',
    title: 'Segurança Eletrônica',
    icon: <Camera size={32} />,
    description: 'Proteção de pessoas, patrimônios e informações, com foco em confiabilidade, eficiência e gestão centralizada.',
    details: {
      what: 'Circuito fechado de TV com câmeras de alta resolução, gravação em nuvem ou local, e acesso remoto via aplicativo para monitoramento 24/7.',
      how: 'Desenvolvemos projetos personalizados que incluem câmeras de vigilância (CCTV), sistemas de alarme, controle de acesso, sensores e detectores, garantindo monitoramento contínuo e prevenção de riscos. As soluções podem ser integradas a softwares de monitoramento, facilitando a operação, análise de eventos e manutenção.',
      ipv6Approach: 'Com uma abordagem consultiva, centralizamos toda a infraestrutura de segurança em um único ecossistema, proporcionando mais controle, organização e um ponto único de contato para suporte, trazendo mais tranquilidade e proteção para o seu ambiente.'
    }
  },
  {
    id: 'Telefonia',
    title: 'Telefonia',
    icon: <Phone size={32} />,
    description: 'Comunicação empresarial integrada',
    details: {
      what: 'Soluções de telefonia VoIP e PABX IP para comunicação empresarial eficiente, com ramais, URA, gravação de chamadas e integração com CRM.',
      how: 'Implementamos centrais telefônicas virtuais, configuramos ramais SIP, integramos com operadoras VoIP e criamos fluxos de atendimento personalizados.',
      ipv6Approach: 'A IPv6 Tecnologia implementa sistemas de telefonia modernos e escaláveis, reduzindo custos com operadoras e aumentando a produtividade da sua equipe de atendimento.'
    }
  },
  {
    id: 'Infraestrutura',
    title: 'Infraestrutura e Datacenters',
    icon: <ServerCog size={32} />,
    description: 'Soluções de cabeamento estruturado padronizadas, seguras e escaláveis, preparadas para suportar aplicações de dados, voz e vídeo em ambientes corporativos, industriais e de provedores de serviços.',
    details: {
      what: 'Serviços de infraestrutura de TI, cabeamento estruturado, servidores, backup, segurança da informação e suporte técnico especializado.',
      how: 'Nossos projetos seguem as principais normas e padrões do mercado, como NBR 14705 e TIA/EIA-568, garantindo organização, desempenho e confiabilidade da infraestrutura. O cabeamento é estruturado de forma lógica e eficiente, contemplando pontos de consolidação, patch panels, cabos metálicos e fibra óptica, tomadas de rede, além de racks e armários adequadamente dimensionados para abrigar os equipamentos. Com uma abordagem consultiva, desenvolvemos soluções que oferecem flexibilidade e escalabilidade, permitindo fácil expansão e adaptação da rede conforme o crescimento do ambiente, além de facilitar a manutenção, identificação de falhas e gestão da infraestrutura. Além do cabeamento, a IPv6 Tecnologia atua na montagem, organização e manutenção de datacenters corporativos e de provedores.',
      ipv6Approach: 'Centralizando toda a infraestrutura física e lógica, a IPv6 Tecnologia entrega ambientes organizados, confiáveis e preparados para alta disponibilidade, oferecendo um ponto único de contato para gestão, suporte e evolução da sua operação de TI.'
    }
  },
  {
    id: 'Som Ambiente',
    title: 'Sonorização Ambiente',
    icon: <AudioLines size={32} />,
    description: 'Confiabilidade, escalabilidade e qualidade sonora, agregando valor à comunicação e à experiência dos usuários.',
    details: {
      what: 'A IPv6 Tecnologia projeta e implementa soluções de sonorização ambiente voltadas à comunicação, conforto e experiência sonora em ambientes corporativos, comerciais e institucionais.',
      how: 'Nossos projetos são desenvolvidos de forma personalizada, considerando o layout do ambiente, a finalidade do espaço e o nível de cobertura sonora necessário. Utilizamos equipamentos profissionais, como amplificadores, caixas acústicas, mixers e controladores de áudio, garantindo distribuição uniforme do som, clareza e qualidade em todos os pontos.',
      ipv6Approach: 'Com uma abordagem consultiva, a IPv6 Tecnologia integra a sonorização ambiente à infraestrutura existente, podendo atuar de forma conjunta com rede, Wi-Fi, CFTV e telefonia. Isso garante organização, facilidade de manutenção e um ponto único de contato para suporte e gestão da solução.'
    }
  },
  {
    id: 'NOC',
    title: 'NOC',
    icon: <Activity size={32} />,
    description: 'Garantia de disponibilidade, desempenho e segurança de toda a infraestrutura de TI, atuando de forma preventiva, proativa e centralizada.',
    details: {
      what: 'O NOC monitora continuamente os principais componentes do ambiente, permitindo rápida identificação de falhas, análise de desempenho e apoio à tomada de decisão.',
      how: 'Monitoramento completo da infraestrutura de rede, incluindo: Trânsito IP e PTT, Redes Metro e MPLS, Switches e roteadores (uso de CPU, memória e disco), Protocolos de roteamento como BGP e OSPF, Conexões VPNs, Hypervisors, Máquinas Virtuais (VMs), Storages, POPs e Sites Remotos, Sensores de temperatura, voltagem e presença, Sensores IoT em geral, Serviços de infraestrutura (DNS, FTP, NTP, logs), Serviços para aplicações (servidores web e de aplicação), Serviços em nuvem, Telefonia, PABX e centrais, Status e disponibilidade das aplicações, Validação de APIs e sistemas, Validação de processos críticos (login, tempo de resposta, velocidade de download, entre outros), Sensores e Equipamentos, Monitoramento da infraestrutura de conectividade e segurança, Uplink e interconexão com a rede, Equipamentos internos (firewalls, roteadores, switches e access points), Utilização de circuitos, Conexões VPNs.',
      ipv6Approach: 'Com uma abordagem consultiva, a IPv6 Tecnologia centraliza o monitoramento de toda a infraestrutura em um único NOC, oferecendo visibilidade total do ambiente, atuação proativa e um ponto único de contato para suporte e gestão, garantindo maior confiabilidade, desempenho e continuidade dos serviços.'
    }
  },
  {
    id: 'GPON',
    title: 'GPON',
    icon: <Waypoints size={32} />,
    description: 'Base sólida, moderna e preparada para as demandas atuais e futuras de conectividade.',
    details: {
      what: 'A tecnologia GPON utiliza fibra óptica passiva, permitindo a distribuição de serviços como internet, telefonia e vídeo por meio de uma única infraestrutura, sem a necessidade de equipamentos ativos intermediários. Isso garante maior eficiência operacional, menor consumo de energia e redução de pontos de falha.',
      how: 'A IPv6 Tecnologia projeta, implanta e mantém soluções GPON (Gigabit Passive Optical Network) para ambientes corporativos, condomínios, provedores de internet e infraestruturas que exigem alta capacidade, confiabilidade e escalabilidade. Com altas taxas de transmissão, chegando a 2,5 Gbps de download e 1,25 Gbps de upload, as soluções GPON oferecem baixa latência e excelente desempenho, sendo ideais para aplicações críticas, videoconferências, sistemas em nuvem e ambientes com grande volume de usuários. Nossos projetos são desenvolvidos de forma consultiva, considerando capacidade de atendimento, crescimento futuro e segurança da rede. A arquitetura GPON permite o compartilhamento eficiente da fibra entre múltiplos usuários, mantendo estabilidade, qualidade de serviço e proteção contra interferências e interceptações.',
      ipv6Approach: 'Com a IPv6 Tecnologia, a solução GPON pode ser integrada a outros serviços do ecossistema, como rede corporativa, Wi-Fi, NOC, monitoramento, CFTV e telefonia, centralizando a gestão da infraestrutura e oferecendo um ponto único de contato para suporte e operação. As soluções GPON entregam uma base sólida, moderna e preparada para as demandas atuais e futuras de conectividade.'
    }
  },
  {
    id: 'Automação',
    title: 'Automação',
    icon: <CircuitBoard size={32} />,
    description: 'Integrando conectividade, controle inteligente e tecnologia para ambientes corporativos, comerciais e institucionais',
    details: {
      what: 'As soluções IoT permitem o monitoramento e a automação de diversos elementos do ambiente, como sensores de presença, temperatura, energia, acionamentos automáticos e eventos programados, possibilitando respostas inteligentes e redução de falhas operacionais. A integração com a rede garante comunicação estável e segura entre todos os dispositivos.',
      how: 'Nossos projetos são desenvolvidos de forma personalizada, permitindo o gerenciamento centralizado da infraestrutura, dos sistemas de áudio e dos dispositivos IoT, com foco em eficiência operacional, padronização e confiabilidade. A automação possibilita o controle de equipamentos, fontes de áudio, zonas sonoras, sensores e dispositivos conectados, de maneira simples, segura e integrada.',
      ipv6Approach: 'Com uma abordagem consultiva, a IPv6 Tecnologia centraliza rede, som e IoT em um único ecossistema, facilitando a operação, manutenção e expansão da infraestrutura. Isso proporciona maior controle, escalabilidade e um ponto único de contato para gestão e suporte, preparando o ambiente para as demandas atuais e futuras do negócio.'
    }
  }
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="servicos" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluções tecnológicas completas para sua empresa crescer com segurança e eficiência
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group p-8 bg-white border-2 border-gray-100 rounded-2xl hover:border-orange-400 hover:shadow-xl transition-all duration-300 text-left"
              >
                <div className="mb-6 text-orange-400 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-100 p-6 lg:p-8 flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-orange-400">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">
                      {selectedService.title}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  >
                    <X size={24} className="text-gray-500" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 lg:p-8 space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      O que é
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.details.what}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Como funciona
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedService.details.how}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-orange-400 mb-3">
                      Como a IPv6 Tecnologia executa
                    </h4>
                    <p className="text-gray-800 leading-relaxed">
                      {selectedService.details.ipv6Approach}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}