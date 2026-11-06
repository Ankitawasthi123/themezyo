const shared = {
  es: {
    nav: ['Inicio','Servicios','Soluciones de IA','Categorías','Acerca de','Contacto','Ayuda','Iniciar un proyecto','Nuestros servicios','Idioma'],
    hero: ['Desarrollo integral de aplicaciones con IA','Crea y lanza','aplicaciones inteligentes que funcionan','Diseñamos, desarrollamos e implementamos productos digitales completos, desde interfaces y sistemas backend hasta integraciones e IA lista para producción.','Cuéntanos tu idea, proceso o reto empresarial. Lo convertiremos en una aplicación práctica.','Explorar nuestro trabajo','Hablar de tu aplicación','Cómo trabajamos'],
    common: ['Ver','Ver todas las categorías','Ver todas las soluciones','Gratis','Soluciones de IA','valoración','reseñas','Volver a soluciones','Iniciar un proyecto','Enviar mensaje'],
    category: ['Explora soluciones de IA por sector','Explorar por categoría','Encuentra una solución adecuada para tu sector, proceso y objetivos.'],
    templates: ['Soluciones de IA por sector','Explora conceptos, flujos de producto, prototipos y opciones de desarrollo integral.','Buscar soluciones...','Todas las categorías','Ordenar: populares','Más recientes','Precio: menor a mayor','Precio: mayor a menor','Soluciones destacadas','Nuevo','No se encontraron soluciones','Prueba otro sector, proceso o función.'],
    features: ['Un equipo desde la idea hasta producción','Estrategia, diseño, ingeniería, IA, lanzamiento y mejora continua en un solo proceso.'],
    newsletter: ['Novedades sobre productos e ingeniería de IA','Recibe nuevos conceptos, patrones prácticos de IA y novedades de producto.','Introduce tu correo','Suscribirse'],
    footer: ['Diseño y desarrollo integral de aplicaciones con ingeniería full-stack, IA práctica, implementación y soporte continuo.','Enlaces rápidos','Recursos','Empresa','Licencia','Documentación','Centro de ayuda','Nuevas soluciones','Licencias','Todos los derechos reservados.','Privacidad','Términos','Soluciones SaaS','Soluciones de salud','Explorar servicios'],
  },
  pt: {
    nav: ['Início','Serviços','Soluções de IA','Categorias','Sobre','Contato','Ajuda','Iniciar um projeto','Nossos serviços','Idioma'],
    hero: ['Desenvolvimento completo de aplicações com IA','Crie e lance','aplicações inteligentes que funcionam','Projetamos, desenvolvemos e implantamos produtos digitais completos, de interfaces e backends a integrações e IA pronta para produção.','Conte sua ideia, fluxo ou desafio de negócio. Vamos transformá-lo em uma aplicação prática.','Explorar nosso trabalho','Falar sobre sua aplicação','Como trabalhamos'],
    common: ['Ver','Ver todas as categorias','Ver todas as soluções','Grátis','Soluções de IA','avaliação','avaliações','Voltar às soluções','Iniciar um projeto','Enviar mensagem'],
    category: ['Explore soluções de IA por setor','Explorar por categoria','Encontre uma solução adequada ao seu setor, fluxo e objetivos.'],
    templates: ['Soluções de IA por setor','Explore conceitos, fluxos de produto, protótipos e opções de desenvolvimento completo.','Buscar soluções...','Todas as categorias','Ordenar: populares','Mais recentes','Preço: menor para maior','Preço: maior para menor','Soluções em destaque','Novo','Nenhuma solução encontrada','Tente outro setor, fluxo ou recurso.'],
    features: ['Uma equipe da ideia à produção','Estratégia, design, engenharia, IA, lançamento e melhoria contínua em um único processo.'],
    newsletter: ['Atualizações de produtos e engenharia de IA','Receba novos conceitos, padrões práticos de IA e novidades de produto.','Digite seu e-mail','Assinar'],
    footer: ['Design e desenvolvimento completo de aplicações com engenharia full-stack, IA prática, implantação e suporte contínuo.','Links rápidos','Recursos','Empresa','Licença','Documentação','Central de ajuda','Novas soluções','Licenciamento','Todos os direitos reservados.','Privacidade','Termos','Soluções SaaS','Soluções de saúde','Explorar serviços'],
  },
  hi: {
    nav: ['होम','सेवाएँ','एआई समाधान','श्रेणियाँ','हमारे बारे में','संपर्क','सहायता','प्रोजेक्ट शुरू करें','हमारी सेवाएँ','भाषा'],
    hero: ['शुरुआत से अंत तक एआई एप्लिकेशन विकास','बनाएँ और लॉन्च करें','काम करने वाले बुद्धिमान एप्लिकेशन','हम इंटरफ़ेस और सुरक्षित बैकएंड से लेकर इंटीग्रेशन और उत्पादन-तैयार एआई तक संपूर्ण डिजिटल उत्पाद बनाते और तैनात करते हैं।','अपना विचार, वर्कफ़्लो या व्यावसायिक चुनौती साझा करें। हम उसे व्यावहारिक एप्लिकेशन में बदलेंगे।','हमारा काम देखें','अपने एप्लिकेशन पर चर्चा करें','हम कैसे काम करते हैं'],
    common: ['देखें','सभी श्रेणियाँ देखें','सभी समाधान देखें','मुफ़्त','एआई समाधान','रेटिंग','समीक्षाएँ','समाधानों पर वापस जाएँ','प्रोजेक्ट शुरू करें','संदेश भेजें'],
    category: ['उद्योग के अनुसार एआई समाधान देखें','श्रेणी के अनुसार देखें','अपने उद्योग, वर्कफ़्लो और उत्पाद लक्ष्यों के लिए सही समाधान खोजें।'],
    templates: ['उद्योग के अनुसार एआई समाधान','समाधान अवधारणाएँ, उत्पाद वर्कफ़्लो, प्रोटोटाइप और संपूर्ण विकास विकल्प देखें।','समाधान खोजें...','सभी श्रेणियाँ','क्रम: लोकप्रिय','नवीनतम','मूल्य: कम से अधिक','मूल्य: अधिक से कम','चुनिंदा समाधान','नया','कोई समाधान नहीं मिला','कोई अन्य उद्योग, वर्कफ़्लो या सुविधा आज़माएँ।'],
    features: ['विचार से उत्पादन तक एक टीम','रणनीति, डिज़ाइन, इंजीनियरिंग, एआई, लॉन्च और निरंतर सुधार एक ही प्रक्रिया में।'],
    newsletter: ['एआई उत्पाद और इंजीनियरिंग अपडेट','नई अवधारणाएँ, उपयोगी एआई पैटर्न और उत्पाद अपडेट पाएँ।','अपना ईमेल दर्ज करें','सदस्यता लें'],
    footer: ['फुल-स्टैक इंजीनियरिंग, उपयोगी एआई, तैनाती और निरंतर सहायता के साथ संपूर्ण एप्लिकेशन विकास।','त्वरित लिंक','संसाधन','कंपनी','लाइसेंस','दस्तावेज़','सहायता केंद्र','नए समाधान','लाइसेंसिंग','सर्वाधिकार सुरक्षित।','गोपनीयता','शर्तें','SaaS समाधान','स्वास्थ्य समाधान','सेवाएँ देखें'],
  },
  ja: {
    nav: ['ホーム','サービス','AIソリューション','カテゴリー','会社情報','お問い合わせ','ヘルプ','プロジェクトを開始','サービス一覧','言語'],
    hero: ['エンドツーエンドのAIアプリ開発','構築・リリースする','実際に機能するインテリジェントアプリ','UIと安全なバックエンドから、連携機能や本番対応AIまで、デジタル製品を一貫して設計・開発・導入します。','アイデア、業務フロー、課題をお聞かせください。実用的なアプリへ形にします。','実績を見る','アプリについて相談','開発プロセス'],
    common: ['見る','すべてのカテゴリー','すべてのソリューション','無料','AIソリューション','評価','レビュー','ソリューションに戻る','プロジェクトを開始','メッセージを送信'],
    category: ['業界別AIソリューション','カテゴリーから探す','業界、業務フロー、製品目標に合うソリューションを見つけましょう。'],
    templates: ['業界別AIソリューション','ソリューション構想、製品フロー、プロトタイプ、開発オプションをご覧ください。','ソリューションを検索...','すべてのカテゴリー','並び順：人気','新着順','価格：安い順','価格：高い順','注目のソリューション','新着','ソリューションが見つかりません','別の業界、フロー、機能をお試しください。'],
    features: ['アイデアから本番運用まで一つのチーム','戦略、デザイン、開発、AI、リリース、継続的改善を一つのプロセスで提供します。'],
    newsletter: ['AI製品・開発の最新情報','新しいアプリ構想、実用的なAIパターン、製品情報をお届けします。','メールアドレス','登録する'],
    footer: ['フルスタック開発、実用的なAI、導入、継続サポートを含む一貫したアプリ開発。','クイックリンク','リソース','会社','ライセンス','ドキュメント','ヘルプセンター','新着ソリューション','ライセンス','All rights reserved.','プライバシー','利用規約','SaaSソリューション','ヘルスケアソリューション','サービスを見る'],
  },
}

