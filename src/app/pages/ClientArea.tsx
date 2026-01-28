import { Monitor, Wifi, FileText, FolderOpen, X } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';

interface SystemCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const systems: SystemCard[] = [
  {
    id: 'monitoring',
    icon: <Monitor className="w-12 h-12 text-orange-400" />,
    title: 'Monitoramento',
    description: 'Acompanhe em tempo real o status dos seus equipamentos e serviços monitorados.',
    buttonText: 'Acessar Monitoramento',
    link: 'http://zbx.ipv6tecnologia.com.br:8089/', // Link externo configurável
  },
  {
    id: 'wifi',
    icon: <Wifi className="w-12 h-12 text-orange-400" />,
    title: 'Rede Wi-Fi',
    description: 'Visualize e gerencie informações da sua rede Wi-Fi corporativa.',
    buttonText: 'Acessar Rede Wi-Fi',
    link: 'https://unifi.ipv6tecnologia.com.br:11443/', // Link externo configurável
  },
  {
    id: 'tickets',
    icon: <FileText className="w-12 h-12 text-orange-400" />,
    title: 'Chamados',
    description: 'Abra e acompanhe chamados técnicos de forma rápida e organizada.',
    buttonText: 'Abrir Chamado',
    link: 'https://ipv6tecnologia.tomticket.com/', // Link externo configurável
  },
 ];

export function ClientArea() {
  const [selectedSystem, setSelectedSystem] = useState<SystemCard | null>(null);

  const handleCardClick = (system: SystemCard) => {
    setSelectedSystem(system);
  };

  const handleAccessSystem = () => {
    if (selectedSystem?.link) {
      window.open(selectedSystem.link, '_blank', 'noopener,noreferrer');
    }
    setSelectedSystem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Área do Cliente
          </h1>
          <p className="text-lg text-gray-600">
            Acesse seus sistemas e serviços
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {systems.map((system) => (
            <button
              key={system.id}
              onClick={() => handleCardClick(system)}
              className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-orange-400 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {system.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-orange-400 transition-colors">
                  {system.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedSystem} onOpenChange={() => setSelectedSystem(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-900">
              {selectedSystem?.title}
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 pt-2">
              {selectedSystem?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <button
              onClick={handleAccessSystem}
              className="w-full px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors font-medium"
            >
              {selectedSystem?.buttonText}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
