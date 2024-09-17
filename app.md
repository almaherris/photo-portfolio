:root {
--black: #1e1e1e;
--grey: #555454;
--dark-grey: #595757;
--white: #f9f9f9;
}

- {
  box-sizing: border-box;
  margin: 0;
  font-family: "Inter", sans-serif;
  }

a {
text-decoration: none;
color: inherit;
}

ul {
list-style-type: none;
padding: 0;
margin: 0;
}

main {
padding-top: 63px;
}

html,
body {
margin: 0;
padding: 0;
height: 100%;
display: flex;
flex-direction: column;
}

.app-container {
flex: 1;
min-height: calc(100vh - 120px);
}

@media (min-width: 768px) {
main {
padding-top: 75px;
}
}