const extended = {
  es: {
    about: ['Acerca de Themezyo','Convertimos ideas ambiciosas en aplicaciones completas con IA.','Nuestra misión','Ayudamos a equipos a pasar de la idea a producción con estrategia, experiencia de usuario, ingeniería full-stack, IA, nube y mejora continua.','Usuarios satisfechos','Países atendidos','Nuestra historia','Themezyo comenzó con conceptos prácticos y hoy desarrolla productos completos que conectan experiencias cuidadas con sistemas fiables, datos, automatización e IA útil.','Nuestros valores'],
    contact: ['Contáctanos','Nos encantará conocer tu proyecto. Envíanos un mensaje.','Información de contacto','Correo','Teléfono','Dirección','Tiempo de respuesta','Normalmente respondemos en 1–2 días laborables.','Nombre','Asunto','Mensaje','Tu nombre','¿Cómo podemos ayudarte?','Escribe tu mensaje...'],
    help: ['Ayuda y documentación','Encuentra respuestas a preguntas frecuentes.','¿Necesitas ayuda profesional?','Envíanos el nombre de la solución y tus requisitos para revisar el alcance.'],
    detail: ['Resumen de la solución','Archivos fuente','Funciones','Contenido del paquete','Descargar prototipo','Ver en el navegador','Formato','Actualizado','Soporte','Uso personal y comercial gratuito','La descarga es gratuita','El soporte y los cambios personalizados son de pago','Explora el prototipo o habla con nosotros sobre el desarrollo completo.'],
  },
  pt: {
    about: ['Sobre a Themezyo','Transformamos ideias ambiciosas em aplicações completas com IA.','Nossa missão','Ajudamos equipes a ir da ideia à produção com estratégia, experiência, engenharia full-stack, IA, nuvem e melhoria contínua.','Usuários satisfeitos','Países atendidos','Nossa história','A Themezyo começou com conceitos práticos e hoje desenvolve produtos completos que conectam experiências cuidadosas a sistemas confiáveis, dados, automação e IA útil.','Nossos valores'],
    contact: ['Entre em contato','Queremos conhecer seu projeto. Envie uma mensagem.','Informações de contato','E-mail','Telefone','Endereço','Tempo de resposta','Normalmente respondemos em 1–2 dias úteis.','Nome','Assunto','Mensagem','Seu nome','Como podemos ajudar?','Escreva sua mensagem...'],
    help: ['Ajuda e documentação','Encontre respostas para perguntas frequentes.','Precisa de ajuda profissional?','Envie o nome da solução e seus requisitos para avaliarmos o escopo.'],
    detail: ['Visão geral da solução','Arquivos-fonte','Recursos','Conteúdo do pacote','Baixar protótipo','Ver no navegador','Formato','Atualizado','Suporte','Uso pessoal e comercial gratuito','O download é gratuito','Suporte e alterações personalizadas são pagos','Explore o protótipo ou fale conosco sobre o desenvolvimento completo.'],
  },
  hi: {
    about: ['Themezyo के बारे में','हम महत्वाकांक्षी विचारों को संपूर्ण एआई एप्लिकेशन में बदलते हैं।','हमारा मिशन','हम रणनीति, अनुभव, फुल-स्टैक इंजीनियरिंग, एआई, क्लाउड और निरंतर सुधार के साथ टीमों को विचार से उत्पादन तक ले जाते हैं।','संतुष्ट उपयोगकर्ता','सेवा वाले देश','हमारी कहानी','Themezyo ने व्यावहारिक अवधारणाओं से शुरुआत की और आज विश्वसनीय सिस्टम, डेटा, ऑटोमेशन और उपयोगी एआई से जुड़े संपूर्ण उत्पाद बनाता है।','हमारे मूल्य'],
    contact: ['संपर्क करें','अपने प्रोजेक्ट के बारे में हमें संदेश भेजें।','संपर्क जानकारी','ईमेल','फ़ोन','पता','उत्तर का समय','हम आम तौर पर 1–2 कार्यदिवस में उत्तर देते हैं।','नाम','विषय','संदेश','आपका नाम','हम कैसे सहायता कर सकते हैं?','अपना संदेश लिखें...'],
    help: ['सहायता और दस्तावेज़','सामान्य प्रश्नों के उत्तर पाएँ।','पेशेवर सहायता चाहिए?','समाधान का नाम और आवश्यकताएँ भेजें; हम दायरे की समीक्षा करेंगे।'],
    detail: ['समाधान अवलोकन','स्रोत फ़ाइलें','सुविधाएँ','पैकेज में शामिल','प्रोटोटाइप डाउनलोड करें','ब्राउज़र में देखें','फ़ॉर्मेट','अपडेट','सहायता','निजी और व्यावसायिक उपयोग मुफ़्त','डाउनलोड मुफ़्त है','सहायता और कस्टम बदलाव सशुल्क हैं','प्रोटोटाइप देखें या संपूर्ण विकास पर चर्चा करें।'],
  },
  ja: {
    about: ['Themezyoについて','意欲的なアイデアを、AIを活用した完全なアプリへ変えます。','ミッション','戦略、UX、フルスタック開発、AI、クラウド、継続改善を通じて、アイデアから本番運用まで支援します。','利用者','対応国','私たちの歩み','Themezyoは実用的な製品構想から始まり、現在は優れた体験と信頼性の高いシステム、データ、自動化、実用的なAIを結ぶ製品を開発しています。','大切にする価値'],
    contact: ['お問い合わせ','プロジェクトについてお気軽にご連絡ください。','連絡先','メール','電話','住所','回答時間','通常1〜2営業日以内に返信します。','お名前','件名','メッセージ','お名前','どのようにお手伝いできますか？','メッセージを入力...'],
    help: ['ヘルプとドキュメント','よくある質問への回答をご覧ください。','専門的な支援が必要ですか？','ソリューション名と要件をお送りください。範囲を確認します。'],
    detail: ['ソリューション概要','ソースファイル','機能','パッケージ内容','プロトタイプをダウンロード','ブラウザーで見る','形式','更新日','サポート','個人・商用利用無料','ダウンロード無料','サポートと個別変更は有料','プロトタイプを見るか、一貫した開発についてご相談ください。'],
  },
}

