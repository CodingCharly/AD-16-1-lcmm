function showLinkInfo() {
  const links = document.getElementsByTagName("a"); //var para link que jala el dato a partir del tagname
  const totalLinks = links.length;
  const firstLink = links[0].href;
  const lastLink = links[totalLinks - 1].href;

  alert(
    `Total links: ${totalLinks}\nFirst link: ${firstLink}\nLast link: ${lastLink}`
  );
}