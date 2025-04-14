import React, { useRef, useState, useEffect } from "react"
import Form from "./utils/form"
import { X, Clock, Zap, User, Scale, Database, Award, Check, Star, Sparkles, Building, Globe } from "lucide-react"


// Note: Add SplitText script to your HTML file or load it dynamically


const Labels: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAlphaModalOpen, setIsAlphaModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);

  const [isKnowMoreModalOpen, setIsKnowMoreModalOpen] = useState(false)
  const [activeCase, setActiveCase] = useState<string | null>(null)

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      console.log("Datos de suscripción:", formData)

      // Aquí puedes agregar tu lógica para procesar el formulario
      // Por ejemplo, una llamada a una API
      // await apiCall(formData);

      // Simular un tiempo de carga
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Procesar la respuesta
      setIsFormSubmitted(true)
      console.log("Formulario procesado con éxito")
    } catch (error) {
      console.error("Error al procesar el formulario:", error)
    } finally {
      setIsLoading(false)
    }
  }


  const [activePlan, setActivePlan] = useState<string>("alpha")
  const [formData, setFormData] = useState({
    email: "",
    company: "",
    purpose: "",
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }
  
  // Función para abrir el panel de opciones
  const handleOpenOptions = () => {
    console.log('Abriendo opciones');
    // Aquí puedes implementar la lógica para abrir un modal o panel de opciones
    // Por ejemplo: setShowOptions(true);
  };
  
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

   // Referencias y estado para el drag-to-scroll
   const comparisonContentRef = useRef<HTMLDivElement>(null)
   const [isDragging, setIsDragging] = useState(false)
   const [startY, setStartY] = useState(0)
   const [scrollTop, setScrollTop] = useState(0)

  // Funciones para el modal de Alpha Agents
  const openAlphaModal = () => setIsAlphaModalOpen(true)
  const closeAlphaModal = () => setIsAlphaModalOpen(false)

  // Funciones para el modal de Conoce Más
  const openKnowMoreModal = () => setIsKnowMoreModalOpen(true)
  const closeKnowMoreModal = () => setIsKnowMoreModalOpen(false)

  // Función para mostrar detalles de caso
  const showCaseDetails = (caseId: string) => {
    setActiveCase(activeCase === caseId ? null : caseId)
  }

  // Funciones para el drag-to-scroll
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartY(e.clientY)
    if (comparisonContentRef.current) {
      setScrollTop(comparisonContentRef.current.scrollTop)
    }
    // Cambiar el cursor a "grabbing"
    if (comparisonContentRef.current) {
      comparisonContentRef.current.style.cursor = "grabbing"
      comparisonContentRef.current.style.userSelect = "none"
    }
  }

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setStartY(e.touches[0].clientY)
    if (comparisonContentRef.current) {
      setScrollTop(comparisonContentRef.current.scrollTop)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const y = e.clientY
    const walk = (startY - y) * 2 // Multiplicador para ajustar la velocidad del scroll

    if (comparisonContentRef.current) {
      comparisonContentRef.current.scrollTop = scrollTop + walk
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const y = e.touches[0].clientY
    const walk = (startY - y) * 2

    if (comparisonContentRef.current) {
      comparisonContentRef.current.scrollTop = scrollTop + walk
    }
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
    // Restaurar el cursor
    if (comparisonContentRef.current) {
      comparisonContentRef.current.style.cursor = "grab"
      comparisonContentRef.current.style.userSelect = "auto"
    }
  }

  // Efecto para añadir/eliminar event listeners globales
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false)
        if (comparisonContentRef.current) {
          comparisonContentRef.current.style.cursor = "grab"
          comparisonContentRef.current.style.userSelect = "auto"
        }
      }
    }

    document.addEventListener("mouseup", handleGlobalMouseUp)
    document.addEventListener("touchend", handleGlobalMouseUp)

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchend", handleGlobalMouseUp)
    }
  }, [isDragging])
  
  return (
    <div className="pages">
      <div className="pages_wrapper">
        {/* Page 1: Welcome/Intro */}
        <div id="page-1" className="page page--welcome page--intro">

        <h1 id="wTitle" className="welcome-text-title">
            Bienvenido a I'AM: Revoluciona tu vida con Inteligencia Artificial
        </h1>
        
          <div className="twister1">
            <div className="logo-container">
              <img src="/Images/logo2.png" alt="logo" className="imageLogo2" />
            </div>
          </div>


          <h1 id="wSubTitle" className="welcome-text-subTitle">
          Creamos agentes inteligentes que entienden tu negocio, aprenden de ti y actúan como tu digital
          </h1>


          <div className="welcome-button-container">
              <button className="primary-button" onClick={openModal}>
                  Despierta a I'AM
              </button>
          </div>

          

          <div className="scroll-indicator">
            <img
              src="/Images/mouse-cursor.png"
              alt="Desliza!"
              className="scrollLogo"
            />
            <span className="scroll-text">Scroll inmersivo</span>
          </div>

          {/* Texto clickeable 'Explora a los Alpha Agents' con efecto hover */}
          
            <a className="clickable-text" onClick={openAlphaModal} >
              Explora a los Alpha Agents{' >'}
            </a>
          
        </div>

        {/* Page 2: ALPHA */}
        <div id="page-2" className="page page--alpha page--hidden">
          <div className="alpha-content">
            <h1 id="alphaT" className="alpha-title">
              Alpha
            </h1>

            <div className="alpha-button-container">
              <button className="primary-button" onClick={openKnowMoreModal}>
                  Conoce más
              </button>
          </div>

            <div className="alpha-subtitle-container">
              <p className="alpha-subtitle">Nuevo modelo by IAM</p>
            </div>
          </div>
        </div>

         {/* Page 3: MarketPlace */}
         <div id="page-3" className="page page--marketplace page--hidden">
          <div className="marketplace-content">
            <h1 className="marketplace-title">MARKETPLACE</h1>
            <p className="marketplace-subtitle">Descubre el ecosistema de agentes inteligentes</p>

            <div className="marketplace-features">
              <div className="marketplace-feature">
                <div className="feature-icon">🔍</div>
                <h3>Explora</h3>
                <p>Encuentra agentes especializados para cada necesidad</p>
              </div>
              <div className="marketplace-feature">
                <div className="feature-icon">🔄</div>
                <h3>Integra</h3>
                <p>Conecta múltiples agentes para crear flujos de trabajo</p>
              </div>
              <div className="marketplace-feature">
                <div className="feature-icon">⚡</div>
                <h3>Potencia</h3>
                <p>Amplifica tus capacidades con IA especializada</p>
              </div>
            </div>

            <div className="marketplace-cta">
              <button className="marketplace-button" onClick={() => window.open("/marketplace", "_blank")}>
                Visitar el Marketplace
              </button>
              <div className="marketplace-button-glow"></div>
            </div>

            <div className="marketplace-floating-elements">
              <div className="floating-element element-1">🤖</div>
              <div className="floating-element element-2">📊</div>
              <div className="floating-element element-3">💬</div>
              <div className="floating-element element-4">📈</div>
              <div className="floating-element element-5">🔧</div>
            </div>
          </div>
        </div>

         {/* Page 4: Comparativa de Tecnologías */}
         <div id="page-4" className="page page--comparison page--hidden" style={{ pointerEvents: "all", overflow: "hidden", height: "100vh" }}>
          <div className="comparison-content">
            <h1 className="comparison-title">Entrenamientos Especializados</h1>
            <p className="comparison-subtitle">Elige la solución perfecta para tu negocio</p>

            {/* Tabla comparativa */}
            <div className="comparison-table-container">
              <div className="comparison-table">
                <div className="table-header">
                  <div className="header-cell empty-cell"></div>
                  <div className="header-cell">
                    <div className="header-icon fine-tuning-icon">
                      <Award size={28} />
                    </div>
                    <h3>Fine-Tuning</h3>
                  </div>
                  <div className="header-cell">
                    <div className="header-icon vectorization-icon">
                      <Database size={28} />
                    </div>
                    <h3>Vectorización Semántica</h3>
                  </div>
                </div>

                <div className="table-row">
                  <div className="row-label">Personalización</div>
                  <div className="row-cell">
                    <span className="value-label high-value">Muy alta</span>
                    <div className="value-bar">
                      <div className="value-fill" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                  <div className="row-cell">
                    <span className="value-label medium-value">Media</span>
                    <div className="value-bar">
                      <div className="value-fill" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="table-row">
                  <div className="row-label">Casos ideales</div>
                  <div className="row-cell">
                    <div className="case-tags">
                      <span className="case-tag">Marca personal</span>
                      <span className="case-tag">Legal</span>
                    </div>
                  </div>
                  <div className="row-cell">
                    <div className="case-tags">
                      <span className="case-tag">Soporte</span>
                      <span className="case-tag">Base de datos</span>
                    </div>
                  </div>
                </div>

                <div className="table-row">
                  <div className="row-label">Tiempo</div>
                  <div className="row-cell">
                    <div className="time-indicator">
                      <Clock size={18} />
                      <span>48-72 hrs</span>
                    </div>
                  </div>
                  <div className="row-cell">
                    <div className="time-indicator instant">
                      <Zap size={18} />
                      <span>Instantáneo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Casos reales */}
            <div className="real-cases-section">
              <h2 className="section-title">Casos reales destacados</h2>
              <div className="cases-container">
                <div
                  className={`case-card ${activeCase === "influencer" ? "active" : ""}`}
                  onClick={() => showCaseDetails("influencer")}
                >
                  <div className="case-icon">
                    <User size={24} />
                  </div>
                  <h3>Influencer</h3>
                  {activeCase === "influencer" && (
                    <div className="case-details">
                      <p>
                        Un influencer con 500K seguidores implementó un asistente IA personalizado que responde
                        preguntas sobre sus productos y contenido, aumentando su engagement en un 35%.
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className={`case-card ${activeCase === "legal" ? "active" : ""}`}
                  onClick={() => showCaseDetails("legal")}
                >
                  <div className="case-icon">
                    <Scale size={24} />
                  </div>
                  <h3>Despacho Legal</h3>
                  {activeCase === "legal" && (
                    <div className="case-details">
                      <p>
                        Un bufete de abogados redujo en un 60% el tiempo de investigación de casos al implementar un
                        sistema de IA entrenado con su biblioteca de precedentes legales.
                      </p>
                    </div>
                  )}
                </div>

                <div
                  className={`case-card ${activeCase === "medical" ? "active" : ""}`}
                  onClick={() => showCaseDetails("medical")}
                >
                  <div className="case-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M8 19H5c-1 0-2-1-2-2v-1a3 3 0 0 1 3-3h1"></path>
                      <path d="M16 19h3c1 0 2-1 2-2v-1a3 3 0 0 0-3-3h-1"></path>
                      <path d="M12 19v-9"></path>
                      <path d="M12 6V5c0-1 1-2 2-2h1a2 2 0 0 1 0 4h-3Z"></path>
                      <path d="M8 5c0-1 1-2 2-2"></path>
                    </svg>
                  </div>
                  <h3>Médico</h3>
                  {activeCase === "medical" && (
                    <div className="case-details">
                      <p>
                        Una clínica especializada implementó un asistente IA para pre-diagnóstico y seguimiento de
                        pacientes, mejorando la satisfacción del paciente en un 42%.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="training-cta">
              <button className="training-button">Solicita tu entrenamiento especializado</button>
              <div className="training-button-glow"></div>
            </div>
          </div>
        </div>

       

        {/* Page 5: Suscripción */}
        <div id="page-5" className="page page--subscription">
          <div className="subscription-content">
            <h1 className="subscription-title">Planes y Beneficios</h1>
            <p className="subscription-subtitle">Elige el plan perfecto para potenciar tu negocio con IA</p>

            <div className="plans-selector">
              <button
                className={`plan-selector-btn ${activePlan === "free" ? "active" : ""}`}
                onClick={() => setActivePlan("free")}
              >
                Free
              </button>
              <button
                className={`plan-selector-btn ${activePlan === "alpha" ? "active" : ""}`}
                onClick={() => setActivePlan("alpha")}
              >
                Alpha
              </button>
              <button
                className={`plan-selector-btn ${activePlan === "pro" ? "active" : ""}`}
                onClick={() => setActivePlan("pro")}
              >
                Pro
              </button>
              <button
                className={`plan-selector-btn ${activePlan === "enterprise" ? "active" : ""}`}
                onClick={() => setActivePlan("enterprise")}
              >
                Enterprise
              </button>
            </div>

            <div className="plans-container">
              {/* Plan Free */}
              <div className={`plan-card ${activePlan === "free" ? "active" : ""}`}>
                <div className="plan-header">
                  <Globe className="plan-icon" size={32} />
                  <h3 className="plan-name">Free</h3>
                  <div className="plan-price">
                    $0<span>/mes</span>
                  </div>
                </div>
                <div className="plan-features">
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Acceso a agentes básicos</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>5 consultas diarias</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Soporte comunitario</span>
                  </div>
                  <div className="plan-feature disabled">
                    <X size={18} className="feature-x" />
                    <span>Personalización limitada</span>
                  </div>
                </div>
                <button className="plan-cta">Comenzar gratis</button>
              </div>

              {/* Plan Alpha */}
              <div className={`plan-card ${activePlan === "alpha" ? "active" : ""}`}>
                <div className="plan-badge">Recomendado</div>
                <div className="plan-header">
                  <Star className="plan-icon" size={32} />
                  <h3 className="plan-name">Alpha</h3>
                  <div className="plan-price">
                    $29<span>/mes</span>
                  </div>
                </div>
                <div className="plan-features">
                  <div className="plan-feature highlight">
                    <Sparkles size={18} className="feature-sparkle" />
                    <span>Acceso anticipado a nuevos agentes</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Consultas ilimitadas</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Personalización básica</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Soporte prioritario</span>
                  </div>
                </div>
                <button className="plan-cta highlight">Suscríbete ahora</button>
              </div>

              {/* Plan Pro */}
              <div className={`plan-card ${activePlan === "pro" ? "active" : ""}`}>
                <div className="plan-header">
                  <Zap className="plan-icon" size={32} />
                  <h3 className="plan-name">Pro</h3>
                  <div className="plan-price">
                    $79<span>/mes</span>
                  </div>
                </div>
                <div className="plan-features">
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Todos los beneficios de Alpha</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Personalización avanzada</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Integración con APIs</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Soporte técnico 24/7</span>
                  </div>
                </div>
                <button className="plan-cta">Suscríbete ahora</button>
              </div>

              {/* Plan Enterprise */}
              <div className={`plan-card ${activePlan === "enterprise" ? "active" : ""}`}>
                <div className="plan-header">
                  <Building className="plan-icon" size={32} />
                  <h3 className="plan-name">Enterprise</h3>
                  <div className="plan-price">Personaliza</div>
                </div>
                <div className="plan-features">
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Todos los beneficios de Pro</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Agentes personalizados a medida</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Implementación on-premise</span>
                  </div>
                  <div className="plan-feature">
                    <Check size={18} className="feature-check" />
                    <span>Gerente de cuenta dedicado</span>
                  </div>
                </div>
                <button className="plan-cta">Contactar ventas</button>
              </div>
            </div>

            <div className="subscription-form-container">
              <h2 className="form-title">¿Interesado en nuestros planes?</h2>
              <p className="form-subtitle">Déjanos tus datos y te contactaremos para ofrecerte la mejor solución</p>

              {!isFormSubmitted ? (
                <form className="subscription-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="company">Empresa</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="purpose">¿Cómo usarías nuestra IA?</label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos brevemente tu caso de uso"
                      rows={3}
                    ></textarea>
                  </div>
                  <button type="submit" className="subscription-submit-btn" disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Suscríbete ahora"}
                  </button>
                </form>
              ) : (
                <div className="form-success">
                  <div className="success-icon">
                    <Check size={48} />
                  </div>
                  <h3>¡Gracias por tu interés!</h3>
                  <p>Hemos recibido tu información y nos pondremos en contacto contigo pronto.</p>
                </div>
              )}
            </div>
          </div>
        </div>

  
        {/* Modal de pantalla completa */}
      {isModalOpen && (
        <div className="fullscreen-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="modal-close-button" onClick={closeModal} title="Cerrar">
              <X size={24} />
            </button>
            <div className="modal-body">
              <h2>I'AM está despertando...</h2>
              <p>Bienvenido al futuro de la inteligencia artificial para tu negocio.</p>
              {/* Aquí puedes agregar más contenido para el modal */}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Alpha Agents */}
      {isAlphaModalOpen && (
        <div className="fullscreen-modal">
          <div className="modal-overlay" onClick={closeAlphaModal}></div>
          <div className="modal-content alpha-modal-content">
            <button className="modal-close-button" onClick={closeAlphaModal} title="Cerrar">
              <X size={24} />
            </button>
            <div className="modal-body">
              <h2 className="alpha-modal-title">Alpha Agents</h2>
              <div className="alpha-agents-grid">
                <div className="alpha-agent-card">
                  <div className="alpha-agent-icon">🤖</div>
                  <h3>Asistente de Ventas</h3>
                  <p>Un agente inteligente que puede gestionar consultas de clientes y cerrar ventas automáticamente.</p>
                </div>
                <div className="alpha-agent-card">
                  <div className="alpha-agent-icon">📊</div>
                  <h3>Analista de Datos</h3>
                  <p>Procesa grandes volúmenes de datos y genera informes detallados con insights valiosos.</p>
                </div>
                <div className="alpha-agent-card">
                  <div className="alpha-agent-icon">📅</div>
                  <h3>Gestor de Agenda</h3>
                  <p>Organiza tu calendario, programa reuniones y envía recordatorios automáticos.</p>
                </div>
                <div className="alpha-agent-card">
                  <div className="alpha-agent-icon">💬</div>
                  <h3>Soporte 24/7</h3>
                  <p>Proporciona atención al cliente instantánea en cualquier momento del día.</p>
                </div>
              </div>
              <div className="alpha-modal-footer">
                <p>Los Alpha Agents representan la próxima generación de asistentes virtuales, diseñados específicamente para tu negocio.</p>
                <button className="primary-button">Solicitar acceso anticipado</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Conoce Más */}
      {isKnowMoreModalOpen && (
          <div className="fullscreen-modal">
            <div className="modal-overlay" onClick={closeKnowMoreModal}></div>
            <div className="modal-content know-more-modal">
              <button className="modal-close-button" onClick={closeKnowMoreModal} title="Cerrar">
                <X size={24} />
              </button>
              <div className="modal-body">
                <h2 className="know-more-title">Proyecto ALPHA</h2>

                <div className="know-more-section">
                  <h3>¿Qué es ALPHA?</h3>
                  <p>
                    ALPHA es nuestra iniciativa más ambiciosa en el campo de la inteligencia artificial. Representa un
                    salto evolutivo en la forma en que las máquinas comprenden y procesan la información, acercándonos a
                    una IA con capacidades cognitivas similares a las humanas.
                  </p>
                </div>

                <div className="know-more-section">
                  <h3>Características principales</h3>
                  <ul className="know-more-list">
                    <li>
                      <strong>Aprendizaje continuo:</strong> ALPHA mejora constantemente a través de cada interacción,
                      adaptándose a nuevos contextos y desafíos.
                    </li>
                    <li>
                      <strong>Razonamiento abstracto:</strong> Capacidad para entender conceptos complejos y establecer
                      conexiones entre ideas aparentemente no relacionadas.
                    </li>
                    <li>
                      <strong>Procesamiento multimodal:</strong> Integración perfecta de texto, imágenes, audio y datos
                      estructurados en un único sistema de comprensión.
                    </li>
                    <li>
                      <strong>Conciencia contextual:</strong> Entiende no solo el contenido de la información, sino
                      también su contexto cultural, histórico y social.
                    </li>
                  </ul>
                </div>

                <div className="know-more-section">
                  <h3>Aplicaciones</h3>
                  <div className="applications-grid">
                    <div className="application-card">
                      <h4>Medicina</h4>
                      <p>Diagnóstico avanzado y desarrollo de tratamientos personalizados.</p>
                    </div>
                    <div className="application-card">
                      <h4>Investigación científica</h4>
                      <p>Aceleración de descubrimientos mediante análisis de datos complejos.</p>
                    </div>
                    <div className="application-card">
                      <h4>Educación</h4>
                      <p>Sistemas de aprendizaje adaptativo que se ajustan a cada estudiante.</p>
                    </div>
                    <div className="application-card">
                      <h4>Creatividad</h4>
                      <p>Colaboración en procesos creativos para arte, música y diseño.</p>
                    </div>
                  </div>
                </div>

                <div className="know-more-footer">
                  <p>
                    ALPHA representa nuestro compromiso con un futuro donde la inteligencia artificial potencia el
                    potencial humano en lugar de reemplazarlo.
                  </p>
                  <button className="know-more-cta">Únete al programa ALPHA</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Labels