const featureItems = {
  es: [['Producto y UX','Convertimos requisitos en recorridos, interfaces y una hoja de ruta clara.'],['Ingeniería full-stack','Creamos frontend, API, bases de datos, autenticación e integraciones.'],['IA aplicada','Integramos búsqueda, generación, recomendaciones, asistentes y automatización.'],['Lanzamiento y escala','Implementamos, supervisamos y mejoramos el producto.']],
  pt: [['Produto e UX','Transformamos requisitos em jornadas, interfaces e um roteiro claro.'],['Engenharia full-stack','Criamos frontend, APIs, bancos de dados, autenticação e integrações.'],['IA aplicada','Integramos busca, geração, recomendações, assistentes e automação.'],['Lançamento e escala','Implantamos, monitoramos e melhoramos o produto.']],
  hi: [['उत्पाद और UX','आवश्यकताओं को स्पष्ट यात्राओं, इंटरफ़ेस और रोडमैप में बदलें।'],['फुल-स्टैक इंजीनियरिंग','फ्रंटएंड, API, डेटाबेस, प्रमाणीकरण और इंटीग्रेशन बनाएँ।'],['व्यावहारिक एआई','खोज, जनरेशन, सुझाव, सहायक और ऑटोमेशन जोड़ें।'],['लॉन्च और विस्तार','सुरक्षित तैनाती, निगरानी और निरंतर सुधार।']],
  ja: [['製品設計とUX','要件を明確な利用フロー、UI、ロードマップへ変換します。'],['フルスタック開発','フロントエンド、API、DB、認証、外部連携を構築します。'],['実用的なAI','検索、生成、推薦、アシスタント、自動化を組み込みます。'],['リリースと拡張','安全に導入し、監視・改善を継続します。']],
}

