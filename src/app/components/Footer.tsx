export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-4">
              IPv6 Tecnologia
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Soluções tecnológicas integradas com um único ponto de contato para o seu negócio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-orange-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-orange-400 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-orange-400 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-orange-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>(44) 99813-7557</li>
              <li>contato@ipv6tecnologia.com.br</li>
              <li>Maringá-PR</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-600 text-center text-gray-600">
          <p>
            © {currentYear} IPv6 Tecnologia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
