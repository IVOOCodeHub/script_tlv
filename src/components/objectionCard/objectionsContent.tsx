export const objectionsContent = [
  {
    name: 'Siege',
    reformulation: (
      <p>
        Toutes vos relations achat-fournisseurs sont gérées par le siège c'est
        cela ?
      </p>
    ),
    stepForward: (
      <p>
        – Oui je comprends – , les fournisseurs sont généralement référencés par
        le siège des entreprises.
      </p>
    ),
    answer: (
      <p>
        – Moi – Je ne viens pas vers vous en tant que fournisseur, je vous
        sollicite dans le cadre d'une action sociale, en faveur du travail des
        personnes handicapées.
        <br /> Ma démarche n'est pas du tout commerciale.
        <br /> C'est pourquoi je ne pense pas qu'elle puisse impliquer votre
        siège.
        <br /> Il s'agit d'un achat solidaire, Mr X un soutien très ponctuel de
        votre part, par le biais d'une commande qui va me permettre de débloquer
        quelques heures de travail à l'atelier.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span> Qu'est-ce
        qu'on peut voir ensemble M .X. en papeterie ou en hygiène ?<br />{' '}
        Dites-moi.
      </p>
    ),
  },
  {
    name: 'Pas de besoin',
    reformulation: (
      <p>
        Vous venez de faire votre stock en papeterie et en hygiène M .X. c'est
        bien cela ?<br /> <span className={'validTextColor'}>Si OUI</span> –&gt;
        Objection STOCK.
        <br /> <span className={'invalidTextColor'}>Si NON</span> –&gt;
        Reformuler ainsi.
        <br />
        En faite, vous avez peu de consommation en papeterie et en hygiène,
        c'est cela ?
      </p>
    ),
    stepForward: (
      <p>
        Nous avons en effet des partenaires comme vous, qui consomment très peu
        de papeterie et de produit d'hygiène.
      </p>
    ),
    answer: (
      <p>
        Ils nous aident donc généralement sur des petites quantités, pour
        l'action sociale.
        <br /> En réalité M .X. je ne vous propose pas un achat lié à un besoin
        en papeterie ou en hygiène, vous l'avez compris.
        <br /> Il s'agit d'un achat solidaire qui va générer des heures de
        travail très importantes pour nos travailleurs handicapés puisque c'est
        en préparant votre commande qu'ils vont pouvoir acquérir les
        savoir-faire indispensables à leur réinsertion.
      </p>
    ),
    keepArgumentation: (
      <p>
        - <span className={'invalidTextColor'}>Retour au PA -</span> [...] et
        comme je vous le disais, [...]{' '}
      </p>
    ),
  },
  {
    name: `C'est la crise`,
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: `Pas par téléphone`,
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Aide déjà un ESAT',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Emploi un TH à +50%',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Pas intéressé',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Trop de stock',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Plus de budget fournisseur',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Trop sollicité',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Aide en local',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Emploi un TH à -50%',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Trop cher',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Déjà un fournisseur',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Plus de budget ESAT',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
  {
    name: 'Tarif/Catalogue',
    reformulation: <p></p>,
    stepForward: <p></p>,
    answer: <p></p>,
    keepArgumentation: <p></p>,
  },
]