const forms = {
  es:['Solicitud de proyecto','Cuéntanos sobre tu aplicación','Describe el producto, proceso o problema empresarial que quieres desarrollar.','Cerrar formulario','Tu nombre','Introduce tu nombre','Correo electrónico','Proyecto o aplicación','¿Qué debe hacer la aplicación?','Enviar solicitud','Enviando...','Solicitud recibida','Revisaremos tus requisitos y te recomendaremos el siguiente paso.','Listo'],
  pt:['Solicitação de projeto','Conte sobre sua aplicação','Descreva o produto, fluxo ou problema de negócio que deseja desenvolver.','Fechar formulário','Seu nome','Digite seu nome','E-mail','Projeto ou aplicação','O que a aplicação deve fazer?','Enviar solicitação','Enviando...','Solicitação recebida','Analisaremos seus requisitos e recomendaremos o próximo passo.','Concluído'],
  hi:['प्रोजेक्ट अनुरोध','अपने एप्लिकेशन के बारे में बताएँ','जिस उत्पाद, वर्कफ़्लो या समस्या को विकसित करना है उसका विवरण दें।','फ़ॉर्म बंद करें','आपका नाम','अपना नाम दर्ज करें','ईमेल','प्रोजेक्ट या एप्लिकेशन','एप्लिकेशन को क्या करना चाहिए?','अनुरोध भेजें','भेजा जा रहा है...','अनुरोध प्राप्त हुआ','हम आवश्यकताओं की समीक्षा कर अगला कदम सुझाएँगे।','पूर्ण'],
  ja:['プロジェクトのご相談','アプリについてお聞かせください','開発したい製品、業務フロー、課題をご説明ください。','フォームを閉じる','お名前','お名前を入力','メールアドレス','プロジェクトまたはアプリ','アプリに必要な機能は何ですか？','相談を送信','送信中...','ご相談を受け付けました','要件を確認し、次のステップをご提案します。','完了'],
}

