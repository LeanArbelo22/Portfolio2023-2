import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  /* Colors */
  --primary: #29a385;
  --title: #fff;
  --text: #ebebeb;
  --bg: #212730;
  --bg2: #30353b;
  --container: #1d222a;
  --border: #a4a6a8;

  /* Gradients */
  --gradient1: linear-gradient(
    0deg,
    var(--bg2) 0%,
    var(--bg) 100%
  );
  --gradient2: linear-gradient(
    180deg,
    var(--bg2) 0%,
    var(--bg) 100%
  );
  --gradient3: linear-gradient(
    180deg,
    var(--bg) 0%,
    var(--bg) 100%
  );

  /* Typography */
  --font1: 'Jost', sans-serif;
  --font2: 'Caveat', cursive;

  --bigger: 5.2rem;
  --big: 4rem;
  --h1: 2.75rem;
  --h2: 1.875rem;
  --h3: 1.75rem;
  --h4: 1.5rem;
  --h5: 1.375rem;
  --largest: 1.3125rem;
  --larger: 1.25rem;
  --large: 1.125rem;
  --normal: 1rem;
  --small: .9375rem;
  --smaller: .875rem;
  --tiny: .8125rem;

  /* Shadow */
  --shadow: 5px 5px #ffffff19;
  --text-shadow: 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0 #00000033;

  /* Transitions */
  --timing: cubic-bezier(.3, 0, .3, 1);
}

.light {
  --title: #000;
  --text: #262626;
  --bg: #f0ebe3;
  --bg2: #fff;
  --container: #fcfcfc;
  --border: #1d1d1d;
  --shadow: 5px 5px #0003;

  & .bar {
    background-color: #00000019;
  }

  & .percent {
    background-color: var(--border);

    & span {
      background-color: var(--primary);
    }
  }

  & .shape {
    filter: invert(0);
    opacity: 0.85;
  }
}
`;

function Variables () {
  return <GlobalStyle />
}

export default Variables;