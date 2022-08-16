import styled from "styled-components";

const RobotCardStyled = styled.li`
  max-width: 50%;
  background-color: #e5f9e0;
  border: 5px solid #0d3b66;
  border-radius: 2em;
  padding: 0 2em 2em 2em;
  margin: 3em auto;
  min-width: 500px;

  .robot-main-container {
    display: flex;
    gap: 2em;
  }

  .robot-text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: left;
    gap: 2.5em;
  }

  .robot-text {
    text-align: left;
    color: #121619;
    font-size: larger;
    font-weight: 500;
  }

  .robot-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 10px;
    margin: 0;
  }

  h1 {
    text-align: center;
    animation: glitch 3s steps(100) infinite;
    color: #151515;
    font-size: 30px;
    font-family: "Lato", sans-serif;
  }

  @media (min-width: 150px) {
    h1 {
      font-size: 30px;
    }
  }

  @keyframes glitch {
    0% {
      text-shadow: 3px 2px 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    1% {
      text-shadow: 3px 0 0 #ff2d6c, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    2% {
      text-shadow: 5px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    3% {
      text-shadow: 3px 0 0 red, -1px 0 0 #0c33f5;
      filter: blur(0);
    }
    4% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    5% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    6% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    7% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    8% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    9% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    10% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(1);
    }
    11% {
      text-shadow: 1px 0 0 #ff2d6c, -1px 0 0 lime;
      filter: blur(0.5px);
    }
    12% {
      text-shadow: 1px 0 0 red, -2px 0 0 lime;
      filter: blur(0.5px);
    }
    13% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0.5px);
    }
    14% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0);
    }
    15% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0);
    }
    16% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    17% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    18% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    19% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    20% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    21% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    22% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    23% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    24% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    25% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    26% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0.5px);
    }
    27% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0.5px);
    }
    28% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    29% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    30% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    31% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    32% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    33% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    34% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    35% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0.5px);
    }
    36% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0.5px);
    }
    37% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0.5px);
    }
    38% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(2px);
    }
    39% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    40% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    41% {
      text-shadow: 45px 0 0 #0c33f5, -30px 0 0 lime;
      filter: blur(0);
    }
    42% {
      text-shadow: 0 0 0 #0c33f5, 0 0 0 lime;
      filter: blur(0);
    }
    43% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0);
    }
    44% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0);
    }
    45% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0);
    }
    46% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0.5px);
    }
    47% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0.5px);
    }
    48% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    49% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    50% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    51% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    52% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    53% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    54% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    55% {
      text-shadow: 3px 0 0 #ff2d6c, -3px 0 0 #0c33f5;
      filter: blur(0.5px);
    }
    56% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0.5px);
    }
    57% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0.5px);
    }
    58% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    59% {
      text-shadow: -3px 0 0 red, 4px 0 0 #0c33f5;
      filter: blur(0);
    }
    60% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    61% {
      text-shadow: 30px 0 0 red, -20px 0 0 lime;
      filter: blur(0);
    }
    62% {
      text-shadow: 0 0 0 red, 0 0 0 lime;
      filter: blur(0);
    }
    63% {
      text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;
      filter: blur(0);
    }
    64% {
      text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;
      filter: blur(0);
    }
    65% {
      text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;
      filter: blur(0);
    }
    66% {
      text-shadow: 1px 0 0 red, -1px 0 0 #0c33f5;
      filter: blur(0.5px);
    }
    67% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0.5px);
    }
    68% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    69% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    70% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    71% {
      text-shadow: 50px 0 0 red, -30px 0 0 #0c33f5;
      filter: blur(0);
    }
    72% {
      text-shadow: 0 0 0 red, 0 0 0 #0c33f5;
      filter: blur(0);
    }
    73% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    74% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    75% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    76% {
      text-shadow: 3px 0 0 red, -3px 0 0 #0c33f5;
      filter: blur(0);
    }
    77% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    78% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    79% {
      text-shadow: -3px 0 0 red, 3px 0 0 #0c33f5;
      filter: blur(0);
    }
    80% {
      text-shadow: -3px 0 0 lime, 3px 0 0 #758eff;
      filter: blur(0);
    }
    81% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0);
    }
    82% {
      text-shadow: 1px 0 0 #758eff, -1px 0 0 lime;
      filter: blur(0);
    }
    83% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0.5px);
    }
    84% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0.5px);
    }
    85% {
      text-shadow: 1px 0 0 red, -1px 0 0 lime;
      filter: blur(0.5px);
    }
    86% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0.5px);
    }
    87% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0.5px);
    }
    88% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    89% {
      text-shadow: -3px 0 0 red, 10px 0 0 lime;
      filter: blur(0);
    }
    90% {
      text-shadow: -3px 0 0 red, 3px 0 0 lime;
      filter: blur(0);
    }
    91% {
      text-shadow: 60px 0 0 lime, -30px 0 0 #0c33f5;
      filter: blur(0);
    }
    92% {
      text-shadow: 0 0 0 #75ff7e, 0 0 0 #0c33f5;
      filter: blur(0);
    }
    92% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    93% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    94% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    95% {
      text-shadow: 0.8px 0 0 #0c33f5, -0.8px 0 0 lime;
      filter: blur(0);
    }
    96% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    97% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    98% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
    99% {
      text-shadow: -3px 0 0 #0c33f5, 10px 0 0 lime;
      filter: blur(0);
    }
    100% {
      text-shadow: -3px 0 0 #0c33f5, 3px 0 0 lime;
      filter: blur(0);
    }
  }
`;

export default RobotCardStyled;
