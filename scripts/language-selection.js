document.addEventListener('DOMContentLoaded', function () {

    function changeLanguage(lang) {
        var htmlElement = document.querySelector('html');
        htmlElement.setAttribute('lang', lang);
    }

    document.querySelectorAll('.br').forEach(item => {
        item.addEventListener('click', function () {

            changeLanguage('pt');
            $("#lang-list").toggleClass("hidden disBlock");

            //menu
            $(".nav-list").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".nav-list").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".nav-list").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".nav-list").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".nav-list").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".nav-list").find(".nav-item").eq(5).find(".nav-link").text("Referências");
            $(".nav-list").find(".nav-item").eq(6).find(".nav-link").text("Contato");

            //mobile-menu
            $(".mobile-menu").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".mobile-menu").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".mobile-menu").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".mobile-menu").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".mobile-menu").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".mobile-menu").find(".nav-item").eq(5).find(".nav-link").text("Referências");
            $(".mobile-menu").find(".nav-item").eq(6).find(".nav-link").text("Contato");

            //menu language icon
            $(".language-selected").addClass("change-br");
            $(".language-selected").removeClass("change-es");
            $(".language-selected").removeClass("change-en");

            //section "about"
            $("#txt1").text("Eu sou");
            $("#txt2").text("Desenvolvedor de Software");
            $("#txt3").text("IDADE");
            $("#txt4").text("ENDEREÇO");
            $("#txt5").text("São Bernardo do Campo, SP - Brasil");
            $("#txt6").text("TELEFONE");

            //section "download-cv"
            $("#txt7").text("Baixar CV");
            document.getElementById('txt7').href = './assets/Curriculo - Leonardo Gomiero C Capoccia.pdf';

            //id "introducing"
            $("#introducing").text("Olá, Mundo! Meu nome é Leonardo Capoccia, e sou desenvolvedor de software web. Estou trabalhando nessa área há dois anos, ganhando experiência em várias empresas onde pude aprimorar minhas habilidades técnicas em ReactJS, NodeJS, Computação em Nuvem, Análise de Dados e mais. No meu papel, aprendi a traduzir as necessidades dos clientes em soluções de software, focando no feedback periódico e prestando muita atenção aos detalhes.");

            //section "interests"
            $("#txt8").text("Meus Interesses");
            $("#txt9").text("Tenho um grande interesse em artes marciais; tenho praticado Karatê desde 2015. Também gosto de correr e frequentar a academia regularmente. Video games, filmes e leitura são alguns dos meus hobbies. Meu jogo favorito é God of War: Ragnarok, e meu livro preferido é \"Como Fazer Amigos e Influenciar Pessoas\" de Dale Carnegie. Além disso, frequentemente me envolvo em projetos de desenvolvimento durante meu tempo livre como um passatempo recreativo.");

            //section "skills-bar"
            $("#txt10").text("Habilidades Profissionais");
            $("#txt11").text("Análise de Dados");

            //section "project"
            $("#txt12").text("Um Projeto em Java Puro");
            $("#txt13").text("Durante minha formação em Análise e Desenvolvimento de Sistemas, eu concluí um projeto de 5 semanas para reforçar minhas habilidades em Programação Orientada a Objetos. Utilizando Java, simulei batalhas de Pokémon dos consoles Gameboy, Nintendo DS e Nintendo Switch. O projeto destaca minha proficiência em POO, resolução de problemas e aplicação prática de conceitos teóricos. Estou empolgado para discutir este projeto mais detalhadamente em uma entrevista.");

            //section "certificates"
            $("#txt14").text("Meus Certificados");
            $("#txt15").text("A insígnia AWS Cloud Practitioner é uma certificação de nível básico da Amazon Web Services. Ela valida conhecimentos básicos dos serviços de nuvem da AWS, modelos de precificação e segurança.");
            $("#txt16").text("Verificar insígnia");
            $("#txt17").text("A certificação Fundamentos do Azure (AZ-900) apresenta conceitos fundamentais de computação em nuvem e serviços do Microsoft Azure. Ela valida o conhecimento básico dos serviços em nuvem e como eles são fornecidos pelo Azure.");
            $("#txt18").text("Verificar insígnia");
            $("#txt19").text("A certificação Fundamentos de IA da Microsoft (AI-900) é um exame de certificação da Microsoft Azure que abrange conceitos fundamentais de inteligência artificial (IA) e sua aplicação no Azure. Destina-se a indivíduos que buscam conhecimentos básicos em tecnologias de IA na plataforma Azure.");
            $("#txt20").text("Verificar insígnia");
            $("#txt21").text("A certificação Fundamentos de Dados do Microsoft Azure (DP-900) sinaliza uma base sólida em conceitos-chave de dados para o Azure. Ela demonstra proficiência no manuseio de diversos tipos de dados, conhecimento das cargas de trabalho de dados e familiaridade com os serviços do Azure.");
            $("#txt22").text("Verificar insígnia");
            $("#txt23").text("Essas 11 insígnias abrangem tarefas fundamentais, gerenciamento de recursos em nuvem, redes e fundamentos de computação em nuvem. Notavelmente, as conquistas em Fundamentos do GCP destacam um entendimento sólido de infraestrutura, segurança e redes.");
            $("#txt24").text("Verificar insígnias");

            //section "background"
            $("#txt25").text("Educação");
            $("#txt26").text("Engenharia da Computação");
            $("#txt27").text("Tecnologia em Análise e Desenvolvimento de Sistemas");
            $("#txt28").text("Técnico em Mecatrônica");
            $("#txt29").text("Experiência");
            $("#txt30").text("2024 - agora");
            $("#txt31").text("Desenvolvedor de Software Jr.");
            $("#txt32").text("Instituto SENAI de Tecnologia");
            $("#txt33").text("Estagiário de Transformação Digital");
            $("#txt34").text("Estagiário em Engenharia de Controle");
            $("#txt35").text("Estagiário em Desenvolvimento de Software");

            //section "languages"
            $("#txtLang").text("Idiomas");
            $("#txt36").text("Inglês");
            if (document.getElementById('txt37')) {
                txt37.innerHTML = 'Tenho orgulho de possuir um <b style="color: #FEBD40; font-weight: bold; font-style: italic;">Certificado em Inglês Avançado (CAE)</b>, credenciado pela <i>Cambridge</i>, o que atesta minha proficiência no idioma.';
            }
            $("#txt38").text("Português");
            $("#txt39").text("Como cidadão brasileiro, o português é minha língua nativa.");
            $("#txt40").text("Espanhol");
            $("#txt41").text("Atualmente, estou envolvido no estudo do espanhol, tendo alcançado um nível de proficiência próximo ao B1. Isso significa que sou capaz de me comunicar de forma eficaz em situações básicas de linguagem.");
            $("#txt42").text("Italiano");
            $("#txt43").text("Estudei italiano por três anos e estou motivado a continuar devido aos membros da família italianos.");

            //section "testimonials"
            $("#txt44").text("Referências");
            $("#txt45").text("Desenvolvedor de Pegasystems na Accenture | PCSA | PCBA");
            $("#txt46").text("Desde o primeiro ano do ensino médio, tenho estudado junto com Leonardo. Ambos fomos monitores voluntários e nos destacamos entre os 5% melhores alunos do ensino médio, e agora, com orgulho, fazemos parte da mesma universidade. Leonardo é, sem dúvida alguma, um aluno extremamente dedicado, brilhante e compassivo. Ele aprende rapidamente e pensa logicamente, sempre buscando oportunidades para sua carreira e utilizando as lições aprendidas com seus erros passados para superar os desafios atuais.");
            $("#txt47").text("Professora e coordenadora do curso de Análise e Desenvolvimento de Sistemas no SENAI");
            $("#txt48").text("Leo era um aluno muito gentil e dedicado, tanto com seus colegas quanto com seus professores. Ele era responsável em suas tarefas e profundamente comprometido e proativo. É uma pessoa muito culta e inteligente, refletindo sobre questões propostas e buscando mediar todos os tipos de debates com argumentos coerentes. É um verdadeiro orgulho poder recomendá-lo como profissional e, acima de tudo, como pessoa.");
            $("#txt49").text("Sócio Diretor da Soft4it Consultoria de Informática | Consultor de SAP Sênior | Módulo SD");
            $("#txt50").text("É com grande prazer que escrevo esta recomendação para Leonardo, um profissional de tecnologia da informação altamente dedicado e estudioso. Com base na minha interação com ele e na sua reputação no setor de tecnologia da informação, não hesito em recomendá-lo como um valioso ativo para qualquer equipe ou projeto relacionado à área de desenvolvimento de software.");

            //section "contact"
            $("#txt51").text("Me contate");
            $("#txt52").text("Sinta-se livre para me contatar");
            $("#name").attr('placeholder', 'Nome');
            $("#subject").attr('placeholder', 'Assunto');
            $("#message").attr('placeholder', 'Mensagem');
            $("#form-button").text("Enviar");
            $("#txt53").text("ENDEREÇO");
            $("#txt54").text("São Bernardo do Campo, SP - Brasil");
            $("#txt55").text("TELEFONE");

            //footer
            $("#txt56").text("Desenvolvedor de Software");
            $("#txt57").text("Minha paixão transfigurada em código.");

        });
    });

    document.querySelectorAll('.es').forEach(item => {
        item.addEventListener('click', function () {

            changeLanguage('es');
            $("#lang-list").toggleClass("hidden disBlock");

            //menu
            $(".nav-list").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".nav-list").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".nav-list").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".nav-list").find(".nav-item").eq(3).find(".nav-link").text("Antecedentes");
            $(".nav-list").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".nav-list").find(".nav-item").eq(5).find(".nav-link").text("Referencias");
            $(".nav-list").find(".nav-item").eq(6).find(".nav-link").text("Contacto");

            //mobile-menu
            $(".mobile-menu").find(".nav-item").eq(0).find(".nav-link").text("Sobre");
            $(".mobile-menu").find(".nav-item").eq(1).find(".nav-link").text("Habilidades");
            $(".mobile-menu").find(".nav-item").eq(2).find(".nav-link").text("Certificados");
            $(".mobile-menu").find(".nav-item").eq(3).find(".nav-link").text("Antecedentes");
            $(".mobile-menu").find(".nav-item").eq(4).find(".nav-link").text("Idiomas");
            $(".mobile-menu").find(".nav-item").eq(5).find(".nav-link").text("Referencias");
            $(".mobile-menu").find(".nav-item").eq(6).find(".nav-link").text("Contacto");

            //menu language icon
            $(".language-selected").addClass("change-es");
            $(".language-selected").removeClass("change-en");
            $(".language-selected").removeClass("change-br");

            //section "about"
            $("#txt1").text("Yo soy");
            $("#txt2").text("Desarrollador de Software");
            $("#txt3").text("EDAD");
            $("#txt4").text("DIRECCIÓN");
            $("#txt5").text("São Bernardo do Campo, SP - Brasil");
            $("#txt6").text("TELÉFONO");

            //section "download-cv"
            $("#txt7").text("Descargar CV");
            document.getElementById('txt7').href = './assets/Resume - Leonardo Gomiero C Capoccia.pdf';

            //id "introducing"
            $("#introducing").text("¡Hola, Mundo! Mi nombre es Leonardo Capoccia, y soy desarrollador de software web. He estado trabajando en este campo durante dos años, ganando experiencia en varias empresas donde pude mejorar mis habilidades técnicas en ReactJS, NodeJS, Computación en la Nube, Análisis de Datos y más. En mi rol, he aprendido a traducir las necesidades de los clientes en soluciones de software, enfocándome en la retroalimentación periódica y prestando mucha atención a los detalles.");

            //section "interests"
            $("#txt8").text("Mis Intereses");
            $("#txt9").text("Tengo un gran interés en las artes marciales; he estado practicando Karate desde 2015. También disfruto correr y asistir al gimnasio regularmente. Los videojuegos, películas y la lectura son algunos de mis pasatiempos. Mi juego favorito es God of War: Ragnarok, y mi libro preferido es \"Cómo ganar amigos e influir sobre las personas\" de Dale Carnegie. Además, a menudo participo en proyectos de desarrollo durante mi tiempo libre como un pasatiempo recreativo.");

            //section "skills-bar"
            $("#txt10").text("Habilidades Profesionales");
            $("#txt11").text("Análisis de Datos");

            //section "project"
            $("#txt12").text("Un Proyecto en Java Puro");
            $("#txt13").text("Durante mi formación en Análisis y Desarrollo de Sistemas, completé un proyecto de 5 semanas para reforzar mis habilidades en Programación Orientada a Objetos. Utilizando Java, simulé batallas de Pokémon de las consolas Gameboy, Nintendo DS y Nintendo Switch. El proyecto destaca mi habilidad en POO, resolución de problemas y aplicación práctica de conceptos teóricos. Estoy emocionado de discutir este proyecto más a fondo en una entrevista.");

            //section "certificates"
            $("#txt14").text("Mis Certificados");
            $("#txt15").text("La insignia AWS Cloud Practitioner es una certificación de nivel básico de Amazon Web Services. Valida el conocimiento básico de los servicios en la nube de AWS, modelos de precios y seguridad.");
            $("#txt16").text("Verificar insignia");
            $("#txt17").text("La certificación Fundamentos de Azure (AZ-900) introduce conceptos fundamentales de la nube y servicios de Microsoft Azure. Valida el conocimiento básico de los servicios en la nube y cómo se proporcionan con Azure.");
            $("#txt18").text("Verificar insignia");
            $("#txt19").text("La certificación Fundamentos de IA de Microsoft (AI-900) es un examen de certificación de Microsoft Azure que cubre conceptos fundamentales de inteligencia artificial (IA) y su aplicación en Azure. Está dirigido a personas que buscan conocimientos básicos en tecnologías de IA en la plataforma Azure.");
            $("#txt20").text("Verificar insignia");
            $("#txt21").text("La certificación Fundamentos de Datos de Microsoft Azure (DP-900) señala una base sólida en conceptos clave de datos para Azure. Demuestra competencia en el manejo de diversos tipos de datos, conocimiento de cargas de trabajo de datos y familiaridad con los servicios de Azure.");
            $("#txt22").text("Verificar insignia");
            $("#txt23").text("Estas 11 insignias cubren tareas fundamentales, gestión de recursos en la nube, redes y fundamentos de la informática en la nube. Especialmente, los logros en Fundamentos de GCP destacan una comprensión sólida de infraestructura, seguridad y redes.");
            $("#txt24").text("Verificar insignias");

            //section "background"
            $("#txt25").text("Educación");
            $("#txt26").text("Ingeniería Informática");
            $("#txt27").text("Tecnología en Análisis y Desarrollo de Sistemas");
            $("#txt28").text("Técnico en Mecatrónica");
            $("#txt29").text("Experiencia");
            $("#txt30").text("2024 - ahora");
            $("#txt31").text("Desarrollador de Software Jr.");
            $("#txt32").text("Instituto SENAI de Tecnología");
            $("#txt33").text("Pasante de Transformación Digital");
            $("#txt34").text("Pasante en Ingeniería de Control");
            $("#txt35").text("Pasante en Desarrollo de Software");

            //section "languages"
            $("#txtLang").text("Idiomas");
            $("#txt36").text("Inglés");
            if (document.getElementById('txt37')) {
                txt37.innerHTML = 'Me enorgullezco de tener un <b style="color: #FEBD40; font-weight: bold; font-style: italic;">Certificado en Inglés Avanzado (CAE)</b>, acreditado por <i>Cambridge</i>, que demuestra mi competencia en el idioma.';
            }
            $("#txt38").text("Portugués");
            $("#txt39").text("Como ciudadano brasileño, el portugués es mi lengua materna.");
            $("#txt40").text("Español");
            $("#txt41").text("Actualmente, estoy estudiando español y he alcanzado un nivel de competencia cercano a B1. Esto significa que soy capaz de comunicarme eficazmente en situaciones básicas de lenguaje.");
            $("#txt42").text("Italiano");
            $("#txt43").text("He estudiado italiano durante tres años y estoy motivado para continuar debido a los miembros de mi familia italianos.");

            //section "testimonials"
            $("#txt44").text("Referencias");
            $("#txt45").text("Desarrollador de Pegasystems en Accenture | PCSA | PCBA");
            $("#txt46").text("He estado estudiando junto con Leonardo desde el primer año de la escuela secundaria. Ambos fuimos monitores voluntarios y nos encontrábamos entre los mejores estudiantes destacados del 5% de la escuela secundaria, y ahora con orgullo formamos parte de la misma universidad. Leonardo es, sin lugar a dudas, un estudiante extremadamente dedicado, brillante y compasivo. Aprende rápidamente y piensa lógicamente, siempre buscando oportunidades frescas para su carrera y utilizando las lecciones aprendidas de sus errores pasados para superar los problemas actuales.");
            $("#txt47").text("Profesora y coordinadora del curso de Análisis y Desarrollo de Sistemas en SENAI");
            $("#txt48").text("Leo era un estudiante muy amable y dedicado, tanto con sus compañeros como con sus profesores. Era responsable en sus tareas y profundamente comprometido y proactivo. Es una persona muy culta e inteligente, reflexionando sobre los problemas propuestos y buscando mediar todo tipo de debates con argumentos coherentes. Es un verdadero orgullo poder recomendarlo como profesional y, sobre todo, como persona.");
            $("#txt49").text("Socio Director en Soft4it Consultoría de Informática | Consultor Senior de SAP | Módulo SD");
            $("#txt50").text("Es un gran placer escribir esta recomendación para Leonardo, un profesional de tecnología de la información altamente dedicado y estudioso. Basándome en mi interacción con él y en su reputación en el sector de tecnología de la información, no dudo en recomendarlo como un activo valioso para cualquier equipo o proyecto relacionado con el desarrollo de software.");

            //section "contact"
            $("#txt51").text("Contáctame");
            $("#txt52").text("No dudes en contactarme");
            $("#name").attr('placeholder', 'Nombre');
            $("#subject").attr('placeholder', 'Asunto');
            $("#message").attr('placeholder', 'Mensaje');
            $("#form-button").text("Enviar");
            $("#txt53").text("DIRECCIÓN");
            $("#txt54").text("São Bernardo do Campo, SP - Brasil");
            $("#txt55").text("TELÉFONO");

            //footer
            $("#txt56").text("Desarrollador de Software");
            $("#txt57").text("Mi pasión transformada en código.");

        });
    });

    document.querySelectorAll('.en').forEach(item => {
        item.addEventListener('click', function () {

            changeLanguage('en');
            $("#lang-list").toggleClass("hidden disBlock");

            //resume
            $(".nav-list").find(".nav-item").eq(0).find(".nav-link").text("About");
            $(".nav-list").find(".nav-item").eq(1).find(".nav-link").text("Skills");
            $(".nav-list").find(".nav-item").eq(2).find(".nav-link").text("Certificates");
            $(".nav-list").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".nav-list").find(".nav-item").eq(4).find(".nav-link").text("Languages");
            $(".nav-list").find(".nav-item").eq(5).find(".nav-link").text("References");
            $(".nav-list").find(".nav-item").eq(6).find(".nav-link").text("Contact");

            //mobile-menu
            $(".mobile-menu").find(".nav-item").eq(0).find(".nav-link").text("About");
            $(".mobile-menu").find(".nav-item").eq(1).find(".nav-link").text("Skills");
            $(".mobile-menu").find(".nav-item").eq(2).find(".nav-link").text("Certificates");
            $(".mobile-menu").find(".nav-item").eq(3).find(".nav-link").text("Background");
            $(".mobile-menu").find(".nav-item").eq(4).find(".nav-link").text("Languages");
            $(".mobile-menu").find(".nav-item").eq(5).find(".nav-link").text("References");
            $(".mobile-menu").find(".nav-item").eq(6).find(".nav-link").text("Contact");

            //menu language icon
            $(".language-selected").addClass("change-en");
            $(".language-selected").removeClass("change-es");
            $(".language-selected").removeClass("change-br");

            //section "about"
            $("#txt1").text("I'm");
            $("#txt2").text("Software Developer");
            $("#txt3").text("AGE");
            $("#txt4").text("ADDRESS");
            $("#txt5").text("São Bernardo do Campo, SP - Brazil");
            $("#txt6").text("PHONE");

            //section "download-cv"
            $("#txt7").text("Download CV");
            document.getElementById('txt7').href = './assets/Resume - Leonardo Gomiero C Capoccia.pdf';

            //id "introducing"
            $("#introducing").text("Hello, World! My name is Leonardo Capoccia, and I am a web software developer. I have been working in this field for two years, gaining experience in various companies where I could enhance my technical skills in ReactJS, NodeJS, Cloud Computing, Data Analysis and more. In my role, I've learned to translate client needs into software solutions, focusing on periodic feedback and paying close attention to detail.");

            //section "interests"
            $("#txt8").text("My Interests");
            $("#txt9").text("I have a keen interest in martial arts; I've been practicing Karate since 2015. I also enjoy running and going to the gym regularly. Video games, movies, and reading are some of my hobbies. My favorite video game is God of War: Ragnarok, and my preferred book is \"How to Win Friends and Influence People\" by Dale Carnegie. Additionally, I often engage in development projects during my free time as a recreational pursuit.");

            //section "skills-bar"
            $("#txt10").text("Professional Skills");
            $("#txt11").text("Data Analysis");

            //section "project"
            $("#txt12").text("A Pure Java Project");
            $("#txt13").text("During my Analysis and Systems Development program, I completed a 5-week project to reinforce Object-Oriented Programming skills. Using Java, I simulated Pokémon battles from Gameboy, Nintendo DS, and Nintendo Switch. The project highlights my proficiency in OOP, problem-solving, and practical application of theoretical concepts. I'm excited to discuss this project further in an interview.");

            //section "certificates"
            $("#txt14").text("My Certificates");
            $("#txt15").text("The AWS Cloud Practitioner badge is an entry-level certification from Amazon Web Services. It validates basic knowledge of AWS Cloud services, pricing models, and security.");
            $("#txt16").text("Verify badge");
            $("#txt17").text("The Azure Fundamentals certification (AZ-900) introduces foundational cloud concepts and Microsoft Azure services. It validates basic knowledge of cloud services and how they are provided with Azure.");
            $("#txt18").text("Verify badge");
            $("#txt19").text("The Microsoft AI Fundamentals certificationThe (AI-900) is a Microsoft Azure certification exam covering fundamental concepts of artificial intelligence (AI) and its application on Azure. It's for individuals seeking basic knowledge in AI technologies on the Azure platform.");
            $("#txt20").text("Verify badge");
            $("#txt21").text("The Microsoft Azure Data Fundamentals certification (DP-900) signals a solid foundation in key data concepts for Azure. It demonstrates proficiency in handling diverse data types, knowledge of data workloads, and familiarity with Azure services.");
            $("#txt22").text("Verify badge");
            $("#txt23").text("These 11 badges cover foundational tasks, cloud resource management, networking, and cloud computing fundamentals. Notably, achievements in GCP Foundations highlight a solid understanding of infrastructure, security, and networking.");
            $("#txt24").text("Verify badges");

            //section "background"
            $("#txt25").text("Education");
            $("#txt26").text("Bachelor's Dergree in Computer Engineering");
            $("#txt27").text("Associate Dergree in Systems Analysis and Development");
            $("#txt28").text("Technical Degree in Mechatronics");
            $("#txt29").text("Experience");
            $("#txt30").text("2024 - now");
            $("#txt31").text("Jr. Software Developer");
            $("#txt32").text("SENAI Institue of Technology");
            $("#txt33").text("Digital Transformation Intern");
            $("#txt34").text("Controls Engineering Intern");
            $("#txt35").text("Software Development Intern");

            //section "languages"
            $("#txtLang").text("Languages");
            $("#txt36").text("English");
            if (document.getElementById('txt37')) {
                txt37.innerHTML = 'I am proud to hold a <b style="color: #FEBD40; font-weight: bold; font-style: italic;">Certificate in Advanced English</b>, accredited by <i>Cambridge</i>, which serves as a testament to my proficiency in the language.';
            }            
            $("#txt38").text("Portuguese");
            $("#txt39").text("As a Brazilian citizen, Portuguese is my native language.");
            $("#txt40").text("Spanish");
            $("#txt41").text("I am presently engaged in the study of Spanish, having reached a proficiency level approaching B1. This signifies that I am capable of communicating effectively in basic language situations.");
            $("#txt42").text("Italian");
            $("#txt43").text("I've studied Italian for three years and am motivated to continue due to Italian family members.");

            //section "testimonials"
            $("#txt44").text("References");
            $("#txt45").text("Pegasystems Developer At Accenture | PCSA | PCBA");
            $("#txt46").text("I've been studying along with Leonardo since freshman's year in HS. We both were former volunteer monitors and among HS top 5% outstanding students and now are proudly part of the same university. Leonardo is, without any doubt, a strongly dedicated, brilliant, compassionate student. He takes full note from his past mistakes and create strategies to overcome his current issues based on that information. A born quick learner and logic thinker, he aims for a fresh opportunity for his career.");
            $("#txt47").text("Professor And Coordinator Of The Systems Analysis And Development Course At SENAI");
            $("#txt48").text("Leo was a very kind and dedicated student, both towards his peers and teachers. He was responsible in his tasks and deeply committed and proactive. He is a very cultured and intelligent person, reflecting on proposed issues and seeking to mediate all kinds of debates with coherent arguments.<br> It is a true pride to be able to recommend him as a professional and, above all, as a person.");
            $("#txt49").text("Managing Partner at Soft4it IT Consulting | Senior SAP Consultant | SD Module");
            $("#txt50").text("It is with great pleasure that I write this recommendation for Leonardo, a highly dedicated and studious information technology professional. Based on my interactions with him and his reputation in the information technology sector, I do not hesitate to recommend him as a valuable asset to any team or project related to software development.");

            //section "contact"
            $("#txt51").text("Contact Me");
            $("#txt52").text("Feel free to contact me");
            $("#name").attr('placeholder', 'Name');
            $("#subject").attr('placeholder', 'Subject');
            $("#message").attr('placeholder', 'Message');
            $("#form-button").text("Send");
            $("#txt53").text("ADDRESS");
            $("#txt54").text("São Bernardo do Campo, SP - Brazil");
            $("#txt55").text("PHONE");

            //footer
            $("#txt56").text("Software Developer");
            $("#txt57").text("My passion transfigured into code.");
        });
    });

    document.querySelectorAll('.language-selected').forEach(item => {
        item.addEventListener('click', function () {
            $("#lang-list").toggleClass("hidden disBlock");
        });
    });

});
