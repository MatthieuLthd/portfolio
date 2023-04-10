/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';


const Veille = () => {
  return(
    <div className='section h-[2000px]' id='veille'>
      <div className="container mx-auto">
        <h2 className='h2 text-accent mb-6'>Veille technologique</h2>
        <h3 className='h3 text-accent mb-2'>Qu'est-ce que la veille technologique ?</h3>

          <p className='mb-6'>La veille technologique est une activité qui consiste à surveiller et à collecter des informations sur les dernières tendances, innovations et évolutions dans un domaine technologique spécifique. Elle peut être utilisée pour suivre les développements de produits, de nouvelles technologies, de tendances du marché, de changements réglementaires, de concurrents, ...</p>

        <h3 className='h3 text-accent mb-2'>Quels sont alors ses intérêts ?</h3>
        
          <li>Rester à jour sur les dernières tendances et les avancées technologiques</li>
          <li>Anticiper les évolutions du marché et les changements réglementaires</li>
          <li>Détecter les opportunités de développement de nouveaux produits ou services</li>
          <li>Surveiller les concurrents et les partenaires potentiels</li>
          <li>Faciliter la prise de décision en disposant d'informations précises et à jour</li>

        <h3 className='h3 text-accent mb-2 mt-6'>Explication des méthodes Push et Pull</h3>

        <div className='mb-6'>
          <p className='mb-3'>La méthode <b>push</b> consiste à recevoir des informations de veille technologique directement de la source. Par exemple, cela peut être des newsletters, des alertes par e-mail, des flux RSS, des réseaux sociaux, des groupes de discussion, des événements, ...</p>

          <p>La méthode <b>pull</b> consiste à rechercher et à collecter activement des informations de veille technologique. Par exemple, cela peut être des recherches sur des sites web, des blogs, des bases de données, des moteurs de recherche spécialisés, ...</p>        
        </div>

        <h3 className='h3 text-accent'>Les progrès des services proposés par OpenAI</h3>
          <h4 className='text-gradient text-[40px tracking-wider font-primary font-semibold mb-6]'>Pourquoi ce sujet ?</h4>
          <p className='mb-6'>
            J’ai choisi ce sujet car les services proposés par cette entreprise sont liés à l’IA et les technologies d'apprentissage informatique. C’est un domaine qui progresse rapidement et dans lequel OpenAI est particulièrement active.
          </p>

          <h4 className='text-gradient text-[40px tracking-wider font-primary font-semibold mb-6]'>Présentation de l'entreprise</h4>
          <div className='mb-6'>
            <p className='mb-3'>
              OpenAI est une entreprise de recherche en intelligence artificielle créée en 2015 par des personnalités telles qu'Elon Musk, Sam Altman et Greg Brockman. Son objectif est de développer une IA sûre et bénéfique pour l'Homme, tout en cherchant à améliorer la compréhension de l'IA et de ses impacts sur la société.
            </p>
            <p>
              Pour atteindre ces objectifs, OpenAI mène des recherches approfondies sur divers aspects de l'IA, tels que la compréhension du langage naturel, la vision par ordinateur, la robotique, la génération de textes et d'images, etc. L'entreprise développe également des modèles d'IA avancés, tels que Chat-GPT, Codex, DALL-E et CLIP.
            </p>
          </div>

          <h4 className='text-gradient text-[40px tracking-wider font-primary font-semibold mb-6]'>Chat-GPT</h4>
          <div className='mb-6'>
            <p className='mb-3'>
            C'est un modèle de langage développé par OpenAI, basé sur la technologie de traitement du langage naturel GPT (Generative Pretrained Transformer). Son objectif est d'interagir avec les utilisateurs en utilisant des réponses naturelles et compréhensibles, grâce à l'apprentissage automatique et à la modélisation statistique. Il capable de répondre à une variété de questions, de réaliser des tâches telles que la traduction de langues et la génération de texte, et il continue à apprendre de nouvelles choses grâce à des mises à jour régulières de son modèle de base.
            </p>
          </div>

          <h4 className='text-gradient text-[40px tracking-wider font-primary font-semibold mb-6]'>Où en est cette technologie actuellement ?</h4>
          <div className='mb-6'>
            <p className='mb-3'>
            La nouvelle version de Chat-GPT est sortie. Son nom est GPT-4 qui comme son prédécesseur GPT-3.5 est un modèle de langage multimodal, de type transformateur génératif pré-entraîné, sorti le 14 mars 2023. GPT-4 posséderait plus de 100 000 milliards de paramètres, contre les 175 milliards de GPT-3.5.

            </p>
          </div>

          


        <div className='flex flex-col lg:flex-row relative overflow-hidden border-4 border-white/50 rounded-xl mt-5'>
          <aside styl="background-color:#FFF"> 
            <iframe allowtransparency="true" src="https://www.pearltrees.com/matthieul1612/veille-technologique/id63959123?embed=2&d=202303071737" width="1200" height="500" title='Veille technologique'>
            </iframe>
          </aside>
        </div>
      </div>
    </div>
    );
  };

  

export default Veille;
