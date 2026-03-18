import { useState, useCallback } from "react";

const courses = [
  {
    id: 1,
    title: "Sources du Droit du Travail",
    color: "#1a5276",
    accent: "#2e86c1",
    light: "#d4e6f1",
    icon: "⚖️",
    sections: [
      {
        title: "Sources Étatiques",
        icon: "🏛️",
        color: "#1a5276",
        items: [
          {
            title: "Droit Constitutionnel",
            details: [
              "Pas la source la plus importante",
              "Principes généraux : égalité H/F, liberté syndicale, droit d'obtenir un emploi",
              "Préambule Constitution 27 oct. 1946",
            ],
          },
          {
            title: "Code du Travail",
            details: [
              "1ère rédaction 1910, refonte 2008",
              "Loi Larcher 2007 : concertation préalable avec partenaires sociaux",
              "Fixe droits minimaux & obligations maximales",
              "Régit : embauche → contrats → conditions → durée → rupture → représentants",
            ],
          },
          {
            title: "Autres Codes",
            details: [
              "Code de la Sécurité Sociale",
              "Code de la Mutualité",
              "Code de Commerce (entreprises en difficulté)",
              "Code Pénal (sanctions)",
              "Code Civil (droit des obligations)",
            ],
          },
          {
            title: "Jurisprudence",
            details: [
              "Chambre sociale de la Cour de cassation",
              "Organe suppléant de définition des orientations",
              "Ex : obligation de reclassement en licenciement économique",
            ],
          },
        ],
      },
      {
        title: "Sources Internationales",
        icon: "🌍",
        color: "#117a65",
        items: [
          {
            title: "Accords Bilatéraux",
            details: [
              "Pays frontaliers (ex : Suisse)",
              "Pays d'immigration (anciennes colonies)",
            ],
          },
          {
            title: "OIT",
            details: [
              "Organisation Internationale du Travail",
              "Ratification de conventions",
              "Seul survivant de la SDN",
            ],
          },
          {
            title: "Droit de l'UE",
            details: [
              "Traité de Rome : marché commun du travail",
              "Législations très différentes selon les pays",
              "Problèmes éthiques : dumping social",
            ],
          },
        ],
      },
      {
        title: "Sources Non Étatiques",
        icon: "🤝",
        color: "#6c3483",
        items: [
          {
            title: "Convention Collective",
            details: [
              "Accord syndicat salariés ↔ groupement employeurs",
              "Force obligatoire pour tous les salariés",
              "4 niveaux : Branche / Professionnel / Entreprise / ANI",
            ],
          },
          {
            title: "Principe de Faveur",
            details: [
              "Clause la plus favorable au salarié s'applique",
              "Fortement réduit par ordonnances Macron 2017",
              "Accord d'entreprise désormais privilégié",
            ],
          },
        ],
      },
      {
        title: "Usage d'Entreprise",
        icon: "🔄",
        color: "#b9770e",
        items: [
          {
            title: "3 Critères Cumulatifs",
            details: [
              "① GÉNÉRALITÉ : tout le personnel ou une catégorie",
              "② CONSTANCE : attribué régulièrement",
              "③ FIXITÉ : règles de calcul précises et objectives",
              "⚠️ Se met en place sans écrit ni procédure",
            ],
          },
          {
            title: "Dénonciation de l'Usage",
            details: [
              "L'employeur peut supprimer/modifier sans justifier",
              "① Informer le CSE",
              "② Informer individuellement chaque salarié (LRAR)",
              "③ Respecter un délai de prévenance suffisant",
              "⚠️ Procédure obligatoire même si accord des salariés",
            ],
          },
          {
            title: "≠ Engagement Unilatéral",
            details: [
              "Pas besoin d'être général, fixe et constant",
              "Figure sur un écrit (note de service, affichage, RI)",
              "Même procédure de dénonciation que l'usage",
            ],
          },
        ],
      },
      {
        title: "Règlement Intérieur",
        icon: "📋",
        color: "#922b21",
        items: [
          {
            title: "Obligation",
            details: [
              "< 50 salariés : facultatif",
              "≥ 50 salariés : OBLIGATOIRE",
              "Seuil atteint pendant 12 mois consécutifs",
              "Délai de 12 mois supplémentaires pour l'établir",
            ],
          },
          {
            title: "Clauses Obligatoires",
            details: [
              "Santé & sécurité",
              "Discipline + échelle des sanctions",
              "Procédures disciplinaires",
              "Droits de la défense",
              "Harcèlement moral/sexuel & agissements sexistes",
              "Protection lanceurs d'alerte",
            ],
          },
          {
            title: "Clauses Interdites",
            details: [
              "Contraire aux lois/conventions",
              "Restriction disproportionnée des libertés",
              "Clause discriminatoire",
            ],
          },
          {
            title: "Formalités",
            details: [
              "Consultation du CSE (avis, pas approbation)",
              "Dépôt au greffe du CPH",
              "Publicité (affichage, intranet...)",
              "Transmission inspecteur du travail (2 exemplaires + avis CSE)",
              "Entrée en vigueur : min. 1 mois après formalités",
              "Rédigé en français (traductions possibles)",
            ],
          },
          {
            title: "Champ d'Application",
            details: [
              "Tous les salariés (avant et après mise en place)",
              "Stagiaires : OUI",
              "Intérimaires/extérieurs : hygiène, sécurité, discipline SEULEMENT",
              "⚠️ Pas les sanctions ni la procédure disciplinaire pour eux",
            ],
          },
        ],
      },
      {
        title: "Hiérarchie des Normes",
        icon: "📊",
        color: "#1b4f72",
        items: [
          {
            title: "Convention antérieure à Usage",
            details: [
              "Usage ne peut PAS restreindre les droits conventionnels",
              "Usage PEUT améliorer → il prévaut si plus favorable",
            ],
          },
          {
            title: "Usage antérieur à Convention",
            details: [
              "Objet DIFFÉRENT : usage subsiste",
              "MÊME objet : convention se substitue, même si usage plus favorable",
              "Ex : prime usage ≠ accord intéressement → prime maintenue",
            ],
          },
          {
            title: "Ordonnance 2017",
            details: [
              "Nouvel ordonnancement : accord d'entreprise privilégié",
              "3 blocs : impératif / verrouillé / supplétif",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Institutions & Contrat de Travail",
    color: "#0e6655",
    accent: "#1abc9c",
    light: "#d1f2eb",
    icon: "📝",
    sections: [
      {
        title: "Inspection du Travail",
        icon: "🔍",
        color: "#0e6655",
        items: [
          {
            title: "4 Missions",
            details: [
              "① INFORMER : faciliter accès au droit",
              "② CONSEILLER : adapter info aux situations",
              "③ CONCILIER : médiateur conflit collectif",
              "④ CONTRÔLER : santé, sécurité, représentants, durée, travail illégal",
            ],
          },
          {
            title: "Pouvoir de Décision",
            details: [
              "Autorisation rupture conventionnelle / licenciement salarié protégé",
              "Dérogation durées maximales de travail",
              "Horaires individualisés sans représentant",
              "Dérogation travail des jeunes",
              "Contrôle règlement intérieur",
            ],
          },
        ],
      },
      {
        title: "Conseil de Prud'hommes",
        icon: "⚖️",
        color: "#7d3c98",
        items: [
          {
            title: "Compétence",
            details: [
              "Litiges INDIVIDUELS nés du contrat de travail/apprentissage",
              "Juges non professionnels élus (parité employeurs/salariés)",
              "Juge départiteur en cas de partage des voix",
              "Procédure GRATUITE, avocat non obligatoire",
            ],
          },
          {
            title: "Délais de Prescription ⏰",
            details: [
              "Rupture du contrat : 12 MOIS (à compter de la notification)",
              "Paiement salaires : 3 ANS (date d'exigibilité)",
              "Harcèlement / Discrimination : 5 ANS",
            ],
          },
          {
            title: "Quel CPH saisir ?",
            details: [
              "Lieu de l'établissement OU lieu de conclusion du contrat OU siège social",
              "Travail à domicile → domicile du salarié",
            ],
          },
        ],
      },
      {
        title: "Définition du Contrat de Travail",
        icon: "📄",
        color: "#1a5276",
        items: [
          {
            title: "3 Critères Cumulatifs",
            details: [
              "① PRESTATION DE TRAVAIL",
              "② RÉMUNÉRATION",
              "③ LIEN DE SUBORDINATION",
              "→ Contrôle employeur + moyens fournis + service organisé",
            ],
          },
          {
            title: "Requalification possible",
            details: [
              "Fausse sous-traitance → requalification en CDI",
              "Fourniture exclusive de main-d'œuvre sans savoir-faire",
              "Conditions assimilant aux salariés du donneur d'ordres",
              "Ex : Île de la Tentation (Cass. 24 avril 2013)",
            ],
          },
        ],
      },
      {
        title: "CDI : Contrat de Droit Commun",
        icon: "📌",
        color: "#b7950b",
        items: [
          {
            title: "Formalisme",
            details: [
              "Art. L.1221-2 : CDI = forme NORMALE de la relation de travail",
              "AUCUN formalisme obligatoire (sauf convention collective)",
              "Absence d'écrit = embauche en CDI",
              "Écrit transmis dans les 2 mois (dir. 91/533/CEE)",
              "Fiche de paie 1er mois = vaut contrat CDI temps plein",
              "Rédigé en français (traduction possible pour salarié étranger)",
            ],
          },
          {
            title: "Obligations Employeur",
            details: [
              "Déclarations obligatoires (URSSAF)",
              "Rémunérer + bulletin de paie",
              "Adapter les salariés à l'emploi (formation !)",
              "Donner directives",
              "Exécuter contrat de bonne foi",
              "Respect obligation de sécurité (EPI)",
            ],
          },
          {
            title: "Obligations Salarié",
            details: [
              "Loyauté envers l'employeur",
              "Discrétion",
              "Respect cumul d'emplois (durées max + repos)",
              "Respect clauses du contrat",
              "Se conformer au RI",
              "Se tenir à disposition de l'employeur",
            ],
          },
          {
            title: "Cumul d'Emploi",
            details: [
              "Possible sauf clause d'exclusivité",
              "Conditions : loyauté + durées max + repos (11h/j, 35h/sem)",
              "⚠️ Refus de communiquer horaires = faute grave",
              "Cass. soc. 19 mai 2010",
            ],
          },
        ],
      },
      {
        title: "Promesse d'Embauche vs Offre",
        icon: "🤝",
        color: "#a04000",
        items: [
          {
            title: "Offre de Contrat",
            details: [
              "Proposition d'engagement (emploi, rémunération, date...)",
              "Peut être RÉTRACTÉE tant que non acceptée",
              "Rétractation = obstacle à la formation du contrat",
            ],
          },
          {
            title: "Promesse d'Embauche",
            details: [
              "Contrat accordant au salarié le DROIT d'accepter",
              "VAUT contrat de travail",
              "Non-respect = licenciement sans cause réelle et sérieuse",
              "⚠️ Même non signée par le salarié, le contrat est FORMÉ",
              "Mentions : emploi, date d'entrée, rémunération, lieu",
            ],
          },
        ],
      },
      {
        title: "Période d'Essai (CDI)",
        icon: "⏱️",
        color: "#0b5345",
        items: [
          {
            title: "Principes",
            details: [
              "NON obligatoire",
              "Doit être prévue par ÉCRIT (contrat ou lettre d'engagement)",
              "Pas d'écrit = pas de PE = pas de rupture simplifiée",
            ],
          },
          {
            title: "Durées Maximales CDI",
            details: [
              "Ouvriers/Employés : 2 MOIS",
              "Agents de maîtrise/Techniciens : 3 MOIS",
              "Cadres : 4 MOIS",
            ],
          },
          {
            title: "Renouvellement",
            details: [
              "1 seul renouvellement possible",
              "Conditions CUMULATIVES :",
              "① Accord de branche étendu le prévoit",
              "② Prévu dans le contrat de travail",
              "③ Accord écrit du salarié",
            ],
          },
          {
            title: "Délai de Prévenance (Rupture)",
            details: [
              "Par l'EMPLOYEUR : 24h (<8j) / 48h (8j-1m) / 2 sem (1-3m) / 1 mois (>3m)",
              "Par le SALARIÉ : 24h (<8j) / 48h (≥8j)",
              "Notification : LRAR ou main propre contre décharge",
              "Délai > durée restante → indemnité compensatrice",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Clauses Particulières",
    color: "#7b241c",
    accent: "#e74c3c",
    light: "#fadbd8",
    icon: "📎",
    sections: [
      {
        title: "Modification du Contrat",
        icon: "✏️",
        color: "#7b241c",
        items: [
          {
            title: "Changement vs Modification",
            details: [
              "CHANGEMENT conditions travail : pouvoir de direction, refus = faute",
              "MODIFICATION élément essentiel : accord du salarié REQUIS",
              "Éléments essentiels : fonctions, rémunération, durée, lieu de travail",
            ],
          },
          {
            title: "Motif Personnel",
            details: [
              "Informer le salarié + délai « suffisant » (≈15 jours)",
              "Refus → rupture à l'initiative de l'employeur OU poursuite conditions antérieures",
            ],
          },
          {
            title: "Motif Économique",
            details: [
              "Difficultés économiques / transferts technologiques / réorganisation",
              "Information individuelle + délai de réflexion 1 MOIS",
              "Refus → poursuite OU licenciement économique",
              "Acceptation → contrat aux nouvelles conditions",
            ],
          },
          {
            title: "Règles par Élément",
            details: [
              "FONCTIONS : modification OK si même qualification/responsabilités",
              "RÉMUNÉRATION : accord obligatoire (élément essentiel + mode de calcul)",
              "DURÉE : accord obligatoire (sauf répartition horaire = pouvoir direction)",
              "LIEU : même zone géo = changement / autre zone = modification",
            ],
          },
        ],
      },
      {
        title: "Clause de Non-Concurrence",
        icon: "🚫",
        color: "#6c3483",
        items: [
          {
            title: "5 Conditions de Validité (cumulatives)",
            details: [
              "① Indispensable à la protection des intérêts légitimes",
              "② Limitée dans le TEMPS",
              "③ Limitée dans l'ESPACE",
              "④ Tenir compte des spécificités de l'emploi",
              "⑤ Contrepartie financière NON dérisoire",
              "⚠️ Ne doit pas empêcher toute activité professionnelle",
            ],
          },
          {
            title: "Jurisprudence Clé",
            details: [
              "Chauffeur-livreur : pas de qualification → clause inopposable (Cass. 20/01/1999)",
              "36 mois excessifs → réduits à 12 mois (Cass. 7 mars 2007)",
              "1/10e du salaire brut = dérisoire → clause illicite (Cass. 15 nov. 2006)",
              "Contrepartie versée APRÈS rupture uniquement (Cass. 7 mars 2007)",
            ],
          },
          {
            title: "Levée de l'Option",
            details: [
              "Renonciation possible dans conditions du contrat/convention",
              "Ou accord du salarié si rien n'est prévu",
              "Renonciation claire, non équivoque, notifiée par LRAR",
              "Effet : libère employeur (paiement) et salarié (obligation)",
            ],
          },
        ],
      },
      {
        title: "Clause de Mobilité",
        icon: "🚗",
        color: "#1a5276",
        items: [
          {
            title: "Conditions de Validité",
            details: [
              "Prévue dans le contrat de travail",
              "Zone géographique CLAIREMENT définie",
              "Pas d'extension unilatérale possible",
              "Mise en œuvre de bonne foi + besoin objectif",
              "Respect vie personnelle et familiale (proportionnalité)",
            ],
          },
          {
            title: "Limites",
            details: [
              "Pas de mutation vers société du groupe (Cass. 23 sept. 2009)",
              "Établissements existants à la date de signature SEULEMENT (Cass. 12 mai 2004)",
              "Territoire national possible si justifié par fonctions (Cass. 5 avril 2018)",
              "Pas de partage du temps entre établissements",
              "Inapplicable au passage domicile → siège",
            ],
          },
          {
            title: "Refus Possible du Salarié si…",
            details: [
              "Mutation modifie élément essentiel (ex: jour → nuit)",
              "Délai trop court",
              "Atteinte disproportionnée à la vie personnelle/familiale",
            ],
          },
        ],
      },
      {
        title: "Clause d'Exclusivité",
        icon: "🔒",
        color: "#0e6655",
        items: [
          {
            title: "Définition & Validité",
            details: [
              "Interdit au salarié de travailler pour un autre employeur PENDANT le contrat",
              "Doit être indispensable à la protection des intérêts légitimes",
              "Justifiée par la nature de la tâche",
              "Proportionnée au but recherché (art. L.1121-1 C. trav.)",
              "Exception : création/reprise d'entreprise → levée pendant 1 an",
            ],
          },
        ],
      },
      {
        title: "Clause de Dédit-Formation",
        icon: "🎓",
        color: "#b7950b",
        items: [
          {
            title: "4 Conditions de Validité",
            details: [
              "① Formation entraînant des frais réels AU-DELÀ des obligations légales",
              "② Indemnité de dédit proportionnée aux frais",
              "③ Ne doit pas priver de la faculté de démissionner",
              "④ Prévue par ÉCRIT AVANT le début de la formation",
              "⚠️ Ne s'applique PAS si rupture à l'initiative de l'employeur (Cass. 10 mai 2012)",
            ],
          },
        ],
      },
      {
        title: "Autres Clauses",
        icon: "📦",
        color: "#5b2c6f",
        items: [
          {
            title: "Clause Pénale",
            details: [
              "Indemnité forfaitaire en cas d'inexécution",
              "Souvent liée à la clause de non-concurrence",
              "Le juge peut augmenter ou réduire le montant",
            ],
          },
          {
            title: "Clause Parachute (Golden Parachute)",
            details: [
              "Garantie d'emploi pendant une durée déterminée",
              "Pas de congédiement sauf faute grave/lourde",
              "Sanction pécuniaire si violation par l'employeur",
            ],
          },
          {
            title: "Clauses Autorisées",
            details: [
              "Clause de quota/objectifs : objectifs doivent être réalistes",
              "Clause d'invention : propriété entreprise + prime à l'inventeur",
              "Clause de confidentialité : interdit divulgation infos",
              "Clause de variabilité : salaire fixe + variable (commerciaux)",
            ],
          },
          {
            title: "Clauses INTERDITES ⛔",
            details: [
              "Indexation automatique (sauf sur gains de la société)",
              "Mise à la retraite automatique par l'âge",
              "Clause de rupture prédéfinie",
              "Imposition/interdiction syndicale, imposition célibat",
              "Atteinte vie privée, interdire conjoint même entreprise",
              "Recrutement à vie, toute clause discriminatoire",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "CDD, Temps Partiel & CTT",
    color: "#1b4f72",
    accent: "#3498db",
    light: "#d6eaf8",
    icon: "⏳",
    sections: [
      {
        title: "CDD : Principes Fondamentaux",
        icon: "📋",
        color: "#1b4f72",
        items: [
          {
            title: "Règle d'Or",
            details: [
              "Art. L.1242-1 : ne peut pourvoir DURABLEMENT un emploi lié à l'activité NORMALE et PERMANENTE",
              "Obligatoirement ÉCRIT avec motif PRÉCIS",
              "Sans écrit → réputé CDI",
              "Transmis au salarié dans les 2 JOURS OUVRABLES",
              "⚠️ Depuis ordonnances Macron : non-transmission → indemnité 1 mois (pas requalification)",
              "Égalité de traitement avec les CDI",
            ],
          },
        ],
      },
      {
        title: "CDD : 7 Motifs de Recours",
        icon: "✅",
        color: "#148f77",
        items: [
          {
            title: "1. Remplacement",
            details: [
              "Absence/suspension temporaire d'un salarié",
              "Passage provisoire à temps partiel",
              "Départ définitif précédant suppression du poste",
              "Attente entrée en service CDI (max 9 mois)",
              "Remplacement chef d'entreprise/profession libérale/conjoint",
              "⚠️ Mentions obligatoires : nom, qualification, statut du remplacé",
            ],
          },
          {
            title: "2. Accroissement Temporaire",
            details: [
              "Surcroît temporaire d'activité",
              "Tâche occasionnelle hors activité normale",
              "Commande exceptionnelle à l'exportation (consultation CSE)",
              "Travaux urgents liés à la sécurité",
            ],
          },
          {
            title: "3. Emplois Temporaires par Nature",
            details: [
              "Contrats saisonniers (tourisme, agroalimentaire)",
              "Contrats d'usage (secteurs définis par décret art. D.1242-1)",
              "Contrats vendanges (max 1 mois, cumul max 2 mois/12 mois)",
            ],
          },
          {
            title: "4-7. Autres Motifs",
            details: [
              "4. CDD à objet défini : ingénieurs/cadres, 18-36 mois, non renouvelable",
              "5. CDD alternance : apprentissage ou professionnalisation",
              "6. CDD politique emploi : CUI, CDD sénior",
              "7. CDD joueur professionnel (e-sport)",
            ],
          },
        ],
      },
      {
        title: "CDD : Interdictions & Sanctions",
        icon: "⛔",
        color: "#922b21",
        items: [
          {
            title: "Interdictions de Recours",
            details: [
              "❌ Remplacement de grévistes",
              "❌ Travaux dangereux (liste art. D.4154-1)",
              "❌ Remplacement licencié économique < 6 mois (sauf CDD ≤ 3 mois + avis IRP)",
            ],
          },
          {
            title: "Sanctions CDD Irrégulier",
            details: [
              "Requalification en CDI",
              "Amende 3 750 € (7 500 € + 6 mois prison si récidive)",
              "Indemnité de requalification ≥ 1 mois de salaire",
            ],
          },
        ],
      },
      {
        title: "CDD : Durée & Renouvellement",
        icon: "📅",
        color: "#7d6608",
        items: [
          {
            title: "Durées Maximales",
            details: [
              "1 mois : vendanges",
              "3 mois : accroissement après licenciement éco",
              "8 mois : emplois saisonniers",
              "9 mois : attente CDI / travaux urgents sécurité",
              "18 mois : PRINCIPE (accroissement, remplacement terme précis)",
              "24 mois : suppression poste, export, contrat à l'étranger",
              "36 mois : objet défini, CDD sénior",
            ],
          },
          {
            title: "Renouvellement",
            details: [
              "MAX 2 RENOUVELLEMENTS (sauf accord de branche)",
              "Conditions prévues au contrat OU avenant AVANT le terme",
              "Durée renouvellement peut différer du contrat initial",
              "Durée totale (initial + renouvellements) = max applicable",
            ],
          },
          {
            title: "Terme Imprécis",
            details: [
              "Possible pour : remplacement, saisonnier, usage, objet défini",
              "Durée MINIMALE obligatoire",
              "Fin : retour du remplacé ou réalisation de l'objet",
              "Requalification CDI si : se poursuit sans avenant / durée max dépassée",
            ],
          },
        ],
      },
      {
        title: "CDD : Succession & Carence",
        icon: "🔄",
        color: "#4a235a",
        items: [
          {
            title: "Même Poste",
            details: [
              "Délai de carence obligatoire entre 2 CDD",
              "Non-respect → requalification CDI + amende 3 750 €",
            ],
          },
          {
            title: "Même Salarié",
            details: [
              "Poursuite après terme → CDI automatique",
              "Succession continue possible SI : remplacement / usage / saisonnier",
              "Sinon : délai de carence (même poste) ou délai raisonnable (poste différent)",
            ],
          },
        ],
      },
      {
        title: "CDD : Période d'Essai",
        icon: "⏱️",
        color: "#1a5276",
        items: [
          {
            title: "Calcul PE du CDD",
            details: [
              "CDD ≤ 6 mois : 1 jour/semaine (max 2 semaines)",
              "CDD > 6 mois : max 1 MOIS",
              "Terme imprécis : calcul sur la durée minimale",
            ],
          },
        ],
      },
      {
        title: "Contrat Temps Partiel",
        icon: "⏰",
        color: "#0e6655",
        items: [
          {
            title: "Définition",
            details: [
              "Durée < durée légale : < 35h/sem ou < 151,67h/mois ou < 1607h/an",
              "Possible en CDI ou CDD",
              "Obligatoirement ÉCRIT (sinon présomption temps complet)",
              "Temps partiel « à la carte » INTERDIT",
            ],
          },
          {
            title: "Mentions Obligatoires",
            details: [
              "Qualification + rémunération",
              "Durée hebdomadaire ou mensuelle EXACTE",
              "Répartition sur jours/semaines",
              "Limites heures complémentaires",
              "Cas de modification + nature de la modification",
              "Modalités communication horaires (écrit, délai prévenance)",
            ],
          },
          {
            title: "Durée Minimale",
            details: [
              "24h/semaine (ou 104h/mois ou 1248h/an)",
              "Sauf accord de branche / demande écrite et motivée du salarié",
              "Exceptions : étudiant < 26 ans, CDD ≤ 7 jours, remplacement...",
            ],
          },
          {
            title: "Heures Complémentaires",
            details: [
              "Au-delà du contrat MAIS en-deçà de 35h",
              "Max 1/10e (ou 1/3 si accord)",
              "Majoration : 10% (≤ 1/10e) puis 25% (au-delà)",
              "Délai prévenance : 3 jours minimum",
              "Refus fautif seulement si prévues au contrat ET délai respecté",
              "⚠️ Si dépassement 35h → requalification temps complet",
            ],
          },
          {
            title: "Modification Répartition",
            details: [
              "Prévenance : 7 jours ouvrés (ou 3 jours si accord collectif)",
              "Refus légitime si : obligations familiales, études, autre emploi, activité non salariée",
              "Modification non prévue au contrat : refus ≠ faute ni motif licenciement",
            ],
          },
        ],
      },
      {
        title: "CTT : Travail Temporaire",
        icon: "🏭",
        color: "#5b2c6f",
        items: [
          {
            title: "Structure Triangulaire",
            details: [
              "ETT ↔ Entreprise Utilisatrice : contrat de mise à disposition",
              "ETT ↔ Intérimaire : contrat de mission",
              "Transmission dans les 2 jours ouvrables chacun",
              "Tâche précise et temporaire uniquement",
            ],
          },
          {
            title: "2 Formes",
            details: [
              "CTT à durée limitée : mêmes règles que CDD (motifs, durées, renouvellement)",
              "CDI intérimaire : missions + intermissions (RMMG ≥ SMIC)",
            ],
          },
          {
            title: "Fin de Mission",
            details: [
              "Indemnité de fin de mission : 10% rémunération totale brute",
              "Indemnité de congés payés : 10% rémunération totale brute",
              "Rémunération ≥ salarié équivalent de l'entreprise utilisatrice",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Durée du Travail & Rémunération",
    color: "#4a235a",
    accent: "#8e44ad",
    light: "#e8daef",
    icon: "💰",
    sections: [
      {
        title: "Temps de Travail Effectif",
        icon: "⏱️",
        color: "#4a235a",
        items: [
          {
            title: "Définition (art. L.3121-1)",
            details: [
              "« Temps à la disposition de l'employeur + conformer directives + ne peut vaquer à occupations personnelles »",
              "≠ temps de présence dans l'entreprise",
              "Seuil de déclenchement des heures supplémentaires/complémentaires",
            ],
          },
          {
            title: "= Temps de Travail Effectif",
            details: [
              "✅ Heures de délégation (représentants)",
              "✅ Visites médicales",
              "✅ Formation adaptation/évolution emploi",
              "✅ Temps de trajet entre 2 lieux de travail",
              "✅ Intervention pendant astreinte (+ déplacement A/R)",
            ],
          },
          {
            title: "≠ Temps de Travail Effectif",
            details: [
              "❌ Temps de trajet domicile → lieu habituel",
              "❌ Pauses & repas (SAUF si à disposition de l'employeur)",
              "❌ Astreinte hors intervention",
              "❌ Habillage/déshabillage (mais contreparties si obligation + sur lieu de travail)",
            ],
          },
        ],
      },
      {
        title: "Durées Maximales & Repos",
        icon: "📊",
        color: "#1a5276",
        items: [
          {
            title: "Durées Maximales",
            details: [
              "QUOTIDIENNE : 10h (8h pour < 18 ans)",
              "HEBDO absolue : 48h (35h pour < 18 ans)",
              "HEBDO moyenne (12 sem.) : 44h (dérogation 46h)",
              "< 18 ans : max 5h supplémentaires/sem avec accord inspection",
            ],
          },
          {
            title: "Repos Obligatoires",
            details: [
              "PAUSE : 20 min dès 6h de travail (30 min dès 4h30 pour < 18 ans)",
              "QUOTIDIEN : 11h consécutives (12h pour < 18 ans, 14h pour < 16 ans)",
              "HEBDOMADAIRE : 24h + 11h = 35h consécutives (en principe dimanche)",
              "< 18 ans : 2 jours consécutifs",
              "Max 6 jours de travail par semaine",
            ],
          },
        ],
      },
      {
        title: "Heures Supplémentaires",
        icon: "➕",
        color: "#922b21",
        items: [
          {
            title: "Régime",
            details: [
              "Au-delà de 35h/semaine (semaine civile lundi 0h → dimanche 24h)",
              "Doivent être COMMANDÉES par l'employeur (accord implicite suffit)",
              "Mentions obligatoires sur le bulletin de paie",
            ],
          },
          {
            title: "Majorations",
            details: [
              "Accord collectif fixe les taux (prioritaire)",
              "À défaut : 25% (8 premières) puis 50% (au-delà)",
              "Remplacement possible par repos compensateur équivalent",
              "Ex : 1h à 25% = 1h15 de repos / 1h à 50% = 1h30 de repos",
            ],
          },
          {
            title: "Contingent Annuel",
            details: [
              "Accord collectif OU 220h/an par défaut",
              "Au-delà du contingent → contrepartie obligatoire en repos",
              "Repos ouvert dès 7h acquises, pris dans les 2 mois",
              "Consultation CSE au moins 1 fois/an",
            ],
          },
          {
            title: "Preuve",
            details: [
              "Charge partagée mais pèse PLUS sur l'employeur",
              "Tableaux du salarié = élément suffisant pour étayer",
              "Employeur doit fournir éléments justifiant les horaires",
              "Système d'enregistrement doit être fiable et infalsifiable",
            ],
          },
          {
            title: "Sanctions ⚠️",
            details: [
              "Non-respect HS : 750 € d'amende (par salarié)",
              "Non-respect repos compensateur : 750 €",
              "Travail dissimulé : 45 000 € + 3 ans prison",
              "Rappel salaire : prescription 3 ans",
            ],
          },
        ],
      },
      {
        title: "Conventions de Forfait",
        icon: "📋",
        color: "#0e6655",
        items: [
          {
            title: "Forfait Annuel en Heures",
            details: [
              "Rémunère durée annuelle incluant HS prédéterminées",
              "Bénéficiaires : cadres hors horaire collectif + salariés autonomes",
              "Mise en place : accord collectif + convention individuelle",
              "Soumis aux durées maximales et temps de repos",
            ],
          },
          {
            title: "Forfait Annuel en Jours",
            details: [
              "Pas d'horaire mais nombre de JOURS/an (max 218 jours)",
              "Cadres autonomes + salariés dont durée non prédéterminable",
              "Accord collectif + convention individuelle obligatoires",
              "Suivi : employeur vérifie charge de travail raisonnable",
              "Auto-déclaration insuffisante sans contrôle effectif",
            ],
          },
          {
            title: "⚠️ Forfait Irrégulier",
            details: [
              "= pas de forfait → HS au-delà de 35h/sem",
              "Risque travail dissimulé : indemnité 6 mois de salaire",
            ],
          },
        ],
      },
      {
        title: "Modulation du Temps de Travail",
        icon: "📈",
        color: "#7d6608",
        items: [
          {
            title: "Principe",
            details: [
              "Varier la durée hebdomadaire sur l'année",
              "Condition : ≤ 1 607h annuelles (ou plafond accord)",
              "Compensation : semaines hautes ↔ semaines basses",
              "Limite le recours aux HS et au chômage partiel",
            ],
          },
          {
            title: "Accord Collectif Obligatoire",
            details: [
              "Période de référence (max 1 an, ou 3 si branche l'autorise)",
              "Conditions et délais de prévenance des changements",
              "Prise en compte absences et arrivées/départs en cours de période",
              "Peut prévoir seuil annuel < 1 607h pour déclencher HS",
            ],
          },
        ],
      },
      {
        title: "Rémunération",
        icon: "💶",
        color: "#1b4f72",
        items: [
          {
            title: "Principes",
            details: [
              "Élément ESSENTIEL du contrat (modification = accord salarié)",
              "Fixée librement sous réserve des minima (SMIC + conventionnel)",
              "Salaire brut = base + avantages en nature + primes + majorations",
              "≠ remboursements frais, indemnités licenciement, intéressement",
            ],
          },
          {
            title: "Mensualisation",
            details: [
              "Rémunération indépendante du nombre de jours du mois",
              "Calcul : (horaire hebdo × 52) / 12",
              "35h → 151,67h/mois × taux horaire",
              "Temps partiel 30h → 130h/mois × taux horaire",
            ],
          },
          {
            title: "Modalités de Paiement",
            details: [
              "1 fois/mois à date fixe (acompte possible à quinzaine)",
              "> 1 500 € net → chèque ou virement obligatoire",
              "≤ 1 500 € net → espèces possibles si demandé",
              "Bulletin de paie obligatoire (papier ou électronique si pas d'opposition)",
            ],
          },
          {
            title: "Modification de la Rémunération",
            details: [
              "Diminution pour motif économique : LRAR + délai 1 mois de réflexion",
              "Silence du salarié après 1 mois = acceptation",
              "Non-respect procédure → licenciement sans cause réelle et sérieuse",
              "Sanctions pécuniaires INTERDITES",
            ],
          },
        ],
      },
      {
        title: "Égalité H/F - Rémunération",
        icon: "⚖️",
        color: "#6c3483",
        items: [
          {
            title: "Principe",
            details: [
              "Même travail ou travail de valeur égale → même rémunération",
              "Tous employeurs, tous salariés (public + privé)",
              "Rémunération = tous avantages et accessoires",
            ],
          },
          {
            title: "Index Égalité (≥ 50 salariés)",
            details: [
              "Publication annuelle obligatoire",
              "5 critères : écart salaires (40pts) / augmentations (20) / promotions (15) / retour maternité (15) / top 10 salaires (10)",
              "Mesures correctives obligatoires si index insuffisant",
              "Pénalité financière à défaut",
            ],
          },
          {
            title: "Sanctions",
            details: [
              "Civiles : clause discriminatoire nulle, rémunération la plus élevée s'applique",
              "Pénales : 1 an prison + 3 750 € / 1 500 € × nombre de salariés concernés",
            ],
          },
        ],
      },
    ],
  },
];

function MindMapNode({ item, isOpen, toggle, parentColor }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div
        onClick={toggle}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          padding: "10px 14px",
          borderRadius: 10,
          background: isOpen
            ? `linear-gradient(135deg, ${parentColor}15, ${parentColor}08)`
            : "rgba(255,255,255,0.6)",
          border: `1.5px solid ${isOpen ? parentColor + "40" : "#e0e0e0"}`,
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <span
          style={{
            fontSize: 11,
            color: parentColor,
            fontWeight: 800,
            minWidth: 18,
            marginTop: 2,
          }}
        >
          {isOpen ? "▼" : "▶"}
        </span>
        <span
          style={{
            fontWeight: 700,
            fontSize: 14,
            color: "#1a1a2e",
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </span>
      </div>
      {isOpen && (
        <div
          style={{
            marginLeft: 20,
            marginTop: 4,
            borderLeft: `3px solid ${parentColor}30`,
            paddingLeft: 14,
          }}
        >
          {item.details.map((d, i) => (
            <div
              key={i}
              style={{
                padding: "5px 0",
                fontSize: 13,
                color: "#2c3e50",
                lineHeight: 1.5,
                borderBottom:
                  i < item.details.length - 1 ? "1px dotted #e8e8e8" : "none",
              }}
            >
              {d}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionCard({ section, courseColor }) {
  const [openItems, setOpenItems] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleItem = useCallback((idx) => {
    setOpenItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
  }, []);

  const expandAll = () => {
    const all = {};
    section.items.forEach((_, i) => (all[i] = true));
    setOpenItems(all);
  };
  const collapseAll = () => setOpenItems({});

  return (
    <div
      style={{
        background: "white",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        border: `1px solid ${section.color}20`,
        marginBottom: 16,
      }}
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "16px 20px",
          background: `linear-gradient(135deg, ${section.color}, ${section.color}dd)`,
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: 22 }}>{section.icon}</span>
        <span
          style={{
            fontSize: 17,
            fontWeight: 800,
            color: "white",
            flex: 1,
            letterSpacing: "-0.02em",
          }}
        >
          {section.title}
        </span>
        <span
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.8)",
            background: "rgba(255,255,255,0.2)",
            padding: "3px 10px",
            borderRadius: 20,
            fontWeight: 600,
          }}
        >
          {section.items.length} règle{section.items.length > 1 ? "s" : ""}
        </span>
        <span style={{ color: "white", fontSize: 14 }}>
          {isExpanded ? "▲" : "▼"}
        </span>
      </div>
      {isExpanded && (
        <div style={{ padding: "12px 16px 16px" }}>
          <div
            style={{
              display: "flex",
              gap: 8,
              marginBottom: 10,
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={expandAll}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 6,
                border: `1px solid ${section.color}40`,
                background: "transparent",
                color: section.color,
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Tout ouvrir
            </button>
            <button
              onClick={collapseAll}
              style={{
                fontSize: 11,
                padding: "4px 12px",
                borderRadius: 6,
                border: "1px solid #ddd",
                background: "transparent",
                color: "#888",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              Tout fermer
            </button>
          </div>
          {section.items.map((item, idx) => (
            <MindMapNode
              key={idx}
              item={item}
              isOpen={!!openItems[idx]}
              toggle={() => toggleItem(idx)}
              parentColor={section.color}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchBar({ query, setQuery, color }) {
  return (
    <div style={{ position: "relative", marginBottom: 16 }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="🔍 Rechercher un concept, une règle, un article..."
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: 12,
          border: `2px solid ${color}30`,
          fontSize: 14,
          outline: "none",
          background: "white",
          boxSizing: "border-box",
          fontFamily: "inherit",
        }}
      />
    </div>
  );
}

function filterSections(sections, query) {
  if (!query.trim()) return sections;
  const q = query.toLowerCase();
  return sections
    .map((section) => ({
      ...section,
      items: section.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.details.some((d) => d.toLowerCase().includes(q))
      ),
    }))
    .filter((s) => s.items.length > 0);
}

function QuickRef({ course }) {
  const totalRules = course.sections.reduce(
    (acc, s) => acc + s.items.length,
    0
  );
  const totalDetails = course.sections.reduce(
    (acc, s) => acc + s.items.reduce((a, i) => a + i.details.length, 0),
    0
  );
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        marginBottom: 16,
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          padding: "10px 16px",
          borderRadius: 10,
          background: `${course.color}10`,
          border: `1px solid ${course.color}20`,
          fontSize: 13,
          fontWeight: 600,
          color: course.color,
        }}
      >
        {course.sections.length} chapitres
      </div>
      <div
        style={{
          padding: "10px 16px",
          borderRadius: 10,
          background: `${course.accent}10`,
          border: `1px solid ${course.accent}20`,
          fontSize: 13,
          fontWeight: 600,
          color: course.accent,
        }}
      >
        {totalRules} règles
      </div>
      <div
        style={{
          padding: "10px 16px",
          borderRadius: 10,
          background: "#f0f0f0",
          border: "1px solid #e0e0e0",
          fontSize: 13,
          fontWeight: 600,
          color: "#666",
        }}
      >
        {totalDetails} points de détail
      </div>
    </div>
  );
}

export default function App() {
  const [activeCourse, setActiveCourse] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const course = courses[activeCourse];
  const filtered = filterSections(course.sections, searchQuery);

  return (
    <div
      style={{
        fontFamily:
          "'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        background: "#f5f6fa",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: `linear-gradient(135deg, ${course.color}, ${course.accent})`,
          padding: "24px 20px 16px",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 12,
            textTransform: "uppercase",
            letterSpacing: 2,
            opacity: 0.8,
            marginBottom: 6,
            fontWeight: 600,
          }}
        >
          Fiches de Révision — Droit Social L3
        </div>
        <div
          style={{
            fontSize: 22,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span>{course.icon}</span>
          <span>
            Cours {course.id} : {course.title}
          </span>
        </div>
      </div>

      {/* Course Tabs */}
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "12px 16px",
          overflowX: "auto",
          background: "white",
          borderBottom: "1px solid #eee",
        }}
      >
        {courses.map((c, i) => (
          <button
            key={c.id}
            onClick={() => {
              setActiveCourse(i);
              setSearchQuery("");
            }}
            style={{
              padding: "8px 14px",
              borderRadius: 10,
              border:
                i === activeCourse
                  ? `2px solid ${c.color}`
                  : "2px solid transparent",
              background: i === activeCourse ? `${c.color}12` : "#f8f8f8",
              color: i === activeCourse ? c.color : "#888",
              fontSize: 12,
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
          >
            {c.icon} C{c.id}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "16px" }}>
        <QuickRef course={course} />
        <SearchBar
          query={searchQuery}
          setQuery={setSearchQuery}
          color={course.color}
        />

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: 40,
              color: "#999",
              fontSize: 14,
            }}
          >
            Aucun résultat pour « {searchQuery} »
          </div>
        )}

        {filtered.map((section, idx) => (
          <SectionCard
            key={idx}
            section={section}
            courseColor={course.color}
          />
        ))}

        {/* Legend */}
        <div
          style={{
            marginTop: 20,
            padding: 16,
            borderRadius: 12,
            background: "white",
            border: "1px solid #eee",
            fontSize: 12,
            color: "#888",
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 8, color: "#555" }}>
            Légende Cas Pratique
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <span>⚠️ Piège / Attention</span>
            <span>⛔ Interdiction</span>
            <span>✅ Autorisé</span>
            <span>❌ Non autorisé</span>
            <span>① ② ③ Conditions cumulatives</span>
          </div>
        </div>
      </div>
    </div>
  );
}
