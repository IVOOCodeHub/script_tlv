export const callPlanContent = [
  {
    title: 'Identification',
    objective: (
      <p>
        Obtenez LE NOM ... <br />
        <span className={'asideImportant'}>
          du décisionnaire et signataire !
        </span>
      </p>
    ),
    action: <p>Soyez MIS(E) EN RELATION ...</p>,
    discourse: (
      <p>
        « Bonjour, je suis (...) vous allez{' '}
        <span className={'asideImportant'}>SÛREMENT</span> pouvoir m'orienter
        !?...
        <br />
        J'avais eu un contact avec la personne{' '}
        <span className={'asideImportant'}>
          décisionnaire et signataire
        </span>{' '}
        pour les achats de fournitures de bureau et de produits d'hygiène...{' '}
        <br />
        Et je n'ai plus son nom... C'est monsieur, madame ? ... <br />
        Vous pouvez me le (la) passer s'il vous plaît ? ... »
      </p>
    ),
  },
  {
    title: 'Création de lien',
    objective: (
      <p>
        <span className={'asideImportant'}>FAITES-VOUS ACCEPTER</span>
        <br /> par le décisionnaire...
      </p>
    ),
    action: (
      <p>
        RENDEZ-LE <br /> DISPONIBLE À L'ÉCOUTE !
      </p>
    ),
    discourse: (
      <p>
        « Bonjour Mr/Mme.XXX, je suis XXX... de l'ESAT de ... <br /> le centre
        de réinsertion pour les personnes handicapées{' '}
        <span className={'asideImportant'}>de la région.</span>
        <br />
        Vous allez bien ? <br />
        Vous vous souvenez de moi Mr/Mme.XXX ? ... <br />
        On devait se recontacter ce mois-ci ?! ... »
      </p>
    ),
  },
  {
    title: 'Sensibilisation',
    objective: (
      <p>
        <span className={'asideImportant'}>
          EXPLIQUEZ !<br />
          FAITES COMPRENDRE !<br />
          FAITES ADHERER !
        </span>
        le décisionnaire au principe de la réinsertion par le travail en "Milieu
        protégé"
      </p>
    ),
    discourse: (
      <p>
        « Je vous rappelle que notre centre s'occupe de travailleurs handicapés{' '}
        <span className={'asideImportant'}>à plus de 50%</span>, qui n'ont pas
        accès à l'entreprise. <br />
        <span className={'asideImportant'}>Et comme vous le savez,</span> les
        entreprises en général n'ont pas les postes adaptés pour les réinsérer.
        <br />{' '}
        <span className={'asideItalic'}>C'est votre cas je crois ?!...</span>
        <br />
        Notre mission, à l'ESAT de ... c'est de les faire travailler{' '}
        <span className={'asideImportant'}>dans nos ateliers</span> et dans le
        cadre de nos{' '}
        <span className={'asideImportant'}>programmes de réinsertion</span>,
        nous leur faisions conditionner{' '}
        <span className={'asideImportant'}>manuellement</span> des articles de
        papeterie et des produits d'hygiène.
        <br />
        Ils travaillent sur le comptage, le repérage des couleurs et la
        préparation des commandes de nos partenaires.
        <br />
        L'objectif, voyez-vous, c'est qu'ils retrouvent{' '}
        <span className={'asideImportant'}>une autonomie</span> pour se
        réinsérer dans la vie active. <br />{' '}
        <span className={'asideItalic'}>
          Vous comprenez le sens de notre mission, Mr/Mme.XXX !?...
        </span>{' '}
        »
      </p>
    ),
  },
  {
    title: 'Demande aide',
    objective: (
      <p>
        OBTENEZ un <span className={'asideImportant'}>ACCORD DE PRINCIPE</span>
        du décisionnaire
      </p>
    ),
    action: (
      <p>
        Pour{' '}
        <span className={'asideImportant'}>
          soutenir le programme de travail
        </span>{' '}
        en cours à l'atelier
      </p>
    ),
    discourse: (
      <p>
        « Si je me permets de vous recontacter aujourd'hui Mr./Mme.XXX, c'est
        parce <span className={'asideImportant'}>qu'actuellement</span>, nous
        avons besoin{' '}
        <span className={'asideImportant'}>d'heures de travail</span> pour
        clôturer notre programme. <br />
        Et je viens voir <span className={'asideImportant'}>
          avec vous,
        </span>{' '}
        par quel article vous pouvez{' '}
        <span className={'asideImportant'}>nous aider</span> à les faire
        travailler, <br /> ... tout en sachant qu'ils conditionnent{' '}
        <span className={'asideImportant'}>uniquement 3 ou 4 produits</span>{' '}
        utilisés par tout le monde... <br /> ... des chemises, des enveloppes,
        du papier photocopie et des sacs poubelles. <br />{' '}
        <span className={'asideItalic'}>
          Qu'est-ce que vous utilisez le plus fréquemment, vous, Mr./Mme.XXX ?
          Plus de la papeterie ou plus de l'hygiène ?
        </span>{' '}
        »
      </p>
    ),
  },
  {
    title: 'Commande',
    objective: (
      <p>
        Transformez cet accord de principe <br /> en{' '}
        <span className={'asideImportant'}>QUANTITÉ</span> de produit
        correspondant à des <span className={'asideImportant'}>HEURES</span> de
        travail
      </p>
    ),
    action: 'testE',
    discourse: (
      <ul>
        <li>
          <div>Le produit</div>
          <div><ul>
            <li>Si papeterie « des chemises ou des enveloppes ? »</li>
            <li></li>
          </ul></div>
        </li>
      </ul>
    ),
  },
  {
    title: 'Assise de commande',
    objective: (
      <p>
        Augmentez la contribution du décisionnaire... au programme de travail en
        cours à l'atelier
      </p>
    ),
    action: (
      <p>
        FRANCO DE PORT NON ATTEINT ? ... <br /> Alors augmentez les quantités
        ! ...
      </p>
    ),
    discourse: <p>« »</p>,
  },
  {
    title: 'Retour de commande',
    objective: (
      <p>Faites revenir la commande "Acceptée" par retour d' e-mail</p>
    ),
    action: (
      <p>
        Demandez le <span className={'asideImportant'}>retour immédiat</span> de
        la commande !
      </p>
    ),
    discourse: (
      <p>
        « Mr/Mme.XXX, je vous envoie{' '}
        <span className={'asideImportant'}>tout de suite</span> le bon de
        commande, par e-mail. <br />{' '}
        <span className={'asideImportant'}>Très important</span>, il faut
        absolument que vous me le retourniez{' '}
        <span className={'asideImportant'}>aussitôt</span>, signé, tamponné,
        avec la mention <span className={'asideItalic'}>bon pour accord</span>,
        pour que je puisse faire valider les heures de travail. <br />
        <span className={'asideItalic'}>
          Je compte sur vous Mr/Mme ... ?!
        </span>{' '}
        »
      </p>
    ),
  },
  {
    title: 'Prise de congés',
    objective: (
      <p>
        Définissez LA DATE pour une{' '}
        <span className={'asideImportant'}>prochaine action</span>et prenez
        congé. <br /> Saluez, remerciez, et ...{' '}
      </p>
    ),
    action: <p>et bravo !</p>,
    discourse: (
      <p>
        « Mr/Mme. XXX. dans le cadre de notre mission et selon nos besoins en
        heures de travail, nous sommes amenés à solliciter nos partenaires de
        façon ponctuelle.
        <br />À ce titre, quand me permettez-vous de vous recontacter ? <br />
        Plutôt aux alentours du ( ) ou bien vers le ( ) <br />
        Je vous remercie encore pour votre soutien Mr/Mme.XXX. Et j'attends
        votre retour de commande. <br /> Je peux attendre votre e-mail ?! ...
        Merci et au revoir Mr/Mme.»
      </p>
    ),
  },
]