const extras = {
  es: {
    contact:['Proyectos y soporte','Cuéntanos qué quieres desarrollar','Comparte una idea, integración de IA, modernización o solicitud de soporte.','Ideal para','Sitios web, aplicaciones móviles, plataformas, IA, automatización e integraciones.','Ayuda con descargas','Si no puedes descargar un prototipo, escríbenos para recibir un enlace directo.','Detalles útiles','Incluye objetivos, usuarios, funciones, plataformas, sistemas y plazos.','Enviando...','Mensaje enviado correctamente.','No se pudo enviar el mensaje. Inténtalo de nuevo.','Introduce tu nombre.','Introduce un correo válido.','Introduce un asunto.','Escribe tu mensaje.'],
    detail:['¡Gracias por la descarga!','Tu prototipo fuente está listo.','Descargar prototipo','Cerrar diálogo','Apoyar este proyecto','Apóyanos','El apoyo opcional está disponible mediante PayPal.','La opción de pago no está configurada.','Apoyar con PayPal','¿Necesitas otro framework?','La conversión y el desarrollo personalizado están disponibles como servicios de pago.','Solicitar presupuesto'],
  },
  pt: {
    contact:['Projetos e suporte','Conte o que deseja desenvolver','Compartilhe uma ideia, integração de IA, modernização ou solicitação de suporte.','Ideal para','Sites, aplicativos móveis, plataformas, IA, automação e integrações.','Ajuda com downloads','Se não conseguir baixar um protótipo, fale conosco para receber um link direto.','Detalhes úteis','Inclua objetivos, usuários, recursos, plataformas, sistemas e prazos.','Enviando...','Mensagem enviada com sucesso.','Não foi possível enviar a mensagem. Tente novamente.','Digite seu nome.','Digite um e-mail válido.','Digite um assunto.','Digite sua mensagem.'],
    detail:['Obrigado pelo download!','Seu protótipo-fonte está pronto.','Baixar protótipo','Fechar diálogo','Apoiar este projeto','Apoie-nos','O apoio opcional está disponível pelo PayPal.','A opção de pagamento não está configurada.','Apoiar com PayPal','Precisa de outro framework?','Conversão e desenvolvimento personalizado estão disponíveis como serviços pagos.','Solicitar orçamento'],
  },
  hi: {
    contact:['प्रोजेक्ट और सहायता','बताएँ कि आप क्या बनाना चाहते हैं','नया विचार, एआई इंटीग्रेशन, आधुनिकीकरण या सहायता अनुरोध साझा करें।','इनके लिए उपयुक्त','वेबसाइट, मोबाइल ऐप, प्लेटफ़ॉर्म, एआई, ऑटोमेशन और इंटीग्रेशन।','डाउनलोड सहायता','प्रोटोटाइप डाउनलोड न हो तो सीधे लिंक के लिए संपर्क करें।','उपयोगी विवरण','लक्ष्य, उपयोगकर्ता, सुविधाएँ, प्लेटफ़ॉर्म, सिस्टम और समयसीमा बताएँ।','भेजा जा रहा है...','संदेश सफलतापूर्वक भेजा गया।','संदेश भेजा नहीं जा सका। फिर प्रयास करें।','अपना नाम दर्ज करें।','सही ईमेल दर्ज करें।','विषय दर्ज करें।','अपना संदेश दर्ज करें।'],
    detail:['डाउनलोड के लिए धन्यवाद!','आपका स्रोत प्रोटोटाइप तैयार है।','प्रोटोटाइप डाउनलोड करें','संवाद बंद करें','इस प्रोजेक्ट का समर्थन करें','हमारा समर्थन करें','PayPal द्वारा वैकल्पिक समर्थन उपलब्ध है।','भुगतान विकल्प कॉन्फ़िगर नहीं है।','PayPal से समर्थन करें','दूसरा फ्रेमवर्क चाहिए?','फ्रेमवर्क रूपांतरण और कस्टम विकास सशुल्क सेवाओं के रूप में उपलब्ध हैं।','अनुमान माँगें'],
  },
  ja: {
    contact:['プロジェクト・サポート','開発したい内容をお聞かせください','新規アプリ、AI連携、刷新、サポート依頼をご共有ください。','対応例','Webサイト、モバイルアプリ、プラットフォーム、AI、自動化、外部連携。','ダウンロードのヘルプ','ダウンロードできない場合は、直接リンクをご案内します。','役立つ情報','目標、ユーザー、機能、対象端末、既存システム、予定をご記載ください。','送信中...','メッセージを送信しました。','メッセージを送信できませんでした。もう一度お試しください。','お名前を入力してください。','有効なメールアドレスを入力してください。','件名を入力してください。','メッセージを入力してください。'],
    detail:['ダウンロードありがとうございます！','ソースプロトタイプの準備ができました。','プロトタイプをダウンロード','ダイアログを閉じる','このプロジェクトを支援','ご支援','PayPalで任意の支援ができます。','支払いオプションは設定されていません。','PayPalで支援','別のフレームワークが必要ですか？','変換や個別開発は有料サービスとして提供しています。','見積もりを依頼'],
  },
}

