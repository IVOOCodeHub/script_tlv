export interface IPartner {
  Code:string;
  datecreation:string;
  codecampagne:string;
  Nompartenaire:string;
  Rue:string;
  Complement:string;
  CodePostal:string;
  Ville:string;
  NomResponsable:string;
  TelResponsable:string;
  faxresponsable:string;
  emailresponsable:string;
  NomContact1:string;
  fonctioncontact1:string;
  TelContact1:string;
  Faxcontact1:string;
  emailcontact1:string;
  Nomcontact2:string;
  fonctioncontact2:string;
  telcontact2:string;
  faxcontact2:string;
  emailcontact2:string;
  Organismegestionnaire:string;
  nature:string;
  sigle:string;
  effectifs:string;
  pieceofficielle:string;
  siret:string;
  ape:string;
  finess:string;
  ribnombanque:string;
  ribcodebanque:string;
  ribcodeguichet:string;
  ribnocompte:string;
  ribcle:string;
  portht:string;
  franco:string;
  tauxtva:string;
  delaireglement:string;
  condreglement:string;
  condvente:string;
  delailivraison:string;
  txtagrement1:string;
  txtagrement:string;
  txtagrement2:string;
  txtquisommesnous:string;
  txttelsrvcli:string;
  txtfaxsrvcli:string;
  txtconseilcde:string;
  tvaintra:string;
  campagneactive:string;
  typecampagne:string;
  bloque:string;
  motifbloque:string;
  emissionfax:string;
  nofaxcde:string;
  emissionmail:string;
  email:string;
  version:string;
  seuilcreance:string;
  delailivmini:string;
  delailivmaxi:string;
  delairegmaxi:string;
  enlevementpossible:string;
  notediverses:string;
  bic:string;
  iban:string;
  type_export_rdv:string;
  vente_ivoo:string;
  lead:string;
  campagne_fabrication_lead:string;
  DID_hermes:string;
  adresse_ip_fixe:string;
  groupe_societe:string;
  facturation_taux_commission:string;
  facturation_taux_reglement:string;
  facturation_delai_reglement:string;
  facturation_taux_reglement2:string;
  facturation_delai_reglement2:string;
  facturation_mode_reglement:string;
  facturation_taux_special:string;
  STEN_code:string;
  motif_inactif:string;
  no_compte_tiers:string;
  nom_drive_partage:string;
  email_retour_commande:string;

  find(param: (singlePartner: IPartner) => void): void
}