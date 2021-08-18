import React from 'react';
import { Section } from '../global';
import styled from 'styled-components';
import mocks from '../../images/mocks/mock1.png';

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
        <h2>Treści pochodzą z różnych źródeł</h2>
        <p>
          Nie tworzymy sami artykułów i postów, które znajdziecie w <b>Washed</b>. Pochodzą one z różnych źródeł
          internetowych.
          Dzięki temu użytkownicy mają dostęp do szerokiej gamy informacji. Co więcej, użytkownicy sami budują budują
          listę źródeł, a także mogą ją ustawiać tak aby odpowiadała ich zainteresowaniom.
        </p>
        <h2>Opłaty pobieramy tylko od użytkowników</h2>
        <p>
          Naszym klientem jest użytkownik. To on płaci za korzystanie z naszej aplikacji. Dlatego na <b>Washed</b> nie
          ma
          denerwujących reklam, a użytkownik może być pewien, że artykuły które czyta, są pewnym źródłem informacji.
        </p>
        <h2>Wszystkie treści przechodzą sprawdzenie wiarygodności</h2>
        <p>
          Każda treść, artykuł, post, itp. zostaje sprawdzona pod kątem wiarygodności. Przy każdym artykule widnieje
          informacja o tym kto ją sprawdził i jaką wystawił ocenę. Robią to specjalni użytkownicy, tak zwani reviewerzy.
        </p>
      </Text>
    </Grid>
  </Section>
);

const Text = styled.div`{
  margin-right: 50px;
  font-family: ${props => props.theme.font.secondary};

  @media (max-width: ${props => props.theme.screen.md}) {
    margin-right: 0px;
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
  }

  p {
    ${props => props.theme.font_size.small};
    margin-bottom: 10px;
  }
}`;

const Art = styled.figure`
  width: 100%;
  margin: 0;
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
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;

export default BusinessModel;