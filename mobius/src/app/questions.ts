import { Question, Answer } from './question';

export const QUESTIONS: Question[] = [
  {
    person: "Ojciec Rydzyk",
    post: "Ludzie pokazują palcami, jakim ja samochodem jeżdżę. Że Mercedesem klasy S. A niby czym mam jeździć? Na krowie mam jeździć? Głupoty takie gadają... mogę na krowie, ale gdzie ja bym tę krowę trzymał w Radiu Maryja?",
    source: "",
    answers: [
      {
        correct: false,
        text: "Jeżdżenie na krowie jest OK.",
        reply: "Nie no, serio..?!"
      },
      {
        correct: false,
        text: "Nie da się jeździć na krowie.",
        reply: "no co ty, patrz! (TU BĘDZIE OBRAZEK)"
      },
      {
        correct: true,
        text: "Mercedes i krowa to nie są jedyne opcje.",
        reply: "Słuszna obserwacja!"
      },
      {
        correct: false,
        text: "Krowa się spokojnie spokojnie zmieści w Radiu Maryja.",
        reply: "I co z tego?"
      },
      {
        correct: true,
        text: "O. Rydzyk udaje że jego krytykom chodzi o to, że ma nie jeździć samochodem, a nie że ma nie jeździć bardzo drogim samochodem.",
        reply: "Zdecydowanie!"
      }
    ],
    conclusion: "Odpowiedź c i e): Tu są dwa główne problemy. Często politycy udają że ich oponenci powiedzieli coś dużo bardziej radykalnego, żeby łatwiej z tym dyskutować. Często też ludzie udają że są tylko dwie opcje do wyboru. Na przykład fajnie by było na początku tej gry mieć jakieś inne opcje do wyboru niż Kaczor i Donald. ;)"
  },
  {
    person: "Leszek Miller",
    post: "Kiedy wyszło na jaw, że w Polsce były tajne więzienia w których CIA torturowało więźniów pojmanych w Iraku, Leszek Miller bronił swojej decyzji mówiąc: “Albo jesteśmy po stronie ofiar, albo morderców.”",
    source: "https://www.tvn24.pl/wiadomosci-z-kraju,3/spor-o-tajne-wiezienia-cia-miller-albo-jestesmy-po-stronie-ofiar-albo-mordercow,391389.html",
    answers: [
      "Zakłada, że w więzieniu są tylko mordercy",
      "Zakłada, że jak ktoś jest przeciwko torturom to jest po stronie morderców",
      "Zakłada, że jak budujemy więzienia to jesteśmy po stronie morderców"
    ],
    conclusion: "XXX to coś będzie XXX"
  }
];