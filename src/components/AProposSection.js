import { Container } from 'react-bootstrap';

const AProposSection = () => (
  <Container style={{ marginTop: '40px' }} className="text-center">
    <div className="anchor" id="apropos" />
    <h1>À propos de moi</h1>
    <p className="paragraph mt-4">
      Je suis un développeur web passionné par la technologie et tout ce qui l'entoure
      (oui, je suis très curieux !).
      J'adore créer des applications innovantes et résoudre des
      problèmes complexes.<br /> Mon objectif est de contribuer à rendre le
      monde meilleur grâce à la technologie,
      tout en continuant d'apprendre et de grandir.
      Que je travaille seul ou en équipe, j'aime prendre des initiatives et donner de la valeur
      aux produits et aux personnes qui m'entourent.<br />
      J'aime apprendre constamment et remettre en
      question mes connaissances, Je crois fermement en l'entraide et en la coopération.
      Je crois que la bienveillance et le dialogue sont essentiels
      pour progresser ensemble.
      Je suis toujours prêt à écouter, à échanger des idées et à travailler
      ensemble pour atteindre les plus beaux résultats.
    </p>
  </Container>
);

export default AProposSection;
