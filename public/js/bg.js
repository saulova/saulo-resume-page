function generateParticles(n) {
  let value = `${getRandom(2560)}px ${getRandom(2560)}px #000`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px #000`;
  }
  return value;
}

function generateWhiteParticles(n) {
  let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
  }
  return value;
}

function generateStars(n) {
  let value = `${getRandom(2560)}px ${getRandom(2560)}px #fff`;
  for (let i = 2; i <= n; i++) {
    value += `, ${getRandom(2560)}px ${getRandom(2560)}px #fff`;
  }
  return value;
}

function getRandom(max) {
  return Math.floor(Math.random() * max);
}

function initBG() {
  const particlesSmall = generateParticles(1000);
  const particlesMedium = generateParticles(500);
  const particlesLarge = generateParticles(250);
  const particles1 = document.getElementById("particles1");
  const particles2 = document.getElementById("particles2");
  const particles3 = document.getElementById("particles3");

  if (particles1) {
    particles1.style.cssText = `
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: ${particlesSmall};
    animation: animStar 50s linear infinite;
    `;
  }

  if (particles2) {
    particles2.style.cssText = `
    width: 1.5px;
    height: 1.5px;
    border-radius: 50%;
    box-shadow: ${particlesMedium};
    animation: animateParticle 100s linear infinite;
    `;
  }

  if (particles3) {
    particles3.style.cssText = `
    width: 2px;
    height: 2px;
    border-radius: 50%;
    box-shadow: ${particlesLarge};
    animation: animateParticle 150s linear infinite;
    `;
  }

  const wparticlesSmall = generateWhiteParticles(1000);
  const wparticlesMedium = generateWhiteParticles(500);
  const wparticlesLarge = generateWhiteParticles(250);
  const wparticles1 = document.getElementById("wparticles1");
  const wparticles2 = document.getElementById("wparticles2");
  const wparticles3 = document.getElementById("wparticles3");

  if (wparticles1) {
    wparticles1.style.cssText = `
    width: 1px;
    height: 1px;
    border-radius: 50%;
    box-shadow: ${wparticlesSmall};
    animation: animateParticle 50s linear infinite;
    `;
  }

  if (wparticles2) {
    wparticles2.style.cssText = `
    width: 1.5px;
    height: 1.5px;
    border-radius: 50%;
    box-shadow: ${wparticlesMedium};
    animation: animateParticle 100s linear infinite;
    `;
  }

  if (wparticles3) {
    wparticles3.style.cssText = `
    width: 2px;
    height: 2px;
    border-radius: 50%;
    box-shadow: ${wparticlesLarge};
    animation: animateParticle 150s linear infinite;
    `;
  }
}

document.addEventListener("astro:after-swap", initBG);
initBG();