function createDictionary(code) {
  const s = shared[code]
  const x = extended[code]
  const f = forms[code]
  const e = extras[code]
  const categoryNames = Object.fromEntries(['landing','business','portfolio','ecommerce','saas','blog','dashboard'].map((key, index) => [key, [s.category[1],s.nav[2],'Portfolio','E-commerce','SaaS','Blog','Dashboard'][index]]))
  const categoryDescriptions = Object.fromEntries(Object.keys(categoryNames).map((key) => [key, s.category[2]]))
  return {
    nav: Object.fromEntries(['home','services','templates','categories','about','contact','docs','support','downloadFree','language'].map((key, i) => [key, s.nav[i]])),
    hero: { eyebrow:s.hero[0], titlePrefix:s.hero[1], titleHighlight:s.hero[2], description:s.hero[3], requirement:s.hero[4], download:s.hero[5], shareIdea:s.hero[6], how:s.hero[7], templates:s.common[4], customers:'', paid:'', help:'', preview:'', moreShots:'', pixelnovate:'Pixelnovate' },
    ideaModal: { eyebrow:f[0], title:f[1], intro:f[2], close:f[3], name:f[4], namePlaceholder:f[5], email:f[6], emailPlaceholder:'name@example.com', ideaTitle:f[7], ideaTitlePlaceholder:f[7], category:s.category[1], categorySaas:'SaaS', categoryEcommerce:'E-commerce', categoryBusiness:s.nav[2], categoryPortfolio:'Portfolio', categoryOther:'Other', details:f[8], detailsPlaceholder:f[8], nameRequired:f[5], emailRequired:f[6], emailInvalid:f[6], ideaTitleRequired:f[7], detailsRequired:f[8], detailsShort:f[8], submit:f[9], submitting:f[10], submitError:f[9], successTitle:f[11], successText:f[12], done:f[13] },
    common: Object.fromEntries(['view','viewAllCategories','viewAllTemplates','free','templates','rating','reviews','backToTemplates','requestPaidSupport','sendMessage'].map((key, i) => [key, s.common[i]])),
    categories: { title:s.category[0], pageEyebrow:s.category[0], pageTitle:s.category[1], pageIntro:s.category[2], names:categoryNames, descriptions:categoryDescriptions },
    templatesPage: Object.fromEntries(['title','intro','search','allCategories','sortPopular','newest','priceLow','priceHigh','handpicked','newLabel','noResults','noResultsText'].map((key, i) => [key, s.templates[i]])),
    features: { title:s.features[0], intro:s.features[1], items:featureItems[code] },
    testimonial: { title:s.features[0], quote:s.features[1], role:'Themezyo', rating:s.common[5] },
    newsletter: { title:s.newsletter[0], intro:s.newsletter[1], placeholder:s.newsletter[2], subscribe:s.newsletter[3] },
    footer: Object.fromEntries(['tagline','quick','resources','company','license','documentation','help','releases','licensing','rights','privacy','terms','saasSolutions','healthcareSolutions','exploreServices'].map((key, i) => [key, s.footer[i]])),
    about: { title:x.about[0], intro:x.about[1], missionTitle:x.about[2], mission:x.about[3], users:x.about[4], countries:x.about[5], storyTitle:x.about[6], story:x.about[7], valuesTitle:x.about[8], values:featureItems[code], fullStackTitle:'Full Stack', fullStackText:featureItems[code][1][1], aiNativeTitle:'AI', aiNativeText:featureItems[code][2][1], endToEndTitle:'End to End', endToEndText:featureItems[code][3][1] },
    help: { title:x.help[0], intro:x.help[1], ctaTitle:x.help[2], ctaText:x.help[3], faqs:[[x.help[0],x.help[1]],[s.templates[0],s.templates[1]],[x.detail[4],x.detail[10]],[x.contact[0],x.contact[1]]] },
    contact: { ...Object.fromEntries(['title','intro','info','email','phone','address','hours','hoursText','name','subject','message','namePlaceholder','subjectPlaceholder','messagePlaceholder'].map((key, i) => [key, x.contact[i]])), ...Object.fromEntries(['eyebrow','buildTitle','buildIntro','bestFor','bestForText','downloadHelp','downloadHelpText','helpfulDetails','helpfulDetailsText','sending','sendSuccess','sendError','nameError','emailError','subjectError','messageError'].map((key, i) => [key, e.contact[i]])), emailPlaceholder:'name@example.com' },
    detail: { ...Object.fromEntries(['layout','source','features','includes','download','browser','format','updated','support','license1','license2','license3','ctaDescription'].map((key, i) => [key, x.detail[i]])), ...Object.fromEntries(['downloadModalTitle','downloadModalText','downloadModalButton','downloadModalClose','paymentTitle','supportUsTitle','paymentText','paymentMissingText','paypalButton','frameworkTitle','frameworkText','frameworkButton'].map((key, i) => [key, e.detail[i]])), defaultSource:x.detail[1], description:x.detail[0], longDescriptionEyebrow:x.detail[0], longDescriptionTitle:x.detail[0] },
    slider: { preview:s.common[0], homepage:s.nav[0], sections:s.nav[2], mobile:'Mobile', previous:'‹', next:'›', show:s.common[0], upload:s.common[0] },
    home: { proofPoints:featureItems[code].map((item)=>item[0]), industryExperience:s.category[0], explorerEyebrow:s.category[1], explorerTitle:s.category[0], explorerIntro:s.category[2], explorerDelivery:s.hero[3], requestProject:s.nav[7], searchLabel:s.templates[2], searchPlaceholder:s.templates[2], searchKeywords:['AI','SaaS','E-commerce','Healthcare'], projectType:s.category[1], allSolutions:s.templates[3], bestMatches:s.templates[4], recommendedMatches:s.templates[8], matchesIntro:s.templates[1], match:s.common[0], pages:'Pages', livePreview:s.common[0], details:x.detail[0], noMatch:s.templates[10], noMatchText:s.templates[11], resetPicker:s.common[0], solutionTags:featureItems[code].slice(0,3).map((item)=>item[0]), categoriesEyebrow:s.category[1], categoriesTitle:s.category[0], categoriesIntro:s.category[2], explore:s.common[0], referenceEyebrow:s.templates[8], referenceTitle:s.templates[0], deliveryEyebrow:s.features[0], deliveryIntro:s.features[1], featureDetails:featureItems[code], workflow:featureItems[code], newsletterBenefits:featureItems[code].slice(0,3).map((item)=>item[0]), newsletterEyebrow:s.newsletter[0], newsletterFormTitle:s.newsletter[0], newsletterFormText:s.newsletter[1], subscribing:s.newsletter[3], subscribeSuccess:s.newsletter[3], subscribeError:s.newsletter[0], noSpam:s.newsletter[1] },
  }
}

export const additionalDictionaries = Object.fromEntries(Object.keys(shared).map((code) => [code, createDictionary(code)]))
