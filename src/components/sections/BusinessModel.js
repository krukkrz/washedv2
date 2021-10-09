import React from 'react';
import { Section } from '../global';
import styled from 'styled-components';
import mocks from '../../images/mocks/mock1.png';
import noAdds from '../../images/mocks/no-ads.svg';
import validityNotificationMock from '../../images/mocks/notification_mock.png';
import singleMock from '../../images/mocks/single_mock.svg';

const BusinessModel = () => (
  <Section>
    <Grid>
      <Art>
        <img src={mocks} />
      </Art>
      <Text>
        <h1>Naszą siłą jest model biznesowy</h1>
        <p>Fake newsy przyciągają czytelników. Właśnie dlatego powstają jako efekt uboczny modelu biznesowego opartego
          na reklamodawcach. Większość social mediów utrzymuje się z opłat za reklamy. Im dłużej uwaga użytkownika
          pozostaje skupiona na aplikacji tym lepsze wyniki sprzedażowe reklam, dlatego ich głównym celem jest
          utrzymanie uwagi czytelnika tak długo jak to możliwe.
        </p>
        <p>
          W <b>Washed</b> odwracamy ten model do góry nogami. Naszym
          celem jest dostarczenie wartościowych i interesujących treści, a także dobro użytkownika. Dlatego opieramy
          swój model biznesowy o trzy filary:
        </p>
      </Text>
    </Grid>
    <Grid>
      <Text>
        <h2>Opłaty pobieramy tylko od użytkowników</h2>
        <p>
          Naszym klientem jest użytkownik. To on płaci za korzystanie z naszej aplikacji. Dlatego na <b>Washed</b> nie
          ma denerwujących reklam, a użytkownik może być pewien, że artykuły które czyta, są pewnym źródłem informacji.
        </p>
      </Text>
      <Art>
        <img src={noAdds} />
      </Art>
    </Grid>
    <Grid>
      <Art>
        <img src={validityNotificationMock} />
      </Art>
      <Text>
        <h2>Wszystkie treści przechodzą sprawdzenie wiarygodności</h2>
        <p>
          Każda treść, artykuł, post, itp. zostaje sprawdzona pod kątem wiarygodności. Prośba o przegląd jest wysyłana
          do każdego użytkownika. Uzytkownicy mogą zaakceptować prośbę a w zamian za przegląd uzyskać zniżkę, lub też
          odrzucić przegląd i wciąż korzystać w pełni z aplikacji.
        </p>
      </Text>
    </Grid>
    <Grid>
      <Text>
        <h2>Różnorodność treści</h2>
        <p>
          Nie tworzymy sami artykułów i postów, które znajdziecie w <b>Washed</b>. Pochodzą one z różnych źródeł
          internetowych.
          Dzięki temu użytkownicy mają dostęp do szerokiej gamy informacji. Co więcej, użytkownicy sami budują budują
          listę źródeł, a także mogą ją ustawiać tak aby odpowiadała ich zainteresowaniom.
        </p>
      </Text>
      <Art>
        <img src={singleMock} />
      </Art>
    </Grid>
  </Section>
);

const Text = styled.div`{
  margin: 50px;
  font-family: ${props => props.theme.font.secondary};

  @media (max-width: ${props => props.theme.screen.md}) {
    margin: 0px;
    padding: 10px;
  }

  h1 {
    font-family: ${props => props.theme.font.secondary};
    margin-bottom: 30px;
  }

  h2 {
    ${props => props.theme.font_size.regular};
    font-family: ${props => props.theme.font.secondary};
    margin-bottom: 10px;
    margin-top: 30px;
    font-weight: bold;
  }

  p {
    ${props => props.theme.font_size.small};
    margin-bottom: 10px;
  }
}`;

const Art = styled.figure`
  width: 70%;
  margin: auto;

  img {
    width: 100%;
    @media (max-width: ${props => props.theme.screen.md}) {
      display: none;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;

export default BusinessModel;