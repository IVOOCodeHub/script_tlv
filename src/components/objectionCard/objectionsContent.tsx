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
        - <span className={'invalidTextColor'}>Retour au PA -</span>
        <br /> [...] et comme je vous le disais, [...]{' '}
      </p>
    ),
  },
  {
    name: `C'est la crise`,
    reformulation: (
      <p>
        La période est difficile pour vous en ce moment Mr .X. c'est bien cela ?
      </p>
    ),
    stepForward: (
      <p>
        Je comprends tout à fait que vous vouliez rester vigilant sur vos
        achats... Et je ne suis pas là pour vous mettre en difficulté bien
        évidemment.
      </p>
    ),
    answer: (
      <p>
        (Vous savez) ... chacun aide selon ses possibilités du moment. Ce qui
        compte, c'est <span className={'bold underline'}>l'action sociale</span>
        . <br /> Ce que je propose, c'est que nous restions sur un{' '}
        <span className={'bold underline'}>soutien raisonnable</span> de
        quelques articles en papeterie ou en hygiènes, ce qui me permettra
        toujours de débloquer un temps de travail très précieux pour l'insertion
        de ces personnes handicapées.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br /> [...] et comme je vous le disais [...]{' '}
      </p>
    ),
  },
  {
    name: `Pas par téléphone`,
    reformulation: (
      <p>
        Vous ne prenez aucune décision par téléphone M .X., c'est bien cela ?
      </p>
    ),
    stepForward: (
      <p>
        Je respecte tout à fait cette volonté et je dois dire que bon nombre de
        nos entreprises partenaires adoptent la même règle.
      </p>
    ),
    answer: (
      <p>
        Si j'appelle tous mes partenaires aujourd'hui (voyez-vous) c'est parce
        que <span className={'bold underline'}>je suis dans l'urgence</span> et
        le téléphone évidemment, me permet d'être plus réactive.
        <br /> Je tiens toutefois à vous rassurer sur nos procédures,{' '}
        <span className={'bold underline'}>rien ne se finalise oralement</span>,
        tout est écrit sur un bon de commande, que je vous envoie par e-mail.
        <br /> Et je ne déclenche le travail à l'atelier qu'à réception de votre
        "Bon pour accord".
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>- Retour au PA -</span>
        <br /> [...] et comme je vous le disais, [...]{' '}
      </p>
    ),
  },
  {
    name: 'Aide déjà un ESAT',
    reformulation: (
      <p>Vous soutenez déjà un de nos confrères, c'est bien cela ?</p>
    ),
    stepForward: (
      <p>
        C'est tout à votre honneur, cela montre que vous êtes sensible à
        l'action que je mène aujourd'hui.
      </p>
    ),
    answer: (
      <p>
        (Vous savez)... nous avons l'habitude de travailler en bonne
        intelligence entre ESAT et nous respectons les relations de partenariat
        de chacun.
        <br />
        Pour autant il nous arrive à{' '}
        <span className={'bold underline'}>tous</span> de devoir solliciter de
        nouvelles entreprises quand nous manquons d'heures de travail dans les
        ateliers.
        <br />
        Ce sont des demandes d'aide très{' '}
        <span className={'bold underline'}>ponctuelles</span> et justement, si
        je me permets de vous solliciter{' '}
        <span className={'bold underline'}>aujourd'hui</span> M .X. c'est parce
        que <span className={'bold underline'}>je dois</span> clôturer au plus
        vite un programme de travail resté en suspens à l'atelier.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] et je voulais voir avec vous par quel article vous pouvez m'aider
        à générer des heures de travail pour ces personnes handicapées.
      </p>
    ),
  },
  {
    name: 'Emploi un TH à +50%',
    reformulation: (
      <p>
        Très bien ! Et c'est une personne avec un taux de handicap supérieur à
        50% peut-être ? <br /> <span className={'validTextColor'}>Si OUI</span>{' '}
        –&gt; Continuer. <br />{' '}
        <span className={'invalidTextColor'}>Si NON</span> –&gt; Objection:
        EMPLOIE UN TH À -50%
      </p>
    ),
    stepForward: (
      <p>
        (Et bien, M.X.) c'est tout à votre honneur. Vous devez donc parfaitement
        connaître les difficultés d'insertion de ces travailleurs handicapés.
      </p>
    ),
    answer: (
      <p>
        C'est effectivement{' '}
        <span className={'bold underline'}>dans nos ateliers spécialisés</span>{' '}
        que ces personnes acquièrent les apprentissages qui vont leur permettre
        de <span className={'bold underline'}>gagner en autonomie</span>{' '}
        professionnelle pour intégrer plus tard des entreprises comme la vôtre.
        <br />
        Et je vous sollicite aujourd'hui M .X. pour un achat solidaire, par le
        biais d'une commande en papeterie ou en hygiène qui va me permettre de
        générer du temps de travail à l'atelier.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br /> [...] et je voulais voir avec vous par quel article [...]
      </p>
    ),
  },
  {
    name: 'Pas intéressé',
    reformulation: (
      <p>
        Qu'est-ce qui vous retient M .X. ... C'est peut être l'action sociale
        pour l'insertion des travailleurs handicapés ?<br />{' '}
        <span className={'validTextColor'}>Si OUI</span> –&gt; Continuer.
        <br /> <span className={'invalidTextColor'}>Si NON</span> –&gt;
        Objection détectée.
      </p>
    ),
    stepForward: (
      <p>
        Je comprends que vous ne puissiez ne pas vous sentir concerné par cette
        cause, nous ne sommes pas toujours disponibles pour nous y intéresser.
        Et puis nous manquons souvent d'informations ...
      </p>
    ),
    answer: (
      <p>
        Et c'est justement pourquoi je viens vers vous aujourd'hui, M .X., pour
        vous sensibiliser à notre action pour vous vous inviter à{' '}
        <span className={'bold underline'}>nous soutenir</span>. <br />
        En passant une commande très ponctuelle de quelques articles de
        papeterie ou d'hygiène, vous permettez à ces travailleurs handicapés
        d'acquérir les savoir faire indispensables à leurs réinsertion dans la
        vie active... Et c'est{' '}
        <span className={'bold underline'}>tout l'intérêt</span> d'une telle
        action.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br /> [...] et comme je vous le disais, [...]
      </p>
    ),
  },
  {
    name: 'Trop de stock',
    reformulation: (
      <p>
        Vous avez suffisamment de stock dans l'immédiat M .X. c'est bien cela ?
      </p>
    ),
    stepForward: (
      <p>
        C'est tout à fait normal que vous n'attendiez pas mon appel pour
        renouveler votre stock et je ne suis pas là pour augmenter ce stock.
      </p>
    ),
    answer: (
      <p>
        Ma démarche est à caractère social et je vous sollicite aujourd'hui pour
        un <span className={'bold underline'}>achat solidaire</span> très
        ponctuel qui va me permettre de débloquer du temps de travail à
        l'atelier.
        <br />
        (Maintenant M .X.), si vous êtes prêt à nous aider dans notre action,
        nous avons des{' '}
        <span className={'bold underline'}>délais de livraison</span> qui
        tiennent compte du rythme de nos travailleurs handicapés et peuvent
        aller jusqu'à X semaines, ce qui vous laisse le temps d'écouler une
        partie de votre stock.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] qu'est-ce qui part le plus vite chez vous, la papeterie ou
        l'hygiène ? [...]
      </p>
    ),
  },
  {
    name: 'Plus de budget fournisseur',
    reformulation: (
      <p>
        Votre budget concernant les achats de papeterie et d'hygiène est épuisé
        M .X. ? C'est bien cela ?<br />{' '}
        <span className={'validTextColor'}>Si OUI</span> –&gt; Continuer.
        <br /> <span className={'invalidTextColor'}>Si NON</span> –&gt;
        Objection: PLUS DE BUDGET ESAT
        <br /> <span className={'invalidTextColor'}>Si plus d'argent</span>{' '}
        –&gt; Objection: C'EST LA CRISE
      </p>
    ),
    stepForward: (
      <p>
        Je comprends tout à fait que les achats de consommables soient soumis à
        un budget et qu'il faille gérer cela de près.
      </p>
    ),
    answer: (
      <p>
        Permettez-moi de vous préciser que ma démarche n'est pas du tout celle
        d'un fournisseur qui rentrerait dans le cadre d'un budget, puisque je
        suis un <span className={'bold underline'}>centre d'insertion</span>{' '}
        pour les travailleurs handicapés, et je vous sollicite aujourd'hui pour
        un <span className={'bold underline'}>achat solidaire</span>, une
        commande <span className={'bold underline'}>très ponctuelle</span> qui
        va générer du temps de travail pour nos personnes handicapées.
        <br /> Bien entendu, nos délais de paiement savent tenir compte de vos
        contraintes budgétaires. Ils vont jusqu'as 60 jours à réception de votre
        confirmation de commande.
        <br /> Le plus important voyez vous, c'est votre soutien{' '}
        <span className={'bold underline'}>maintenant</span>, pour que je puisse
        lancer le travail à l'atelier. .
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] et comme je vous le disais [...]
      </p>
    ),
  },
  {
    name: 'Trop sollicité',
    reformulation: (
      <p>
        (Si je comprends bien)[...] vous êtes de plus en plus sollicité par des
        ateliers de réinsertion c'est bien cela ?
      </p>
    ),
    stepForward: (
      <p>Je comprends bien M .X., que cela finisse par vous importuner.</p>
    ),
    answer: (
      <p>
        En même temps, cela prouve qu'il y as{' '}
        <span className={'bold underline'}>un vrai besoin</span> concernant
        l'accompagnement de ces personnes handicapées.
        <br />
        Vous savez, le succès de leur réinsertion dépend uniquement du{' '}
        <span className={'bold underline'}>soutien des entreprises</span>.{' '}
        <br />
        Maintenant, si je me permet de vous contacter précisément{' '}
        <span className={'bold underline'}>aujourd'hui</span> M .X., c'est parce
        que nous sommes dans l'urgence pour clôturer au plus vite un programme
        de travail en cours à l'atelier.
      </p>
    ),
  },
  {
    name: 'Aide en local',
    reformulation: (
      <p>
        Vous soutenez déjà un de nos confrères de votre région, c'est bien cela
        ?<br />
        <span className={'validTextColor'}>Si OUI</span> –&gt; Continuer.
        <br /> <span className={'invalidTextColor'}>Si NON</span> –&gt; AIDE
        DÉJÀ UN ESAT.
        <br />
      </p>
    ),
    stepForward: (
      <p>
        C'est tout à votre honneur, cela montre que vous êtes sensible à
        l'action que je mène aujourd'hui. La proximité est aussi notre priorité
        même si, vous en conviendrez, l'action solidaire n'a pas de frontières.
      </p>
    ),
    answer: (
      <p>
        Quoi qu'il en soit, nous avons l'habitude de travailler en bonne
        intelligence entre ESAT et nous respectons les relations de partenariat
        de chacun.
        <br />
        Pour autant il nous arrive à{' '}
        <span className={'bold underline'}>tous</span> de devoir solliciter de
        nouvelles entreprises quand nous manquons d'heures de travail dans les
        ateliers.
        <br />
        Ce sont des demandes d'aide très{' '}
        <span className={'bold underline'}>ponctuelles</span> et justement, si
        je me permets de vous solliciter{' '}
        <span className={'bold underline'}>aujourd'hui</span> M .X. c'est parce
        que <span className={'bold underline'}>je dois</span> clôturer au plus
        vite un programme de travail resté en suspens à l'atelier.{' '}
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] et je voulais voir avec vous par quel article vous pouvez m'aider
        à générer des heures de travail pour ces personnes handicapées.
      </p>
    ),
  },
  {
    name: 'Emploi un TH à -50%',
    reformulation: (
      <p>
        Très bien ! La personne que vous employez a un taux de handicap
        inférieur à 50% ?
      </p>
    ),
    stepForward: (
      <p>
        J'imagine que vous avez dû malgré tout adapter son poste de travail pour
        faciliter son intégration, ce qui n'est pas toujours simple...
      </p>
    ),
    answer: (
      <p>
        Et bien dans notre centre d'insertion (voyez-vous) nous accueillons les
        personnes qui n'ont pas encore la capacité d'intégrer des entreprises
        comme la vôtre et nos ateliers de travail sont là pour les y préparer.{' '}
        <br />
        Ils apprennent notamment à conditionner les articles commandés par nos
        entreprises partenaires. <br />
        Et c'est ce qui m'amène vers vous aujourd'hui M .X.
        <br />
        Je vous sollicite pour une commande solidaire très ponctuelle, qui va
        générer du temps de travail à l'atelier.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] et je voulais voir avec vous par quel article [...]
      </p>
    ),
  },
  {
    name: 'Trop cher',
    reformulation: (
      <p>
        Nos articles semblent généralement plus chers que l'offre de vos
        fournisseurs, M .X. , c'est bien cela ?
      </p>
    ),
    stepForward: (
      <p>
        Évidement je comprends votre réticence si vous nous comparez à votre
        fournisseur qui lui, se doit d'être compétitif sur le marché.
      </p>
    ),
    answer: (
      <p>
        En réalité, nous ne sommes pas une entreprise commerciale, nous sommes
        un{' '}
        <span className={'bold underline'}>
          centre médico-social d'insertion
        </span>
        . Nos travailleurs handicapé préparent les commandes{' '}
        <span className={'bold underline'}>manuellement</span>, à leur rythme et
        en fonction de leurs capacités. <br />
        Et si je vous sollicite aujourd'hui M .X. c'est pour un{' '}
        <span className={'bold underline'}>achat solidaire</span> et{' '}
        <span className={'bold underline'}>ponctuel</span> qui va me permettre
        de débloquer des heures de travail et clôturer mon programme à
        l'atelier. Bien entendu, vous nous aidez{' '}
        <span className={'bold underline'}>
          selon vos possibilités du moment
        </span>
        ... Il n'y as pas de petit soutien.{' '}
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] et comme je vous le disais [...]
      </p>
    ),
  },
  {
    name: 'Déjà un fournisseur',
    reformulation: (
      <p>
        (Si je comprends bien)...
        <br />
        Vous avez l'habitude d'acheter vos articles de papeterie et d'hygiène
        auprès d'un fournisseur c'est cela ?
      </p>
    ),
    stepForward: (
      <p>
        C'est bien normal. <br />
        D'ailleurs, tous les partenaires qui nous soutiennent ont eux-aussi,
        leurs propres fournisseurs.
      </p>
    ),
    answer: (
      <p>
        Je ne veux surtout pas me substituer à un fournisseur M .X., puisque la
        vocation de notre centre n'est pas commerciale mais{' '}
        <span className={'bold underline'}>sociale</span>.<br />
        Et je vous sollicite aujourd'hui pour un soutien{' '}
        <span className={'bold underline'}>de solidarité</span> tout à fait{' '}
        <span className={'bold underline'}>ponctuel</span>, à travers une
        commande en papeterie ou en hygiène qui va me permettre de clôturer un
        programme de travail en cours à l'atelier.{' '}
      </p>
    ),
    keepArgumentation: (
      <p>
        <span>– Retour au PA –</span>
        <br />
        [...] et comme je vous le disais [...]
      </p>
    ),
  },
  {
    name: 'Plus de budget ESAT',
    reformulation: (
      <p>
        Vos achats solidaires pour les ESAT rentrent dans le cadre d'un budget ?
        C'est celà ?
      </p>
    ),
    stepForward: (
      <p>
        Celà montre que vous êtres sensible à cette cause puisque vous lui
        attribuez un budget spécifique et je vous en félicite M .X.
      </p>
    ),
    answer: (
      <p>
        Je tiens à vous dire M .X. que ma démarche vers vous aujourd'hui reste
        tout à fait <span className={'bold underline'}>exceptionnelle</span> et
        donc <span className={'bold underline'}>ponctuelle</span>
        parce que je suis dans{' '}
        <span className={'bold underline'}>l'urgence</span>.<br />
        Je dois absolument clôturer un programme de travail à l'atelier et
        j'appelle pour cela tous mes partenaires. Bien entendu, nos délais de
        paiement savent tenir compte de vos contraintes budgétaires. Ils vont
        jusqu'à 60 jours à réception de votre confirmation de commande. Ce qui
        m'importe voyez-vous, c'est votre soutien{' '}
        <span className={'bold underline'}>maintenant</span>, pour que je puisse
        lancer le travail à l'atelier.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        [...] et comme je vous le disais [...]
      </p>
    ),
  },
  {
    name: 'Tarif/Catalogue',
    reformulation: (
      <p>
        Vous voulez que je vous fasse parvenir un catalogue complet avec des
        références produits et des tarifs c'est bien cela M .X. ?
      </p>
    ),
    stepForward: (
      <p>
        Je comprends que vous souhaitiez prendre le temps de découvrir nos
        articles comme vous le faites avec vos fournisseurs habituels.
      </p>
    ),
    answer: (
      <p>
        (Comme je vous le disais) nous sommes un{' '}
        <span className={'bold underline'}>centre d'insertion</span> et nos
        personnes handicapées travaillent uniquement sur 3 ou 4 articles
        courants. Nous n'avons donc pas de catalogue à vous offrir... <br />
        En revanche, ce que je vous propose M .X. c'est de vous présenter{' '}
        <span className={'bold underline'}>moi-même</span>, ces quelques
        produits pour que l'on puisse voir{' '}
        <span className={'bold underline'}>ensembles</span> par quel(s)
        article(s) vous pouvez{' '}
        <span className={'bold underline'}>nous aider</span> à générer des
        heures de travail ... <br />
        ... et je me permets d'insister sur l'urgence de ma démarche puisque je
        dois débloquer un programme de travail en cours à l'atelier.
      </p>
    ),
    keepArgumentation: (
      <p>
        <span className={'invalidTextColor'}>– Retour au PA –</span>
        <br />
        Alors M .X. qu'est-ce que l'on peut voir ensembles en papeterie si vous
        voulez... des enveloppes ? des chemises ? Dites-moi.
      </p>
    ),
  },
]
