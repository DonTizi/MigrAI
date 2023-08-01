"use client"
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  padding: 1rem;
  text-align: left;
  @media (min-width: 768px) {
    padding: 3rem;
  }
  @media (min-width: 1024px) {
    padding: 5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const SubTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 2rem 0 1rem;
`;

const Text = styled.p`
  font-size: 0.8rem;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const AboutUs = () => (
  <Container>
    <Title>MigrAI ("MigrAI") Conditions d'utilisation et Politique de confidentialité</Title>
    <Text>
      Cette Conditions d'utilisation et Politique de confidentialité décrit comment vos informations personnelles sont
      collectées, utilisées et partagées lorsque vous visitez ou effectuez un achat sur <Link href="https://www.imigrai.ca" target="_blank">www.imigrai.ca</Link> (le "Site").
      MigrAI est une plateforme d'immigration gratuite qui aide les gens à naviguer dans l'immigration canadienne.
      LIMITATIONS MigrAI fournit des informations sur l'immigration basées sur les informations limitées fournies par
      l'utilisateur. Cependant, gardez à l'esprit que les lois sur l'immigration sont très complexes et dépendent d'une
      variété de facteurs. Ce site web n'a en aucun cas l'intention de remplacer les conseils juridiques indépendants. Il
      est toujours recommandé que vous consultiez un professionnel pour obtenir des conseils spécifiques à vos
      circonstances individuelles.
    </Text>

    <SubTitle>CONDITIONS D'UTILISATION</SubTitle>
    <Text>
    <li>1. MigrAI est détenu et exploité par MigrAI et est fourni à vous sous les termes et conditions de cet accord de
      service (l'"Accord").
      </li><li>2. Vous reconnaissez et acceptez les "Limitations" énoncées ci-dessus pour l'utilisation de MigrAI (le "Service").
      </li><li>3. Vous assumez l'ensemble des risques associés à l'utilisation du Service. Le Service est fourni "tel quel" et "tel
      que disponible" sans aucune représentation ou garantie d'aucune sorte, expresse, implicite ou collatérale, y compris
      mais sans s'y limiter, toute représentation ou garantie de qualité marchande ou d'adéquation à un usage particulier.
      Pour plus de certitude, sans limiter ce qui précède :
      <ul>
        <li>ni cet Accord, ni aucun document fourni en vertu de celui-ci n'est destiné à exprimer ou à impliquer une
        représentation ou une garantie que le Service sera ininterrompu, opportun, exempt d'erreurs ou exempt de tout
        virus logiciel ou autre composant nuisible ;</li>
        <li>Le Service n'est en aucun cas destiné ou à être interprété comme un conseil juridique ;</li>
      </ul>
      </li><li>4. Vous pouvez accéder et utiliser le Service et les informations, fonctionnalités et services qui y sont associés
      (collectivement, le "Contenu") uniquement conformément à toutes les lois et réglementations applicables et à ces
      Conditions d'utilisation. Le Contenu ne peut être imprimé, copié ou sauvegardé sur votre propre ordinateur que pour
      votre usage personnel et non commercial. Vous ne devez pas, directement ou indirectement, imprimer, copier,
      reproduire, sauvegarder sur votre propre ordinateur, modifier, traduire, fusionner avec d'autres données, encadrer
      dans un autre site web, poster sur un autre site web, ou utiliser le Contenu de quelque manière que ce soit pour un
      usage public, commercial ou non personnel. Vous ne devez pas, directement ou indirectement, afficher, poster,
      diffuser, distribuer, publier, diffuser, transférer, vendre ou sous-licencier le Contenu à une autre personne ou
      entité.
      </li><li>5. MigrAI, et ses parents, filiales, affiliés, dirigeants, administrateurs, actionnaires, employés, consultants
      et/ou agents, ne seront pas responsables envers vous, en aucune circonstance ou théorie juridique ou équitable,
      pour toute perte ou dommage de quelque nature que ce soit, y compris sans limiter la généralité de ce qui précède,
      tout dommage direct, indirect, accessoire, spécial ou consécutif, perte d'affaires, de profits ou de bonne
      volonté, perte d'utilisation ou de données, interruption d'affaires, toute réclamation de votre part ou contre vous,
      ou tout dommage indirect, spécial, accessoire ou consécutif de quelque nature que ce soit, même si MigrAI est au
      courant du risque de tels dommages, découlant de ou en relation avec :
      <ul>
        <li>l'un des sujets mentionnés dans les sections 2 ou 3 ci-dessus ;</li>
        <li>votre utilisation de, l'accès à ou la confiance dans le Service ;</li>
        <li>votre incapacité à utiliser correctement le Service, que ce soit à cause de votre propre faute ou de celle de
        MigrAI ;</li>
        <li>votre incapacité à accéder au Service ;</li>
        <li>toute erreur ou omission dans le Contenu ;</li>
        <li>toute interruption ou retard dans le Service ;</li>
        <li>toute réclamation pour diffamation, violation de la vie privée ou de la publicité, et violation des droits de
        propriété intellectuelle découlant de l'utilisation du Service ;</li>
        <li>toute réclamation pour violation de la sécurité des données ou de la confidentialité découlant de l'utilisation
        du Service.</li>
      </ul>
      </li><li>6. Vous acceptez d'indemniser, de défendre et de dégager de toute responsabilité MigrAI, et ses parents, filiales,
      affiliés, dirigeants, administrateurs, actionnaires, employés, consultants et/ou agents, contre toutes réclamations,
      responsabilités, dommages, pertes, coûts, dépenses, frais (y compris les honoraires d'avocats raisonnables et les
      coûts) que MigrAI peut subir ou engager découlant de, liés à ou qui pourraient découler de votre utilisation du
      Service.</li>
    </Text>

    <SubTitle>POLITIQUE DE REMBOURSEMENT </SubTitle>
    <Text>
      Si vous n'êtes pas satisfait de votre achat, nous offrons une politique de remboursement. Veuillez nous contacter à 
       <Link href=" mailto:contact@imigrai.ca"> contact@imigrai.ca</Link> pour plus d'informations.
    </Text>

    <SubTitle>POLITIQUE DE CONFIDENTIALITÉ </SubTitle>
    <Text>
      Nous utilisons ces informations pour traiter vos transactions, pour vous envoyer des confirmations de commande, pour
      répondre à vos demandes de service à la clientèle, pour gérer votre compte, pour envoyer des informations de
      marketing et de mise à jour, pour répondre à vos questions et préoccupations et pour faciliter votre utilisation du
      site.
      Vos informations personnelles seront utilisées pour le service de paiement Stripe et pour l'authentification sur
      notre site via Clerk.
      Nous ne vendons, n'échangeons, ni ne louons vos informations personnelles à des tiers.
      Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment, donc veuillez la revoir
      fréquemment.
      Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à  <Link href="mailto:contact@imigrai.ca"> contact@imigrai.ca</Link>.
    </Text>
  </Container>
);

export default AboutUs;
